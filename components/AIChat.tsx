/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { MessageSquare, X, Send, User, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatProps {
  onProjectData?: (data: { name: string; phone: string; email: string; description: string }) => void;
}

export interface AIChatHandle {
  openWithContext: (message: string) => void;
}

const AIChat = forwardRef<AIChatHandle, AIChatProps>(({ onProjectData }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour. Je suis l\'assistant virtuel Chappuis. Comment puis-je vous aider pour vos besoins sanitaires ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    openWithContext: (initialMessage: string) => {
      setIsOpen(true);
      // Simulate user sending a message automatically
      handleSend(initialMessage, true); 
    }
  }));

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (messageText = input, isAuto = false) => {
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    if (!isAuto) setInput('');
    setIsLoading(true);

    setTimeout(scrollToBottom, 100);

    const rawResponse = await sendMessageToGemini(messageText);
    
    // Check for JSON Data in response
    const jsonMatch = rawResponse.match(/```json\s*([\s\S]*?)\s*```/);
    let displayText = rawResponse;

    if (jsonMatch && jsonMatch[1]) {
      try {
        const jsonData = JSON.parse(jsonMatch[1]);
        if (jsonData.type === 'PROJECT_SUBMISSION' && onProjectData) {
          // Remove the JSON block from the text displayed to user
          displayText = rawResponse.replace(/```json[\s\S]*?```/, '').trim();
          if (!displayText) displayText = "Parfait, j'ai noté toutes vos informations. Je transmets votre dossier immédiatement.";
          
          // Trigger parent callback
          onProjectData(jsonData.data);
        }
      } catch (e) {
        console.error("Error parsing AI JSON", e);
      }
    }

    setMessages(prev => [...prev, { role: 'model', text: displayText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] md:w-80 bg-white border border-slate-200 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-medium text-white text-sm">Assistant Chappuis</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-all hover:rotate-90">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'model' && (
                     <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        {msg.text.includes('dossier') ? <Sparkles className="w-3 h-3 text-cyan-600" /> : <Bot className="w-3 h-3 text-slate-600" />}
                     </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-slate-900 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-2">
                   <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        <Bot className="w-3 h-3 text-slate-600" />
                   </div>
                  <div className="bg-white p-3 rounded-lg rounded-bl-none border border-slate-200 shadow-sm flex gap-1 items-center h-10">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Posez une question..."
                  className="flex-1 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm px-3 py-2 rounded-md focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="bg-slate-900 p-2 rounded-md hover:bg-slate-800 transition-all active:scale-90 disabled:opacity-50 disabled:transform-none"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 px-6 rounded-full bg-white text-slate-900 border border-slate-200 shadow-lg flex items-center gap-3 font-medium text-sm hover:shadow-xl transition-all"
      >
        {isOpen ? (
          <>Fermer</>
        ) : (
          <>
            <MessageSquare className="w-4 h-4" />
            <span className="hidden md:inline">Assistant Virtuel</span>
          </>
        )}
      </motion.button>
    </div>
  );
});

export default AIChat;
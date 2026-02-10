export interface ProjectFormData {
    name: string;
    phone: string;
    email: string;
    description: string;
}

export const submitProjectForm = async (data: ProjectFormData): Promise<boolean> => {
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn('VITE_WEBHOOK_URL is not defined in .env');
        // Simulate success in development if no webhook is set
        return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Webhook error: ${response.statusText}`);
        }

        return true;
    } catch (error) {
        console.error('Error submitting form:', error);
        return false;
    }
};

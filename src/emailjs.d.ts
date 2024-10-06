declare module '@emailjs/browser' {
    interface EmailJSResponse {
        id: string;
        status: number;
        text: string;
    }

    export function send(serviceID: string, templateID: string, variables: any): Promise<EmailJSResponse>;
    export function init(publicKey: string): void;
}

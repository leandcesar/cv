declare module "html2pdf.js" {
    type Html2PdfOptions = {
        margin: number;
        filename: string;
        image: { type: string; quality: number };
        html2canvas: {
            scale: number;
            ignoreElements: (element: HTMLElement) => boolean;
            onclone: (clonedDocument: Document) => void;
        };
        jsPDF: { unit: string; format: string; orientation: string };
    };

    type Html2PdfWorker = {
        set(options: Html2PdfOptions): Html2PdfWorker;
        from(element: HTMLElement): Html2PdfWorker;
        save(): Promise<void>;
    };

    const html2pdf: () => Html2PdfWorker;

    export default html2pdf;
}

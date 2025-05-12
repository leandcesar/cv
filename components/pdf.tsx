"use client";

export const handlePDFDownload = async () => {
  const element = document.getElementById("resume");
  if (!element) return;

  const html2pdf = (await import("html2pdf.js")).default;

  await html2pdf()
    .set({
      margin: 0,
      filename: "resume.pdf",
      image: { type: "png", quality: 1.0 },
      html2canvas: {
        scale: 2,
        ignoreElements: (el: HTMLElement) => el.classList.contains("hide-for-pdf"),
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    })
    .from(element)
    .save();
};

export function PDFDownloadButton() {
  return (
    <div className="fixed bottom-4 right-20 flex items-center hide-for-pdf">
      <button
        onClick={handlePDFDownload}
        className="button p-3 rounded-full text-foreground shadow-md hover:opacity-90 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="lucide lucide-download"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      </button>
    </div>
  );
}

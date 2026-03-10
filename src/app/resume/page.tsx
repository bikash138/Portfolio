import { ExternalLink } from "lucide-react";

const RESUME_PDF_URL = "/resume.pdf";

export default function ResumePage() {
  return (
    <main className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume</h1>
      <p className="text-gray-400 text-sm mb-8">
        View and download my professional resume.
      </p>

      <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-100">
        <a
          href={RESUME_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 transition-colors shadow-sm"
          aria-label="Open resume in new tab"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
        <iframe
          src={`${RESUME_PDF_URL}#toolbar=0`}
          title="Resume"
          className="w-full h-[calc(100vh-12rem)] min-h-[600px] border-0"
        />
      </div>
    </main>
  );
}

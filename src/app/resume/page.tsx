import { ExternalLink } from "lucide-react";

const RESUME_PDF_URL = "/resume.pdf";

export default function ResumePage() {
  return (
    <main className="py-12">
      <h1 className="mb-2 text-3xl font-bold md:text-4xl">Resume</h1>
      <p className="mb-8 text-sm text-gray-400">
        View and download my professional resume.
      </p>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-xl">
        <a
          href={RESUME_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 rounded-lg bg-white/90 p-2 text-gray-600 shadow-sm transition-colors hover:bg-white hover:text-gray-800"
          aria-label="Open resume in new tab"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
        <iframe
          src={`${RESUME_PDF_URL}#toolbar=0`}
          title="Resume"
          className="h-[calc(100vh-12rem)] min-h-[600px] w-full border-0"
        />
      </div>
    </main>
  );
}

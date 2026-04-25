import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "aa3b1b2e-fbaa-4277-b8de-9a4a9a83c67c",
          email: email,
          subject: "📄 New Resume Download on Portfolio!",
          message: `Someone just downloaded your resume from your portfolio website!\n\nVisitor Email: ${email}`,
          from_name: "Portfolio Resume Bot",
        }),
      });

      if (response.ok) {
        setStatus("success");

        // Trigger PDF download
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // The file needs to be in the public/ folder
        link.download = "Nakhshab_Ansari_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setEmail("");
        }, 2000);
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100]"
            style={{ background: "rgba(11,10,26,0.6)", backdropFilter: "blur(5px)" }}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[24px] p-8 w-full max-w-[440px] pointer-events-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-ink opacity-40 hover:opacity-100 transition-opacity"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-violet mb-4">
                Download PDF
              </div>
              
              <h2 className="font-unbounded font-black text-2xl tracking-tight text-ink mb-2">
                Get my full resume.
              </h2>
              
              <p className="font-light text-sm text-ink opacity-60 mb-8 leading-relaxed">
                Enter your email to download the resume.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status !== "idle"}
                  className="w-full bg-[#f0edff] rounded-xl px-4 py-4 font-mono text-[13px] text-ink outline-none border-2 border-transparent focus:border-violet transition-colors disabled:opacity-50"
                />
                
                <button
                  type="submit"
                  disabled={status !== "idle" || !email}
                  className="w-full rounded-xl py-4 font-unbounded text-[12px] font-bold tracking-wide text-ink transition-all disabled:opacity-50"
                  style={{ background: status === "success" ? "#c8ff00" : "#4a1fff", color: status === "success" ? "#0b0a1a" : "#fff" }}
                >
                  {status === "idle" && "Download Resume ↓"}
                  {status === "submitting" && "Sending..."}
                  {status === "success" && "Downloaded! ✓"}
                </button>
              </form>

              <p className="font-mono text-[9px] text-ink opacity-40 text-center mt-6">
                No spam. You'll only hear back if it's a good fit.
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

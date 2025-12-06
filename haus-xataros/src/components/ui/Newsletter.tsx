import { useState, FormEvent } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Placeholder for newsletter signup logic
    if (email && email.includes("@")) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h3 className="newsletter-title">Stay Connected</h3>
        <p className="newsletter-description">
          Get the latest insights, project updates, and thoughtful perspectives
          delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="newsletter-message success">
            Thank you for subscribing!
          </p>
        )}
        {status === "error" && (
          <p className="newsletter-message error">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </div>
  );
}

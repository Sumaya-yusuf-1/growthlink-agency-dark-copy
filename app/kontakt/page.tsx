"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

type EmailJsError = {
  status?: number;
  text?: string;
  message?: string;
};

const emailJsConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
};

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current || status === "sending") return;

    setStatus("idle");
    setErrorMessage("");

    // Honeypot – bots often fill hidden fields
    const formData = new FormData(formRef.current);
    const honeypot = formData.get("website");

    if (honeypot) {
      return;
    }

    const { publicKey, serviceId, templateId } = emailJsConfig;

    const missingConfig = Object.entries(emailJsConfig)
      .filter(([, value]) => !value?.trim())
      .map(([name]) => name);

    if (
      missingConfig.length > 0 ||
      !publicKey ||
      !serviceId ||
      !templateId
    ) {
      console.log("EmailJS configuration missing:");
      console.log(missingConfig);

      setErrorMessage(
        "EmailJS är inte korrekt konfigurerat. Kontrollera .env.local."
      );

      setStatus("error");
      return;
    }

    console.log("EmailJS config check:");
    console.log({
      hasPublicKey: Boolean(publicKey),
      serviceId,
      templateId,
    });

    setStatus("sending");

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey,
        }
      );

      console.log("EmailJS success:");
      console.log(response);

      setStatus("success");

      formRef.current.reset();
    } catch (err: unknown) {
      const error = err as EmailJsError;

      console.log("EMAILJS ERROR");
      console.log("Status:", error.status);
      console.log("Text:", error.text);
      console.log("Message:", error.message);
      console.log("Full error:", err);

      const readableError =
        error.text ||
        error.message ||
        "Ett okänt fel uppstod när mejlet skulle skickas.";

      setErrorMessage(readableError);
      setStatus("error");
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Kontakt</span>

          <h1>Berätta om ditt nästa projekt</h1>

          <p>
            Fyll i formuläret så kan vi börja planera en hemsida som passar ditt
            företag.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">Få en offert</span>

            <h2>Redo att komma igång?</h2>

            <p>
              Berätta kort om ditt företag, vilken typ av hemsida du behöver och
              ungefär vilken budget du har.
            </p>

            <div className="contact-detail">
              <strong>E-post</strong>
              <span>hello@growthlinkagency.se</span>
            </div>

            <div className="contact-detail">
              <strong>Plats</strong>
              <span>Göteborg, Sverige</span>
            </div>

            <div className="contact-detail">
              <strong>Svarstid</strong>
              <span>Vanligtvis inom 1–2 arbetsdagar</span>
            </div>
          </div>

          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            {/* Honeypot – hidden from real users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
              }}
            />

            <div className="form-row">
              <label>
                Namn

                <input
                  type="text"
                  name="name"
                  placeholder="Ditt namn"
                  required
                />
              </label>

              <label>
                Företag

                <input
                  type="text"
                  name="company"
                  placeholder="Företagsnamn"
                />
              </label>
            </div>

            <label>
              E-post

              <input
                type="email"
                name="email"
                placeholder="namn@foretag.se"
                required
              />
            </label>

            <label>
              Vilken tjänst behöver du?

              <select
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Välj tjänst
                </option>

                <option value="Företagshemsida">
                  Företagshemsida
                </option>

                <option value="E-handel">
                  E-handel
                </option>

                <option value="Redesign">
                  Redesign
                </option>

                <option value="Landningssida">
                  Landningssida
                </option>

                <option value="Annat">
                  Annat
                </option>
              </select>
            </label>

            <label>
              Budget

              <select
                name="budget"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Välj ungefärlig budget
                </option>

                <option value="Under 5 000 kr">
                  Under 5 000 kr
                </option>

                <option value="5 000–10 000 kr">
                  5 000–10 000 kr
                </option>

                <option value="10 000–20 000 kr">
                  10 000–20 000 kr
                </option>

                <option value="20 000 kr +">
                  20 000 kr +
                </option>
              </select>
            </label>

            <label>
              Berätta om projektet

              <textarea
                name="message"
                rows={6}
                placeholder="Vad vill du ha hjälp med?"
                required
              />
            </label>

            <button
              className="btn primary"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Skickar..."
                : "Skicka förfrågan"}
            </button>

           {status === "success" && (
  <div className="success-overlay">
    <div className="success-popup" role="status">
      <div className="confetti confetti-1"></div>
      <div className="confetti confetti-2"></div>
      <div className="confetti confetti-3"></div>
      <div className="confetti confetti-4"></div>
      <div className="confetti confetti-5"></div>
      <div className="confetti confetti-6"></div>

      <div className="success-icon">
        ✓
      </div>

      <span className="success-eyebrow">
        Förfrågan skickad
      </span>

      <h3>Tack!</h3>

      <p>
        Din förfrågan har skickats till Growthlink Agency.
        Vi återkommer vanligtvis inom 1–2 arbetsdagar.
      </p>

      <button
        type="button"
        className="btn primary"
        onClick={() => setStatus("idle")}
      >
        Stäng
      </button>
    </div>
  </div>
)}

            {status === "error" && (
              <div
                className="form-error"
                role="alert"
              >
                <strong>Något gick fel.</strong>

                <p>
                  {errorMessage ||
                    "Försök igen eller mejla oss direkt."}
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
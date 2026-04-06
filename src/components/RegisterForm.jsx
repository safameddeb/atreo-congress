import { useState } from "react";
import emailjs from "@emailjs/browser";
import { registerFields } from "../data/siteData";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  speciality: "",
  country: "",
  city: "",
  workshop: "",
  payment: "",
  size: "",
};

export default function RegisterForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  setStatus("sending");
  setErrorMessage("");

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone,
        speciality: form.speciality,
        country: form.country,
        city: form.city,
        workshop: form.workshop,
        payment: form.payment,
        size: form.size,
      },
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    );

    setStatus("success");
    setForm(initialForm);

  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    setStatus("error");
    setErrorMessage("Failed to send registration. Please try again.");
  }
};
  /////////////////////////////

  return (
    <div className="glass-card overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-600 to-[var(--navy)] px-6 py-8 text-white sm:px-10 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
          Congress registration
        </p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Register for ATREO congress 2026
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
          Fill in the form below with your name, specialty, country, city, and
          contact details.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
      >

{registerFields.map((field) => {
  const sharedProps = {
    id: field.name,
    name: field.name,
    value: form[field.name],
    onChange: handleChange,
    required: field.required,
    className:
      "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100",
  };

  return (
    <label
      key={field.name}
      htmlFor={field.name}
      className={field.type === "textarea" || field.type === "select" ? "sm:col-span-2" : ""}
    >
      <span className="text-sm font-semibold text-slate-700">
        {field.label}
      </span>

      {field.type === "textarea" ? (
        <>
          <textarea {...sharedProps} rows={5} />

          {/* Message d'avertissement après le textarea */}
          {/*
          {field.name === "message" && (
            <div className="mt-2 flex items-start gap-2 text-yellow-800 text-sm">
              <span className="text-yellow-600 font-bold">⚠️</span>
              <span>Le paiement sera à effectuer en espèces ou par virement bancaire.</span>
            </div>
          )}
*/}
        </>
      ) : field.type === "select" ? (
        <select {...sharedProps}>
          <option value="">-- Select your choice --</option>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input {...sharedProps} type={field.type} />
      )}
    </label>
  );
})}

        <div className="sm:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit registration"}
          </button>

          {status === "success" && (
            <p className="text-sm font-medium text-emerald-700">
              Registration sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}

          {status === "idle" && (
            <p className="text-sm text-slate-500">
              Your registration will be sent by email.
            </p>
          )}
        </div>
      </form>

    </div>
  );
}

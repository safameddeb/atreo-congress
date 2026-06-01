import emailjs from "@emailjs/browser";
import { registerFields } from "../data/siteData";
import { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";
const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  speciality: "",
  country: "",
  city: "",
  workshop: [], // ✅ au lieu de ""
  payment: "",
  size: "",
  showWorkshop: false, // ✅ AJOUT OBLIGATOIRE
  // ✅ HOTEL (AJOUT ICI)
  needHotel: false,
  roomType: "",
  checkIn: "",
  checkOut: "",
  hotelNotes: "",
};

export default function RegisterForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setForm((prev) => ({
          ...prev,
          showWorkshop: false,
        }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  const handleChange = (event) => {
    const { name, value, options, multiple } = event.target;

    if (multiple) {
      const selectedValues = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);

      // ✅ Limite à 3 workshops
      if (selectedValues.length > 3) {
        alert("You can select 1, 2 or 3 workshops");
        return;
      }

      setForm((current) => ({ ...current, [name]: selectedValues }));
    } else {
      setForm((current) => ({ ...current, [name]: value }));
    }
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
          galaDinner: form.galaDinner,
          payment: form.payment,
          size: form.size,

          // 🏨 HOTEL (IMPORTANT)
          needHotel: form.needHotel ? "Yes" : "No",
          roomType: form.roomType,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          hotelNotes: form.hotelNotes,
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
              ) : field.name === "workshop" ? (
                <div ref={dropdownRef} className="relative mt-2">
                  {/* Bouton principal */}
                  <button
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        showWorkshop: !prev.showWorkshop,
                      }))
                    }
                    className={sharedProps.className + " text-left"}
                  >
                    {form.workshop.length > 0
                      ? form.workshop.join(", ")
                      : "-- Select your choice --"}
                  </button>

                  {/* Dropdown */}
                  {form.showWorkshop && (
                    <div className="absolute z-10 mt-2 w-full rounded-xl border bg-white shadow-lg p-3">
                      {field.options.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 py-1">
                          <input
                            type="checkbox"
                            checked={form.workshop.includes(option.value)}
                            onChange={() => {
                              let updated = [...form.workshop];

                              if (updated.includes(option.value)) {
                                updated = updated.filter((v) => v !== option.value);
                              } else {
                                if (updated.length >= 3) {
                                  alert("Maximum 3 workshops");
                                  return;
                                }
                                updated.push(option.value);
                              }

                              setForm((prev) => ({
                                ...prev,
                                workshop: updated,
                              }));
                            }}
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
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


        {/* HOTEL ACCOMMODATION */}

        {/* 🏨 HOTEL CARD PREMIUM */}
        <div className="sm:col-span-2 mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-slate-900 to-cyan-700 px-6 py-5 text-white">
            <h3 className="text-lg font-semibold">
              Hotel Accommodation (Optional)
            </h3>
            <p className="text-xs text-white/80 mt-1">
              Golden Tulip Taj Sultan, Hammamet    </p>
          </div>

          {/* BODY */}
          <div className="p-6 space-y-6">

            {/* TOGGLE */}
            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-medium text-slate-700">
                I need hotel accommodation
              </span>

              <input
                type="checkbox"
                className="w-5 h-5 accent-cyan-600"
                checked={form.needHotel}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    needHotel: e.target.checked,
                  }))
                }
              />
            </label>

            {/* CONTENT */}
            {form.needHotel && (
              <div className="grid gap-5 sm:grid-cols-2 animate-fadeIn">

                {/* ROOM TYPE */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Room type
                  </label>

                  <select
                    name="roomType"
                    value={form.roomType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-cyan-200"
                    required
                  >
                    <option value="">Select room</option>
                    <option value="Single Room">Single Room</option>
                    <option value="Double Room">Double Room</option>
                  </select>
                </div>

                {/* CHECK-IN + CHECK-OUT (SAME LINE) */}
                <div className="sm:col-span-2 grid grid-cols-2 gap-4">

                  {/* CHECK-IN */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Check-in
                    </label>

                    <input
                      type="date"
                      name="checkIn"
                      value={form.checkIn}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-cyan-200"
                      required
                    />
                  </div>

                  {/* CHECK-OUT */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Check-out
                    </label>

                    <input
                      type="date"
                      name="checkOut"
                      value={form.checkOut}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-cyan-200"
                      required
                    />
                  </div>

                </div>


                {/* NOTE */}
                <p className="sm:col-span-2 text-sm text-slate-700 flex items-center gap-2">
                  <MessageCircle className="text-green-600 w-5 h-5" />

                  <span>
                    If you have any questions, please contact Zeineb:{" "}
                    <a
                      href="https://wa.me/21629361410"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline"
                    >
                      +216 29 361 410
                    </a>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>






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

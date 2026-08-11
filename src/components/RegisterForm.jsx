import emailjs from "@emailjs/browser";
import { registerFields } from "../data/siteData";
import { useState, useRef, useEffect } from "react";
import {
  CalendarDays,
  Check,
  ChevronDown,
  Hotel,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  speciality: "",
  country: "",
  workshop: [],
  status: "",
  payment: "",
  galaDinner: "",
  size: "",
  showWorkshop: false,
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
        .filter((option) => option.selected)
        .map((option) => option.value);

      if (selectedValues.length > 3) {
        alert("Vous pouvez sélectionner 1, 2 ou 3 ateliers");
        return;
      }

      setForm((current) => ({
        ...current,
        [name]: selectedValues,
      }));
    } else {
      setForm((current) => ({
        ...current,
        [name]: value,
      }));
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
          workshop: form.workshop,
          galaDinner: form.galaDinner,
          status: form.status,
          payment: form.payment,
          size: form.size,

          needHotel: form.needHotel ? "Yes" : "No",
          roomType: form.roomType,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          hotelNotes: form.hotelNotes,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      setStatus("error");
      setErrorMessage(
        "Échec de l’envoi de l’inscription. Veuillez réessayer."
      );
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#d9d2c3] bg-white/90 px-4 py-3.5 text-sm text-[#17233b] shadow-sm outline-none transition duration-200 placeholder:text-slate-400 hover:border-[#b9a56a] focus:border-[#b2944f] focus:ring-4 focus:ring-[#d7bd78]/20";

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#e5dece] bg-[#fbf9f4] shadow-[0_30px_80px_-35px_rgba(10,28,55,0.45)]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#d7bd78]/20" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#d7bd78]/20" />

      <header className="relative overflow-hidden bg-[#0d2344] px-7 py-10 text-white sm:px-12 sm:py-12">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#b2944f]/15 to-transparent" />

        <div className="relative max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-[#e5cc8b]">
            <span className="h-px w-10 bg-[#d7bd78]" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em]">
              ATREO · Monastir 2026
            </p>
          </div>

          <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
Inscription aux Assises de l’Orthodontie 2026.          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Complétez votre inscription et votre demande d’hébergement pour le
            congrès d’orthodontie 2026.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.14em] text-white/65">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#d7bd78]" />
              23–24 octobre 2026
            </span>

            <span className="flex items-center gap-2">
              <Hotel className="h-4 w-4 text-[#d7bd78]" />
              Royal Thalassa Monastir
            </span>
          </div>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="relative p-6 sm:p-10 lg:p-12"
      >
        <section>
          <div className="mb-7 flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d2344] text-sm font-semibold text-[#e5cc8b]">
              01
            </span>

            <div>
              <h3 className="font-serif text-xl text-[#0d2344]">
                Informations personnelles
              </h3>

              <p className="mt-0.5 text-sm text-slate-500">
                Veuillez renseigner vos coordonnées et vos informations
                professionnelles.
              </p>
            </div>
          </div>

          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {registerFields.map((field) => {
              const sharedProps = {
                id: field.name,
                name: field.name,
                value: form[field.name] ?? "",
                onChange: handleChange,
                required: field.required,
                className: inputClass,
              };

              const wideField =
                field.type === "textarea" || field.type === "select";

              return (
                <label
                  key={field.name}
                  htmlFor={field.name}
                  className={wideField ? "sm:col-span-2" : ""}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#42506a]">
                    {field.label}

                    {field.required && (
                      <span className="ml-1 text-[#b2944f]">*</span>
                    )}
                  </span>

                  {field.type === "textarea" ? (
                    <textarea {...sharedProps} rows={4} />
                  ) : field.name === "workshop" ? (
                    <div ref={dropdownRef} className="relative mt-2">
                      <button
                        id={field.name}
                        type="button"
                        aria-expanded={form.showWorkshop}
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            showWorkshop: !prev.showWorkshop,
                          }))
                        }
                        className={`${inputClass} mt-0 flex items-center justify-between text-left`}
                      >
                        <span
                          className={
                            form.workshop.length
                              ? "text-[#17233b]"
                              : "text-slate-400"
                          }
                        >
                          {form.workshop.length
                            ? form.workshop.join(", ")
                            : "Sélectionnez jusqu’à 3 ateliers"}
                        </span>

                        <ChevronDown
                          className={`h-4 w-4 text-[#b2944f] transition ${
                            form.showWorkshop ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {form.showWorkshop && (
                        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-[#e5dece] bg-white p-2 shadow-xl">
                          {field.options.map((option) => {
                            const selected = form.workshop.includes(
                              option.value
                            );

                            return (
                              <label
                                key={option.value}
                                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#263650] transition hover:bg-[#f7f2e7]"
                              >
                                <input
                                  type="checkbox"
                                  className="sr-only"
                                  checked={selected}
                                  onChange={() => {
                                    let updated = [...form.workshop];

                                    if (selected) {
                                      updated = updated.filter(
                                        (value) => value !== option.value
                                      );
                                    } else {
                                      if (updated.length >= 3) {
                                        alert("Maximum 3 ateliers");
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

                                <span
                                  className={`flex h-5 w-5 items-center justify-center rounded border ${
                                    selected
                                      ? "border-[#b2944f] bg-[#b2944f] text-white"
                                      : "border-[#cec5b3] bg-white"
                                  }`}
                                >
                                  {selected && (
                                    <Check className="h-3.5 w-3.5" />
                                  )}
                                </span>

                                <span>{option.label}</span>
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : field.type === "select" ? (
                    <select {...sharedProps}>
                      <option value="">Sélectionnez votre choix</option>

                      {field.options.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                        >
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
          </div>
        </section>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#d8cfbd] to-transparent" />

        <section>
          <div className="mb-7 flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d2344] text-sm font-semibold text-[#e5cc8b]">
              02
            </span>

            <div>
              <h3 className="font-serif text-xl text-[#0d2344]">
                Hébergement à l’hôtel
              </h3>

              <p className="mt-0.5 text-sm text-slate-500">
                Réservation facultative au Royal Thalassa Monastir.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ddd4c2] bg-white shadow-sm">
            <label className="flex cursor-pointer items-center justify-between gap-5 p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4efe4] text-[#9c7d37]">
                  <Hotel className="h-5 w-5" />
                </span>

                <div>
                  <span className="block font-semibold text-[#17233b]">
                    J’ai besoin d’un hébergement à l’hôtel
                  </span>

                  <span className="mt-1 block text-sm text-slate-500">
                    Ajouter une demande de chambre à mon inscription.
                  </span>
                </div>
              </div>

              <span
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                  form.needHotel ? "bg-[#b2944f]" : "bg-slate-200"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={form.needHotel}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      needHotel: event.target.checked,
                    }))
                  }
                />

                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                    form.needHotel ? "left-6" : "left-1"
                  }`}
                />
              </span>
            </label>

            {form.needHotel && (
              <div className="grid gap-5 border-t border-[#eee7d9] bg-[#fcfaf6] p-5 sm:grid-cols-2 sm:p-6">
                <label className="sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#42506a]">
                    Type de chambre *
                  </span>

                  <select
                    name="roomType"
                    value={form.roomType}
                    onChange={handleChange}
                    className={inputClass}
                    required={form.needHotel}
                  >
                    <option value="">Sélectionnez une chambre</option>

                    <option value="Single Room">
                      Chambre individuelle (LPD) · 240 TND / nuit
                    </option>

                    <option value="Double Room">
                      Chambre double (LPD) · 340 TND / nuit
                    </option>
                  </select>
                </label>

                <label>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#42506a]">
                    Date d’arrivée *
                  </span>

                  <input
                    type="date"
                    name="checkIn"
                    value={form.checkIn}
                    onChange={handleChange}
                    className={inputClass}
                    required={form.needHotel}
                  />
                </label>

                <label>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#42506a]">
                    Date de départ *
                  </span>

                  <input
                    type="date"
                    name="checkOut"
                    value={form.checkOut}
                    onChange={handleChange}
                    className={inputClass}
                    required={form.needHotel}
                  />
                </label>

                <div className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-[#e5dece] bg-white p-4 text-sm leading-6 text-slate-600">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#b2944f]" />

                  <span>
                    Pour toute demande particulière, contactez-nous à
                    l’adresse{" "}
                    <a
                      href="mailto:atreocongress2026@gmail.com"
                      className="font-semibold text-[#0d2344] underline decoration-[#d7bd78] underline-offset-4"
                    >
                      atreocongress2026@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="mt-10 rounded-2xl bg-[#0d2344] p-5 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div className="mb-5 flex items-center gap-3 sm:mb-0">
            <Mail className="h-5 w-5 shrink-0 text-[#d7bd78]" />

            <p className="text-sm leading-6 text-white/70">
              Votre inscription sera envoyée par email de manière sécurisée.
            </p>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c3a45d] px-6 py-3.5 text-sm font-bold text-[#0d2344] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#d7bd78] focus:outline-none focus:ring-4 focus:ring-[#d7bd78]/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? (
              <Sparkles className="h-4 w-4 animate-pulse" />
            ) : (
              <Send className="h-4 w-4" />
            )}

            {status === "sending"
              ? "Envoi en cours..."
              : "Envoyer l’inscription"}
          </button>
        </div>

        {status === "success" && (
          <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
            Inscription envoyée avec succès.
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}

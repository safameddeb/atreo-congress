import RegisterForm from "../components/RegisterForm";
import SectionHeader from "../components/SectionHeader";

export default function RegisterPage() {
  return (
    <div>
      <section className="bg-[#c9d2db] py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Registration"
            title="Congress Registration Form"
            align="center"
          />
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <RegisterForm />
      </section>
    </div>
  );
}

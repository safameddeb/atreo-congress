export default function Sponsorimg({ sponsor }) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border-4 border-[#dff0df] bg-[#002c84] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
    <div className="w-full h-full">
      <img
        src={sponsor.image}
        alt={sponsor.name}
        className="w-full h-full object-cover" // <-- image remplit tout le cadre
      />
    </div>
    </article>
  );
}
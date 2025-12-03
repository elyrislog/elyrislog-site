// components/Nav.js
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-bg-900">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="ElyrisLog Logo"
          width={140}     // Aumentei
          height={140}
          className="w-[140px] md:w-[170px] h-auto"
        />
      </div>

      <div className="hidden md:flex items-center gap-8 text-lg">
        <a href="#features" className="hover:opacity-80 transition">Recursos</a>
        <a href="#contato" className="hover:opacity-80 transition">Contato</a>
      </div>
    </nav>
  );
}

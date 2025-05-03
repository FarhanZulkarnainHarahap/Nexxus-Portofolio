import Image from "next/image";

export default function LogoMenu() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-8 h-5">
        <Image
          src="/iconsayapkiri.svg"
          alt="Logo sayap kiri"
          fill
          className="object-contain"
        />
      </div>
      <span className="text-xl font-bold">Nexxus Website</span>
      <div className="relative w-8 h-5">
        <Image
          src="/iconsayapkanan.svg"
          alt="Logo sayap kanan"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

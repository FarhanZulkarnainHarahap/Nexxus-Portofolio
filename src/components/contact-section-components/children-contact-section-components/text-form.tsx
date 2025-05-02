import Image from "next/image";
import Link from "next/link";

export default function TextFormSection() {
  return (
    <div className="bg-[#191717] py-10 px-6 rounded-lg shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-white text-center">
        Get In Touch
      </h2>

      <div className="grid lg:max-w-fit md:max-w-fit w-full h-fit mb-6">
        <p className="text-[16px] text-gray-300 text-left">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas, or exploring opportunities to be part of
          your exciting visions.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="bg-black/50 p-3 rounded-full">
            <span className="text-2xl text-white">📍</span>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white">Address</h4>
            <p className="text-gray-400">Medan, Indonesia.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-black/50 p-3 rounded-full">
            <span className="text-2xl text-white">✉️</span>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white">Email Address</h4>
            <p className="text-gray-400">Farhanzulkarnaenhrp@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-black/50 p-3 rounded-full">
            <span className="text-2xl text-white">📱</span>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-white">Phone Number</h4>
            <p className="text-gray-400">+6281958169283</p>
          </div>
        </div>

        {/* WhatsApp Section with Horizontal Alignment */}
        <div className="w-full h-fit grid grid-cols-[auto_1fr] items-center">
          <Link
            href="https://wa.me/+6281958169283"
            className="w-[50px] h-[50px] relative"
            aria-label="Chat with me on WhatsApp"
          >
            <Image
              src="/whatsapp.svg"
              alt="whatsapp icon"
              fill
              className="object-contain"
            />
          </Link>
          <div className="h-full flex items-center ml-4">
            <h4 className="font-semibold text-lg text-white">
              Chat Me On WhatsApp
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

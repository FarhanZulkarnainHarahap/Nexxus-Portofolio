import { IoLogoGithub } from "react-icons/io";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaSteam,
} from "react-icons/fa";

export default function TextProfilePage() {
  return (
    <div className="pl-[10%] flex items-center">
      <div className="flex flex-col gap-[30px]">
        <div>
          <h1 className="text-[45px]">Welcome To My Website</h1>
          <p className="text-[25px] font-Righteous text-white">
            Farhan Zulkarnain Harahap
          </p>
          <p className="text-[25px] text-[#a39f9f] font-Righteous">
            Full-stack Developer
          </p>
        </div>

        <p className="text-[20px] text-white text-justify">
          I'm excited to potentially be a part of your team. I’ll be looking
          forward to the next steps.
        </p>

        <div className="bg-[#a39f9f]/30 w-fit h-[60px] rounded-r-4xl rounded-l-4xl flex gap-[20px] place-items-center justify-center px-[20px]">
          <IoLogoGithub className="size-[40px] " />
          <FaLinkedin className="size-[40px]" />
          <FaFacebookSquare className="size-[40px]" />
          <FaInstagram className="size-[40px]" />
          <FaSteam className="size-[40px]" />
        </div>
      </div>
    </div>
  );
}

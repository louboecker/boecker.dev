import Link from "next/link";
import { BackgroundBeams } from "../animations/background-beams";
import { SiMatrix } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div
      id="contact"
      className="h-[40rem] w-full rounded-md relative flex flex-col min-h-screen items-center justify-center antialiased snap-start"
    >
      <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-between mx-auto w-full container sm:px-0 px-5 z-20">
        <div>
          <h1 className="text-4xl font-semibold">Contact Me</h1>
          <p className="text-xl font-light">
            Got an idea? Let&apos;s talk about it! Wanna ask me something? Feel
            free to reach out!
          </p>
          <div className="flex flex-col gap-2 my-3 w-max">
            <a
              href="https://matrix.to/#/@lou:boecker.dev"
              className="flex flex-row gap-2 items-center font-light hover:font-medium transition-all duration-200"
              target="_blank"
            >
              <SiMatrix />
              Invite me to chat on Matrix
            </a>
            <a
              href="https://twitter.com/EmmaBoecker"
              className="flex flex-row gap-2 items-center font-light hover:font-medium transition-all duration-200"
              target="_blank"
            >
              <FaTwitter />
              Message me on Twitter
            </a>
            <a
              href="mailto:lou@boecker.dev"
              className="flex flex-row gap-2 items-center font-light hover:font-medium transition-all duration-200"
              target="_blank"
            >
              <MdAlternateEmail />
              Send me an email
            </a>
          </div>
        </div>
        <div className="w-full h-[2px] bg-zinc-900 md:hidden" />
        {/* <div>
          <Link
            href="/imprint"
            className="font-extralight text-xl hover:font-normal transition-all duration-200"
          >
            Imprint
          </Link>
        </div> */}
      </div>
      <BackgroundBeams className="h-full object-cover" />
    </div>
  );
}

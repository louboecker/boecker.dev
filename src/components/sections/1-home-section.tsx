import Link from "next/link";
import {
  FaEnvelopeOpen,
  FaGithub,
  FaInstagram,
  FaMastodon,
  FaRss,
  FaTwitter,
} from "react-icons/fa6";
import ScrollDownButton from "./components/scroll-down-button";
import Button from "../ui/button";

export default function HomeSection() {
  return (
    <div className="h-full w-full snap-start" id="home">
      <div className="relative flex justify-center supports-[height:100svh]:h-[100svh] h-full select-none">
        <header className="flex flex-col 2xl:container justify-center mx-auto w-[90%]">
          <div className="flex flex-col mb-8">
            <h1 className="md:text-4xl text-3xl font-extralight mb-2">
              Hey, I&apos;m Lou
            </h1>
            <h1 className="md:text-6xl text-5xl font-semibold">
              Full-stack developer with 6+ years of experience
            </h1>
          </div>
          <div className="flex flex-row text-4xl gap-2 items-center mb-6">
            <a
              href="https://github.com/louboecker"
              target="_blank"
              aria-label="github page"
            >
              <FaGithub className="hover:text-primary transition-colors duration-150" />
            </a>
            <a
              href="https://twitter.com/EmmaBoecker"
              target="_blank"
              aria-label="twitter profile"
            >
              <FaTwitter className="hover:text-primary transition-colors duration-150" />
            </a>
            <a
              href="https://chaos.social/@boecker"
              target="_blank"
              aria-label="mastodon profile"
            >
              <FaMastodon className="hover:text-primary transition-colors duration-150" />
            </a>
            <a
              href="https://instagram.com/lou.boecker"
              target="_blank"
              aria-label="instagram profile"
            >
              <FaInstagram className="hover:text-primary transition-colors duration-150" />
            </a>
          </div>
          <div className="flex flex-row gap-4">
            <Button
              href="#contact"
              style="filled"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaEnvelopeOpen className="my-auto" />
              <span className="my-auto">Contact Me</span>
            </Button>
            <Button href="/blog" style="outline">
              <FaRss className="my-auto" />
              <span className="my-auto">Blog</span>
            </Button>
          </div>
        </header>
        <div className="absolute bg-gradient-to-b from-background/0 to-background h-16 bottom-0 z-30 w-full p-0 antialiased text-heading">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ScrollDownButton sectionId="about" />
          </div>
        </div>
      </div>
    </div>
  );
}

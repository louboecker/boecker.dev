import { HoverEffect } from "../animations/card-hover-effect";

export default function WorkSection() {
  return (
    <div
      id="work"
      className="flex w-[90%] mx-auto snap-start min-h-screen pt-20"
    >
      <div className="flex flex-col gap-5 container mx-auto">
        <h2 className="md:text-6xl text-5xl font-semibold">Work</h2>
        <p className="text-text/80">
          Some projects I&apos;ve worked on in the past. <br /> I&apos;m big fan
          of open source, so you will find the source code of most of my
          projects on my GitHub.
        </p>
        <div className="flex flex-col gap-0">
          <HoverEffect items={projects} />
          <a
            href="https://github.com/louboecker"
            target="_blank"
            className="hover:text-secondary transition duration-150 pl-2 w-max text-md font-extralight -mt-2 scale-90"
          >
            More...
          </a>
        </div>
        <div className="flex flex-col gap-5 pb-20">
          <h2 className="md:text-5xl text-4xl font-semibold">Clients</h2>
          <p className="text-text/80">
            Some of the clients I&apos;ve worked with in the past (and until
            now).
          </p>
          <HoverEffect items={clients} columns={3} />
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Railboard",
    description: "A web-app to view information about Trains in Germany",
    link: "https://rail.boecker.dev",
  },
  {
    title: "Railboard API",
    description:
      "Backend for Railboard and soon-to-be stable public api to get high quality german train data",
    link: "https://api.rail.boecker.dev/docs",
  },
  {
    title: "This website",
    description: "this website made with next.js and tailwindcss",
    link: "/",
  },
  {
    title: "Event Display",
    description: "An app to display events from a nextcloud calendar in a view for entry halls etc.",
    link: "https://github.com/Stadtteilzentrum-Nordstadt/event-display",
  },
  {
    title: "Minecraft Hunger Games",
    description: "A Hunger Games event for a YouTube Video by JacobStreams.",
    link: "https://www.youtube.com/watch?v=9MaMhAUm1as",
  },
  {
    title: "Minecraft Challenge Plugin",
    description:
      "A Minecraft Challenge Plugin inspired by german YouTuber BastiGHG",
    link: "https://github.com/StckOverflwNet/StckUtils",
  },
  {
    title: "Damage = Random",
    description:
      "A Minecraft Plugin for a Video by HighBeanie where if you take damage, random things happen",
    link: "https://www.youtube.com/watch?v=15uUMJGuQFw",
  },
  {
    title: "Mod Installer",
    description: "A fully web-based Minecraft Modpack installer",
    link: "https://github.com/louboecker/mod-installer",
  },
];

const clients = [
  {
    title: "Stadtteilzentrum Nordstadt",
    subtitle: "2024 - 2025",
    icon: "/images/work/stadtteilzentrum-nordstadt.jpg",
    description:
      "Besides my activism there, I also do some IT for the organization and some of its state-level associations.",
    link: "https://www.stadtteil-zentrum-nordstadt.de",
  },
  {
    title: "HighBeanie",
    subtitle: "2021 - 2022",
    description:
      "Minecraft Server hosting and development for videos/other projects",
    icon: "/images/work/highbeanie.webp",
    link: "https://linktr.ee/highbeanie",
  },
  {
    title: "Plixel",
    subtitle: "2022 - 2023",
    icon: "/images/work/plixel.webp",
    description:
      "Development for the Plixel Minecraft Server, the Minecraft Server for TommyInnit's Discord Community",
    link: "https://discord.gg/rHc3Qj2Jmt",
  },
  {
    title: "JacobStreams",
    subtitle: "2023",
    icon: "/images/work/jacobstreams.webp",
    description:
      "Development for Minecraft Events like the Hunger Games Event mentioned above",
    link: "https://twitch.tv/jacobstreams",
  },
  {
    title: "Styles",
    subtitle: "2021 - 2023",
    icon: "/images/work/styles.jpg",
    description:
      "Server Hosting, Web Dev, and Development for many streams, videos and other projects for now retired streamer Styles",
    link: "https://www.twitch.tv/styles",
  },
  {
    title: "Llama",
    subtitle: "2022",
    icon: "/images/work/llama.jpg",
    description: "Development of a Minecraft SMP and a YouTube Short",
    link: "https://www.youtube.com/@LlamaSticks",
  },
];

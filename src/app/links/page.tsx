import Image from "next/image";
import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaHouse,
  FaInstagram,
  FaMastodon,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa6";
import SocialButton from "./social-button";
import Link from "next/link";

export default function Linktree() {
  return (
    <div className="h-screen overflow-scroll">
      <div className="flex flex-col container mx-auto justify-center items-center">
        <Link
          href="/"
          className="fixed float-left top-0 self-start pt-6 flex flex-row gap-2 items-center justify-center w-fit transition-all hover:font-semibold"
        >
          <FaHouse />
          <p>boecker.dev</p>
        </Link>
        <div className="flex flex-col gap-12 my-12 w-fit">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              src={"/images/meta/icon-rounded.png"}
              width={256}
              height={256}
              alt="profile picture"
              className="rounded-full w-36"
            ></Image>
            <div className="flex flex-col gap-2 w-full md:w-max justify-center">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
                Emma Böcker
              </h1>
              <p className="w-full text-center md:text-left">
                Full-stack developer, activist and student from germany
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center w-full px-4">
            <SocialButton
              text="GitHub"
              link="https://github.com/louboecker"
              icon={<FaGithub />}
            />
            <SocialButton
              text="Political Twitter Account"
              link="https://twitter.com/EmmaBoecker"
              icon={<FaTwitter />}
            />
            <SocialButton
              text="Mastodon"
              link="https://chaos.social/@boecker"
              icon={<FaMastodon />}
            />
            <SocialButton
              text="Instagram"
              link="https://instagram.com/lou.boecker"
              icon={<FaInstagram />}
            />
            <SocialButton
              text="Twitch"
              link="https://twitch.tv/emmavdev"
              icon={<FaTwitch />}
            />
            <SocialButton
              text="Discord Server"
              link="https://discord.gg/WWwNTDdXx2"
              icon={<FaDiscord />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

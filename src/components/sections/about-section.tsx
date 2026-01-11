import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="flex w-[90%] mx-auto min-h-screen snap-start py-20"
    >
      <div className="container mx-auto">
        <h2 className="md:text-6xl text-5xl font-semibold">About me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-10 text-xl text-text/80">
          <div className="flex flex-col gap-4">
            <p>
              My name is Lou, I&apos;m a student, developer, system
              administrator, DevOps engineer, designer and creator. I&apos;m an
              activist striving for change. 
            </p>
            <p>
              I enjoy building projects on the internet, building a home here
              while trying to leave it behind just a little bit more human than
              before.
            </p>
            <p>
              I work with content creators, small businesses, non-profits and
              political organizations, work on open-source projects and teach
              people how to code.
            </p>
            <Image
              src={"/images/general/waiting-for-bus.jpg"}
              className="mt-6"
              alt=""
              width={480}
              height={640}
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-col gap-4">
            <Image
              src={"/images/general/christopher-street-day.jpg"}
              width={512}
              height={0}
              alt="Picture of a Demonstration. The Pride Flag, Trans Flag, and the Flag of german Party 'Die Linke' is visible."
              className="mt-2"
            />
            <div className="flex flex-col">
              <h3 className="text-text md:text-5xl text-4xl font-semibold lg:mt-6">
                Activism
              </h3>
              <p>
                We live in a world where the rich get richer and the poor get
                poorer, big corporations control the internet, the information
                and the people.
              </p>
              <p>
                Digital policy and rights as well as mobility, some of the areas
                I focus on are a big part of the everyday life of so many people
                but they are often overlooked.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/general/sunset.jpg"}
              alt=""
              width={480}
              height={640}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextLink(props: { link: string; children: React.ReactNode }) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="font-medium underline underline-offset-4 text-text hover:text-secondary transition-colors duration-200"
    >
      {props.children}
    </a>
  );
}

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import BackgroundVideo from "./video";

export default function Home() {
  return (
    <>
      <BackgroundVideo small>
        <video className="home-page" autoPlay muted loop id="home_video">
          <source src="./video/home_v.webm" type="video/webm" />
        </video>
      </BackgroundVideo>
      <BackgroundVideo small={false}>
        <video className="home-page" autoPlay muted loop id="home_video">
          <source src="./video/home_v_m.webm" type="video/webm" />
        </video>
      </BackgroundVideo>
      <div className="max-w-7xl mx-auto pt-36 px-6 mx-a">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center z-10">
            <h1 className={title() + " text-white"}>战斗天使&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>钟晨瑶</h1>
          </div>
          <br />
          <div className="flex gap-3 z-10">
            <Link
              isExternal
              as={NextLink}
              href={siteConfig.links.images}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              瀑布流图册
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={
                buttonStyles({ variant: "bordered", radius: "full" }) +
                " text-white"
              }
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>

          <div className="mt-8 z-10">
            <Snippet hideSymbol hideCopyButton variant="flat">
              <span>
                页面上次更新 <Code color="primary">2023年11月4日</Code>
              </span>
            </Snippet>
          </div>
        </section>
      </div>
    </>
  );
}

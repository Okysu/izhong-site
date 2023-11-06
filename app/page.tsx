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
      <BackgroundVideo
        src="./video/home_v.webm"
        mobile="./video/home_v_m.webm"
      />
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
            <Snippet
              style={{
                maxWidth: "300px",
              }}
              hideSymbol
              hideCopyButton
              variant="flat"
              className="text-center"
            >
              <span style={{ whiteSpace: "pre-wrap" }} className="text-white">
                在一个人下定决心做某件事的那一瞬间，上苍也开始行动了。制造各式各样对其有利的意外事件、偶遇及物质援助，这是连他本人都意想不到的。
                <br />
                <Code color="primary">菲尔·施图茨《自愈》</Code>
              </span>
            </Snippet>
          </div>
        </section>
      </div>
    </>
  );
}

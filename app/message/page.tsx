import { title } from "@/components/primitives";
import { Waline } from "@/components/waline";

export default function MessagePage() {
  return (
    <>
      <div>
        <h2 className={title({ size: "sm" })}>留言板</h2>
      </div>
      <div className="mt-2">
        <Waline path={"record"} serverURL={"https://waline.zcy.zone/"} />
      </div>
    </>
  );
}

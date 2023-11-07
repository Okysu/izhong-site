import { title } from "@/components/primitives";
import { Waline } from "@/components/waline";

const changeLog = [
  {
    date: "2023-11-04",
    content: ["初版网站构思，基于滚动监控的文字和图片集，短暂上线几个小时。"],
  },
  {
    date: "2023-11-05",
    content: [
      "基于 React 和 Next.js 重新设计网站。",
      "新增：瀑布流图册。",
      "新增：留言板(使用Waline评论系统)。",
    ],
  },
  {
    date: "2023-11-06",
    content: [
      "因为大家非常非常热情，也为方便访问更换为Microsoft Azure服务商。",
      "根据uu们的建议，进行了一些细节的调整。",
      "更换：主页视频更换为MP4格式，不再适用WEBM格式，更好呈现钟姐的美。",
      "新增：主页视频静音/取消静音按钮。",
      "新增：主页文本更换为大家随机的留言。",
      "优化：瀑布流图片变成随机顺序呈现，不再按照顺序呈现。",
    ],
  },
  {
    date: "2023-11-07",
    content: [
      "添加：实现了一个音乐播放器用来播放钟姐的BGM。",
      "新增：钟姐BGM、更新日志和反馈页面。",
      "说明：我要期中考试了，考完试会把友友们给我的一些资源添加上去，大家88。",
    ],
  },
].reverse();

export default function LogPage() {
  return (
    <>
      <div>
        <h2 className={title({ size: "sm" })}>更新日志</h2>
      </div>
      <div className="mt-2">
        {changeLog.map((log) => (
          <div key={log.date} className="mb-4">
            <h3 className="text-foreground/90 text-opacity-80 text-gray-500">
              {log.date}
            </h3>
            <ul className="list-disc list-inside text-left">
              {log.content.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className={title({ size: "sm" })}>友友们的意见</h2>
        <Waline path={"changelog"} serverURL={"https://waline.zcy.zone/"} />
      </div>
    </>
  );
}

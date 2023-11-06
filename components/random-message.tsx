"use client";
import { useEffect, useState } from "react";

interface Response {
  errno: number;
  errmsg: string;
  data: any;
}

interface Comment {
  status: string;
  comment: string;
  link: string;
  nick: string;
  pid: number | null;
  rid: number | null;
  user_id: number | null;
  sticky: number | null;
  like: number;
  objectId: number;
  browser: string;
  os: string;
  avatar: string;
  orig: string;
  addr: string;
  time: number;
  children: Comment[];
}

const RandomMessage = () => {
  const [msg, setMsg] = useState("正在祈祷中...OMG!");

  const getMsg = async () => {
    try {
      const count = await fetch(
        "https://waline.zcy.zone/api/comment?type=count&path=record&t=" +
          Date.now()
      );
      const data = (await count.json()) as Response;

      const total = data.data as number;
      const page = Math.ceil(total / 10);
      let random = Math.floor(Math.random() * page) + 1;

      const message = await fetch(
        "https://waline.zcy.zone/api/comment?path=record&page=" +
          random +
          "&t=" +
          Date.now()
      );

      const messageData = (await message.json()) as Response;
      const messageList = messageData.data.data as Comment[];
      const randomMessage = Math.floor(Math.random() * 10) + 1;
      const content = messageList[randomMessage];

      content.orig = content.comment.replace(/<[^>]+>/g, "");
      content.orig = content.orig.replace(/[\r\n]/g, "");

      return content.orig;
    } catch (error) {
      console.error(error);
      return "正在祈祷中...OMG!";
    }
  };

  useEffect(() => {
    getMsg().then((data) => {
      setMsg(data);
    });

    const timer = setInterval(() => {
      getMsg().then((data) => {
        setMsg(data);
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <span className="text-foreground/90 text-small">{msg}</span>;
};

export default RandomMessage;

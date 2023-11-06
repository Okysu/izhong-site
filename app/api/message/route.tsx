import { NextResponse } from "next/server";

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

export async function GET() {
  const count = await fetch(
    "https://waline.zcy.zone/api/comment?type=count&path=record"
  );
  const data = (await count.json()) as Response;

  const total = data.data as number;
  const page = Math.ceil(total / 10);
  let random = Math.floor(Math.random() * page) + 1;

  const message = await fetch(
    "https://waline.zcy.zone/api/comment?path=record&page=" + random
  );

  const messageData = (await message.json()) as Response;
  const messageList = messageData.data.data as Comment[];
  const randomMessage = Math.floor(Math.random() * 10) + 1;
  const content = messageList[randomMessage];

  content.orig = content.comment.replace(/<[^>]+>/g, "");
  content.orig = content.orig.replace(/[\r\n]/g, "");

  const response = {
    code: 200,
    message: "success",
    data: content.orig,
  };

  return NextResponse.json(response);
}

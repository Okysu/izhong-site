"use client";

import Player from "@/components/player";
import { title } from "@/components/primitives";
import { useEffect, useState } from "react";

export default function MusicPage() {
  const [source, setSource] = useState([
    {
      name: "我只能离开",
      singer: "颜人中",
      src: "./music/wznlk.m4a",
    },
  ]);

  useEffect(() => {
    fetch("./music/list.json").then((res) => {
      res.json().then((json) => {
        setSource(json);
      });
    });
  });

  return (
    <>
      <div>
        <h2 className={title({ size: "sm" })}>钟姐BGM</h2>
      </div>
      <div className="mt-2 justify-center">
        <Player source={source[0]} list={source} />
      </div>
    </>
  );
}

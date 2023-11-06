"use client";
import { useEffect, useState } from "react";

const RandomMessage = () => {
  const [msg, setMsg] = useState("正在祈祷中...OMG!");

  const getMsg = async () => {
    const message = await fetch("/api/message?t=" + Date.now());
    const data = await message.json();
    return data.data;
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

  return (
    <span className="text-foreground/90 text-small">
      {msg}
    </span>
  )
};

export default RandomMessage;

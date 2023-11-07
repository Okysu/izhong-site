"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { PreviousIcon, PauseCircleIcon, NextIcon } from "./icons";
import Slider from "./slider";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";

interface List {
  name: string;
  singer: string;
  src: string;
}

interface PlayerProps {
  source: List;
  list?: List[];
}

export default function Player({ source, list }: PlayerProps) {
  const [value, setValue] = useState(0);
  const [now, setNow] = useState<List | null>(source);

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  let timer: NodeJS.Timeout | null = null;

  const pause = () => {
    if (isPlaying) {
      audio?.pause();
      clearInterval(timer!);
      setIsPlaying(false);
    } else {
      audio?.play();
      timer = setInterval(() => {
        setValue((value) => value + 1);
      }, 1000);
      setIsPlaying(true);
    }
  };

  const getAudioLength = () => {
    return audio?.duration || 0;
  };

  const getCurrentTime = () => {
    return audio?.currentTime || 0;
  };

  const secondsToTime = (seconds: number) => {
    const minute = Math.floor(seconds / 60) + "";
    const second = Math.floor(seconds % 60) + "";
    return `${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;
  };

  const changeTime = (value: number) => {
    audio!.currentTime = value;
    setValue(value);
  };

  const changeMusic = (index: number) => {
    setNow(list![index]);
    audio!.src = list![index].src;
    audio!.currentTime = 0;
    if (timer) {
      clearInterval(timer);
    }
    setIsPlaying(false);
    audio!.load();
  };

  const nextMusic = () => {
    const index = list!.findIndex((item) => item.name === now?.name);
    if (index === list!.length - 1) {
      changeMusic(0);
    } else {
      changeMusic(index + 1);
    }
  };

  const prevMusic = () => {
    const index = list!.findIndex((item) => item.name === now?.name);
    if (index === 0) {
      changeMusic(list!.length - 1);
    } else {
      changeMusic(index - 1);
    }
  };

  useEffect(() => {
    const audio = new Audio(source.src);
    setAudio(audio);

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[420px] w-[300px]"
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col col-span-6 md:col-span-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0">
              <h1 className="text-large font-medium mt-2">
                {now?.name} {!isPlaying ? "-[已暂停]" : ""}
              </h1>
              <span className="text-foreground/90">{now?.singer}</span>
              <p className="text-small text-foreground/80 text-opacity-80 text-gray-500">
                音频资源均使用的标准(免费)音质。
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-3 gap-1">
            <Slider
              min={0}
              max={getAudioLength()}
              value={getCurrentTime()}
              onChange={(value) => changeTime(value)}
            />
            <div className="flex justify-between">
              <p className="text-small">{secondsToTime(getCurrentTime())}</p>
              <p className="text-small text-foreground/50">
                {secondsToTime(getAudioLength())}
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            {list && list.length && (
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onClick={prevMusic}
              >
                <PreviousIcon />
              </Button>
            )}
            <Button
              isIconOnly
              className="w-auto h-auto data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <PauseCircleIcon size={54} onClick={pause} />
            </Button>
            {list && list.length && (
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onClick={nextMusic}
              >
                <NextIcon />
              </Button>
            )}
          </div>
        </div>
      </CardBody>
      {list && list.length && (
        <Listbox aria-label="Actions">
          <ListboxSection title="播放列表">
            {list!.map((item) => (
              <ListboxItem
                key={item.name}
                onClick={() =>
                  changeMusic(list.findIndex((i) => i.name === item.name))
                }
              >
                {item.name}
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
      )}
    </Card>
  );
}

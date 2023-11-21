"use client";

import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { useEffect, useState } from "react";

interface Gallery {
  name: string;
  creator?: string;
  creator_url?: string;
  url: string;
  cover?: string;
}

const getGalleryList = async () => {
  const res = await fetch("https://source.zcy.zone/gallery.json");
  return (await res.json()) as Gallery[];
};

export default function LogPage() {
  const [galleryList, setGalleryList] = useState<Gallery[]>([]);
  useEffect(() => {
    getGalleryList().then(setGalleryList);
  }, []);

  return (
    <>
      <div>
        <h2 className={title({ size: "sm" })}>展台</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryList.map((gallery) => (
          <Card className="max-w-full" key={gallery.name}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{gallery.name}</h4>
              {gallery.creator && (
                <div className="flex gap-1 items-center">
                  <span>由</span>
                  <Link
                    showAnchorIcon={gallery.creator_url !== undefined}
                    href={gallery.creator_url ?? "#"}
                    target="_blank"
                  >
                    {gallery.creator}
                  </Link>
                  <span>投稿</span>
                </div>
              )}
              {gallery.cover && (
                <Image
                  width="100%"
                  height="auto"
                  src={gallery.cover}
                  className="mt-2"
                />
              )}
            </CardHeader>
            <CardFooter>
              <Link
                showAnchorIcon
                href={gallery.url}
              >
                去看看
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

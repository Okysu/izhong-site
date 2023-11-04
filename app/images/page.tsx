import { title } from "@/components/primitives";

import MasonryLayout from "../masonry";
import ImagePreview from "@/components/preview";

function ImageGallery() {
  const maxIndex = 184;

  return (
    <MasonryLayout>
      {Array.from(Array(maxIndex).keys()).map((index) => (
        <ImagePreview key={index} src={`./images/${index + 1}.webp`} />
      ))}
    </MasonryLayout>
  );
}

export default function ImagesPage() {
  return (
    <>
      <div>
        <h2 className={title({ size: "sm" })}>瀑布流</h2>
      </div>
      <div className="mt-2">
        <ImageGallery />
      </div>
    </>
  );
}

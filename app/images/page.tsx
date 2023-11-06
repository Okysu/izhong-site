import { title } from "@/components/primitives";

import MasonryLayout from "../masonry";
import ImagePreview from "@/components/preview";

const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ImageGallery = () => {
  const maxIndex = 184;
  const imageIndices = Array.from(
    { length: maxIndex },
    (_, index) => index + 1
  );
  const randomImageIndices = shuffleArray(imageIndices);

  return (
    <MasonryLayout>
      {randomImageIndices.map((index) => (
        <ImagePreview key={index} src={`./images/${index}.webp`} />
      ))}
    </MasonryLayout>
  );
};

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

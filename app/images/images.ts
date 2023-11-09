interface Image {
  src: string;
  hash: string;
}

const getImagesList = async () => {
  const res = await fetch("http://source.zcy.zone/images.json");
  return await res.json() as Image[];
};

const cutImagesPage = (images: Image[], page: number, pageSize: number) => {
  return images.slice((page - 1) * pageSize, page * pageSize);
};

export { getImagesList, cutImagesPage };

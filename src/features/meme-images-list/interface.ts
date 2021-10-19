export type MemeImage = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
};

export type MemeImagesData = {
  data: {
    memes: MemeImage[];
  };
  error: any;
};

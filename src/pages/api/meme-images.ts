import type { NextApiHandler } from "next";

const memeImagesHandler: NextApiHandler = async (request, response) => {
  const data = null;
  const error = null;
  const result: { data: unknown; error: any } = { data, error };

  try {
    const resp = await fetch("https://api.imgflip.com/get_memes");
    const { data } = await resp.json();

    result.data = data;
  } catch (err) {
    result.error = err;
  }

  response.json(result);
};

export default memeImagesHandler;

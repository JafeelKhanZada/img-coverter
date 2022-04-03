const express = require("express");
const bodyParser = require("body-parser");
const webp = require("webp-converter");
const imagebase64 = require("image-to-base64");
const { getFile } = require("./firebase");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(
  bodyParser({
    extended: true,
  })
);
app.get("/:id", async (req, res) => {
  const name = req?.params?.id;
  const image = await getFile(name);
  if (image) {
    const url = image?.split("?");
    const img = url[0]?.split(".");
    const ext = img[img.length - 1];
    return imagebase64(image).then(async (base) => {
      const webp = await get_webpbase64(base);
      const url = `data:image/${ext};base64,${webp}`;
      return res.status(200).json({ url });
    });
  }
});
function get_webpbase64(path) {
  let result = webp.str2webpstr(path, "png", "-q 10");
  return result
    .then(function (result) {
      return result;
    })
    .catch((err) => console.log("error", err));
}
app.listen(process.env.PORT || 5000, async () => {});

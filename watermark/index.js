import Jimp from 'jimp'


const mainImage = './fire.jpg';
const waterMark = './nodeJs.png'

const waterMark_margin_percent = 5; //apply margin of 5%

(async () => {
  const [image, logo] = await Promise.all([
    Jimp.read(mainImage),
    Jimp.read(waterMark)
  ]);

  image.resize(800, 200).greyscale();
  logo.resize(image.bitmap.width / 6, Jimp.AUTO);

  const xMargin = (image.bitmap.width * waterMark_margin_percent) / 100;
  const yMargin = (image.bitmap.width * waterMark_margin_percent) / 100;

  const positionX = image.bitmap.width - logo.bitmap.width - xMargin;
  const positionY = image.bitmap.height - logo.bitmap.height - yMargin;

  return image.composite(logo, positionX, positionY, [
    {
      mode: Jimp.BLEND_MULTIPLY,
      opacitySource: 1,
      opacityDest: 0.1,
    }
  ]);
})()
  .then(image => image.quality(90).write('new_image.jpg'))
  .catch(err => console.log('falha ao criar imagem', err))
  .finally(() => console.log('processo finalizado'));
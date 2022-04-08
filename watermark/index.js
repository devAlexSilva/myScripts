import Jimp from 'jimp'


const mainImage = './fire.jpg';
const waterMark = './nodeJs.png'

const waterMark_MARGIN_PERCENTAGE = 5;

const main = (async () => {
  const [image, logo] = await Promise.all([
    Jimp.read(mainImage),
    Jimp.read(waterMark)
  ]);

  logo.resize(image.bitmap.width / 5, Jimp.AUTO);

  const xMargin = (image.bitmap.width * waterMark_MARGIN_PERCENTAGE) / 100;
  const yMargin = (image.bitmap.width * waterMark_MARGIN_PERCENTAGE) / 50;

  const X = image.bitmap.width - logo.bitmap.width - xMargin;
  const Y = image.bitmap.height - logo.bitmap.height - yMargin;

  return image.composite(logo, X, Y, [
    {
      mode: Jimp.BLEND_MULTIPLY,
      opacitySource: 1,
      opacityDest: 0.1,
    }
  ]);
})()
.then(image => image.write('new_image.png'))
.catch( err => console.log('falha ao criar imagem', err))
.finally(() => console.log('processo finalizado'));
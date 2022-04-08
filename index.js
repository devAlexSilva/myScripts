import Jimp from 'jimp'


const ORIGINAL_IMAGE = './white';

const LOGO = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Australian_Defence_Force_Academy_coat_of_arms.svg/1200px-Australian_Defence_Force_Academy_coat_of_arms.svg.png";

const FILENAME = "test.png";

const main = async () => {

    const image = await Jimp.read(ORIGINAL_IMAGE);
    const logo = await Jimp.read(LOGO);

    logo.resize(50, Jimp.AUTO);

    return image.composite(logo, 100, 0, [
        {
            mode: Jimp.BLEND_SCREEN,
            opacitySource: 0.1,
            opacityDest: 1
        }
    ]);
}

main().then(image => {
    image.write(FILENAME);
    console.log('imagem criada');

})
    .catch((err) => {
        console.log('erro ao criar imagem' / n, err);
    })
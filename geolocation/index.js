async function getLocation() {
  const location = navigator.geolocation;

  const cbSuccess = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(latitude, longitude);

    const key = "";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`;

    fetch(url)
      .then(res => res.json()).then(result => console.log(result))
      .catch((err) => console.log(err));
  };

  const cbError = (error) => {
    console.log(error);

    switch (error.code) {
      case 1:
        console.log(
          "Precisamos da localização para oferecer produtos personalizados"
        );
        break;
      case 2:
        console.log("Houve um erro ao mapear a localização");
        break;
      case 3:
        console.log("O tempo para resposta expirou");
        break;
      default:
        console.log("Houve um erro inesperado");
    }
  };

  location.getCurrentPosition(cbSuccess, cbError);
}
getLocation();

//todo
/**
 * transformar a geolocalização em CEP
 * verificar se o CEP está dentro de uma faixa e atribuir um valor caso sim
 * exibir o conteúdo com base no valor atribuído
 */

// RN possui a faixa 59xxx-xxx

//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

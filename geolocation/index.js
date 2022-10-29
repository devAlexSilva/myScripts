function getLocation() {
  const location = navigator.geolocation;
  
  const cbSuccess = (position) => {
    console.log(position)
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
    };
    
    const cbError = (error) => {
        console.log(error);
 
        switch(error.code) {
            case 1: console.log("Precisamos da localização para oferecer produtos personalizados"); break
            case 2: console.log("Houve um erro ao mapear a localização"); break
            case 3: console.log("O tempo para resposta expirou"); break
            default: console.log("Houve um erro inesperado")
        }
    };

    location.getCurrentPosition(cbSuccess, cbError);
}

getLocation();

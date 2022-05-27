function totalAPagar(tipoVehiculo, litros) {
  switch (tipoVehiculo) {
    case "coche":
      let valorLitro = 86;
      break;
    case "moto":
      let valorLitro = 70;
    break;
    default:
      let valorLitro = 55;
      break;
  }return (litros < 25) ? (litros * valorLitro + 50) : (litros * valorLitro + 25)

}

totalAPagar("moto", 30);

function name(params) {

}
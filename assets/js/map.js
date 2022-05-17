function initMap(){
// alterar as coordenadas de acordo com a localização do imovel
  const house = { lat: -3.8135358269681223, lng: -38.61303036456697};
  // constante que recebe o mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    // valores do objeto do mapa
    zoom: 15, //nivel de aproximação 15 = rua
    type: "street", // tipo de mapa
    center: house, // tipo de alinhamento do mapa
  });
  // constante do marcador
  const marker = new google.maps.Marker({
    position: house,
    map: map,
  });
}
// chamada da função que constroi o mapa
window.initMap = initMap;
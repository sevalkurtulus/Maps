function initMap(){

    //Map option

    var options = {
      center: { lat: 39.925533, lng: 32.866287 },
      zoom: 10 ,
    };
//New Map
  map = new google.maps.Map(document.getElementById("map"),options)

// Marker
/*
const marker = new google.maps.Marker({
    position:{lat : 39.925533, lng:32.866287},
    map:map
}); 

//InfoWindow

const detailWindow = new google.maps.InfoWindow({
    content:`<h2>Ankara</h2>`
});

marker.addListener("mouseover",() => {
    detailWindow.open(map,marker);
})

*/
// Add Marker   
function addMarker(location){

    const marker = new google.maps.Marker({
      position: location,
      map: map,
    }); 

}


addMarker({lat : 39.925533, lng:32.866287});
addMarker({ lat: 41.015137, lng: 28.97953 });
}
 
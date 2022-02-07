mapboxgl.accessToken =
  "pk.eyJ1IjoicnlhbmptcyIsImEiOiJja3Z2bGM0MG8xOGQwMm5xZjRnc2hlbHprIn0.0YZNt8O-i8lFiC23Q0yrZw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: center, // starting position [lng, lat]
    zoom: 15, // starting zoom
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}

mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXJtYXBib3gxMSIsImEiOiJjbDlqNTFuODQwZTdlM3Vwa2Nvd3Z6c3oyIn0.DeOlW6DMo29zR-NQVwj_vw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.101,42.358],
    zoom: 11
});

async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json     = await response.json();
    return json.data;
}

// initalize marker variable
var marker;

async function run() {
    const locations = await getBusLocations();
    
    // check if marker exists
    let markerExists = document.getElementsByClassName('mapboxgl-marker')

    if (markerExists.length > 0) {
        marker.remove();
    };
    
    let markerLng = locations[0].attributes.longitude;
    let markerLat = locations[0].attributes.latitude;
    marker = new mapboxgl.Marker().setLngLat([markerLng,markerLat]).addTo(map);

    // timer
    setTimeout(run, 15000)
};
run();

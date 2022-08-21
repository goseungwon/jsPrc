function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
}

function onGeoErr() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
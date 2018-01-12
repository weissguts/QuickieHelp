$(document).ready(function () {

    function initMap() {
        var latlng = new google.maps.LatLng(39.679504, -104.902479);
        //Map options
        var options = {
            zoom:12,
            center: latlng
        };

        //New Map
        var map = new
        google.maps.Map(document.getElementById('map'), options);

        //Add Marker
        var optionsMarker = {
            position: latlng,
            map:map
        };
        var marker = new google.maps.Marker(optionsMarker);

    }

    initMap();
});
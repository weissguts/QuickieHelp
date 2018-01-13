$(document).ready(function () {

    for (var i = 0; i < 100; i++) {
        $('#age').append('    <option value= "'+i+'">'+i+'</option> ')
        // console.log(i);
    };

    /*****************Google Map init functions for six base templates. Currently pre-loaded**********************/
    //Calls google map based on latitude / longitude.
    function initMapOne() {
        var latlng = new google.maps.LatLng(39.679504, -104.902479);
        //Map options
        var options = {
            zoom:15,
            center: latlng
        };

        //New Map
        var map = new
        google.maps.Map(document.getElementById('mapOne'), options);

        //Add Marker
        var optionsMarker = {
            position: latlng,
            map:map
        };
        var marker = new google.maps.Marker(optionsMarker);
        google.maps.event.trigger(map, 'resize');

    };

    function initMapTwo() {
        var latlng = new google.maps.LatLng(39.7504613,-104.98660660000002);
        //Map options
        var options = {
            zoom:15,
            center: latlng
        };

        //New Map
        var map = new
        google.maps.Map(document.getElementById('mapTwo'), options);

        //Add Marker
        var optionsMarker = {
            position: latlng,
            map:map
        };
        var marker = new google.maps.Marker(optionsMarker);
        google.maps.event.trigger(map, 'resize');

    };

    function initMapThree() {
        var latlng = new google.maps.LatLng(40.3772059,-105.5216651);
        //Map options
        var options = {
            zoom:15,
            center: latlng
        };

        //New Map
        var map = new
        google.maps.Map(document.getElementById('mapThree'), options);

        //Add Marker
        var optionsMarker = {
            position: latlng,
            map:map
        };
        var marker = new google.maps.Marker(optionsMarker);
        google.maps.event.trigger(map, 'resize');

    };

    function initMapFour() {
        var latlng = new google.maps.LatLng(39.75486739999999,-104.98803129999999);
        //Map options
        var options = {
            zoom:15,
            center: latlng
        };

        //New Map
        var map = new
        google.maps.Map(document.getElementById('mapFour'), options);

        //Add Marker
        var optionsMarker = {
            position: latlng,
            map:map
        };
        var marker = new google.maps.Marker(optionsMarker);
        google.maps.event.trigger(map, 'resize');

    };

    function initMapFive() {
        var latlng = new google.maps.LatLng(39.7630243,-105.02413910000001);
        //Map options
        var options = {
            zoom:15,
            center: latlng
        };

        //New Map
        var map = new
        google.maps.Map(document.getElementById('mapFive'), options);

        //Add Marker
        var optionsMarker = {
            position: latlng,
            map:map
        };
        var marker = new google.maps.Marker(optionsMarker);
        google.maps.event.trigger(map, 'resize');

    };

    function initMapSix() {
        var latlng = new google.maps.LatLng(39.7515866,-104.98777630000001);
        //Map options
        var options = {
            zoom:15,
            center: latlng
        };

        //New Map
        var map = new
        google.maps.Map(document.getElementById('mapSix'), options);

        //Add Marker
        var optionsMarker = {
            position: latlng,
            map:map
        };
        var marker = new google.maps.Marker(optionsMarker);
        google.maps.event.trigger(map, 'resize');

    };

    /************************Charity Modal google map calls**************************/

    //Charity modal 1
    $('#mapPuppy').click(function () {
        initMapOne();
    });

    //Charity modal 2
    $('#mapBfast').click(function () {
        initMapTwo();
    });

    //Charity modal 3
    $('#mapEstes').click(function () {
        initMapThree();
    });

    //Charity modal 4
    $('#mapYouth').click(function () {
        initMapFour();
    });

    //Charity modal 5
    $('#mapConstruction').click(function () {
        initMapFive();
    });

    //Charity modal 6
    $('#mapTeach').click(function () {
        initMapSix();
    });


});
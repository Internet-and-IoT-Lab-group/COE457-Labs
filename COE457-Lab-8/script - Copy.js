window.onload = function() {
    var map = L.map('map').setView([25.312355, 55.489484], 30); // show location of the American University of Sharjah by default
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V0ZTM5IiwiYSI6ImNrZ3Mwc3V3YTBqNTMydG83ejA0YXF4eHoifQ.wkp2AYPQ3VnOkGq-xJRKbA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic2V0ZTM5IiwiYSI6ImNrZ3Mwc3V3YTBqNTMydG83ejA0YXF4eHoifQ.wkp2AYPQ3VnOkGq-xJRKbA'
    }).addTo(map);   

    // starbucks location: 25.312146, 55.492711
    // Exercise 1:
    // $("#submit-address-btn").click(function() {
    //     console.log('button clicked');
    //     let locationArray = $('#location-textbox').val().split(', ');
    //     console.log(locationArray)
    //     if (locationArray.length == 2) {
    //         // only if the array has 2 values, so the latitude and longtitude
    //         let latitude = parseFloat(locationArray[0])
    //         let longtitude = parseFloat(locationArray[1])
    //         console.log(latitude);
    //         var marker = L.marker([latitude, longtitude], {title: 'Starbucks'});
    //         marker.bindPopup(L.popup().setContent('Starbucks'));
    //         marker.addTo(map);
    //     } 
    // })

    // Exercise 2:
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const apiKey = 'pk.eyJ1Ijoic2V0ZTM5IiwiYSI6ImNrZ3Mwc3V3YTBqNTMydG83ejA0YXF4eHoifQ.wkp2AYPQ3VnOkGq-xJRKbA'
    $("#submit-address-btn").click(function() {
        console.log('button clicked');
        let location = $('#location-textbox').val();
        const finalUrl = url + location + '.json?access_token=' + apiKey;
        console.log(finalUrl)
        $.ajax({
            type: 'GET',
            url: finalUrl,
            contentType: 'application/json',
            dataType: 'json',
            success: function(res) {
                const locationJSON = res.features[0] // taking the first location from the feature array
                const locationName = locationJSON.place_name
                const locationCoordinates = locationJSON.geometry.coordinates
                var marker = L.marker([locationCoordinates[1], locationCoordinates[0]], {title: locationName});
                marker.bindPopup(L.popup().setContent(locationName));
                marker.addTo(map);
            }
        })
    })
}
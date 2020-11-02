window.onload = function() {
    var map = L.map('map').setView([25.312355, 55.489484], 30);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V0ZTM5IiwiYSI6ImNrZ3Mwc3V3YTBqNTMydG83ejA0YXF4eHoifQ.wkp2AYPQ3VnOkGq-xJRKbA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic2V0ZTM5IiwiYSI6ImNrZ3Mwc3V3YTBqNTMydG83ejA0YXF4eHoifQ.wkp2AYPQ3VnOkGq-xJRKbA'
    }).addTo(map);   

    
    // var marker = L.marker([25.312355, 55.489484]).addTo(map);
}
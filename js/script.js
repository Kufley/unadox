var myCenter = new google.maps.LatLng(51.508742,-0.120850);
function initialize() {
    var mapProp = {
        center: myCenter,
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker=new google.maps.Marker({
        position:myCenter,
        icon:'images/location_icon.png'
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: '<div class="mylabel">3412 Cranston Dr,Dublin,<br>OH 43017,США</div>',
        position: new google.maps.LatLng(-32.0, 149.0),
        shadowStyle: 1,
        padding: 0,
        backgroundColor: 'rgb(83,83,83)',
        borderRadius: 5,
        arrowSize: 10,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        disableAutoPan: true,
        hideCloseButton: true,
        arrowPosition: 30,
        backgroundClassName: 'transparent',
        arrowStyle: 2
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

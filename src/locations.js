const locations = () => {
    console.log("I Did it!")
    let body = document.querySelector("body")
    let content = document.querySelector("#content");
    let oldMain = document.querySelector("#mainContent")
    if (oldMain){
        content.removeChild(oldMain);
    }  
    // Create the script tag, set the appropriate attributes
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDzNXop2Mpgt5uh2MqcDxzwrpMKIbZhB0w&callback=initMap';
    script.defer = true;
    script.async = true;

    // Attach your callback function to the `window` object
    window.initMap = function() {
        var options = {
            zoom: 10,
            center: {lat:-77.846924,lng:166.692162}
            }
            var map = new google.maps.Map(document.getElementById("map"), options);
        var marker = new google.maps.Marker({
            position: {lat:-77.846924,lng:166.692162},
            map: map,
            title: 'South Pole Keto'
            });
    }
    document.head.appendChild(script);
    let mapContainer = document.createElement("div");
    mapContainer.id = "map"
    mapContainer.style.width = "100%";
    mapContainer.style.height = "80vh";
    body.appendChild(mapContainer);
};
export default locations;
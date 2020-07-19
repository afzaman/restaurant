const locations = () => {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let mapBox = document.createElement("div");
    mapBox.id = "map";
    mapBox.classList.add("map");
    content.appendChild(mapBox);
    var map = new ol.Map({
        target: "map",
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-70.821612, -74.912015]),
          zoom: 4
        })
      });
      var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([-70.821612, -74.912015]))
                })
            ]
        })
    });
    map.addLayer(layer);
};
export default locations;
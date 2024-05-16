
function initMap() {

 var map = L.map('map').setView([36.71, -4.42], 13); 

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
 }).addTo(map);

 map.setZoom(14.4); 

  var areas = [
    [
      [-4.414444, 36.698688],
      [-4.4135, 36.704554],
      [-4.413049, 36.706515],
      [-4.411268, 36.709061],
      [-4.411526, 36.709164],
      [-4.412556, 36.707616],
      [-4.413543, 36.708072],
      [-4.412985, 36.708924],
      [-4.412749, 36.709113],
      [-4.412674, 36.710326],
      [-4.413478, 36.712132],
      [-4.4138, 36.71251],
      [-4.414117, 36.713134],
      [-4.414224, 36.71316],
      [-4.414203, 36.713701],
      [-4.4124, 36.715176],
      [-4.412443, 36.715245],
      [-4.412159, 36.715482],
      [-4.412153, 36.715585],
      [-4.412298, 36.715791],
      [-4.410034, 36.717761],
      [-4.409359, 36.718169],
      [-4.410034, 36.718281],
      [-4.410694, 36.71878],
      [-4.411617, 36.719541],
      [-4.411805, 36.719593],
      [-4.412186, 36.719606],
      [-4.414235, 36.719051],
      [-4.413205, 36.717739],
      [-4.415624, 36.713822],
      [-4.415184, 36.713585],
      [-4.415254, 36.713551],
      [-4.414809, 36.712489],
      [-4.414932, 36.712295],
      [-4.414648, 36.712196],
      [-4.414482, 36.711814],
      [-4.414106, 36.711521],
      [-4.413575, 36.710167],
      [-4.413468, 36.709487],
      [-4.415479, 36.707547],
      [-4.415469, 36.707345],
      [-4.415544, 36.707186],
      [-4.415249, 36.706709],
      [-4.415522, 36.706623],
      [-4.415367, 36.706322],
      [-4.415088, 36.706442],
      [-4.414948, 36.706197],
      [-4.415249, 36.706102],
      [-4.414605, 36.704958],
      [-4.414321, 36.705092],
      [-4.413875, 36.704348],
      [-4.414723, 36.699165],
      [-4.415206, 36.699199],
      [-4.415275, 36.698774],
      [-4.414444, 36.698688]
    ],
    [
      [-4.411821, 36.721493],
      [-4.411998, 36.720023],
      [-4.410206, 36.718535],
      [-4.409761, 36.718389],
      [-4.409031, 36.718423],
      [-4.407771, 36.71918],
      [-4.406633, 36.719743],
      [-4.405201, 36.720337],
      [-4.405646, 36.721338],
      [-4.405764, 36.721407],
      [-4.407422, 36.721072],
      [-4.409578, 36.721012],
      [-4.4096, 36.721205],
      [-4.40968, 36.721265],
      [-4.410008, 36.721244],
      [-4.410238, 36.721411],
      [-4.410228, 36.721467],
      [-4.409654, 36.721592],
      [-4.409654, 36.721695],
      [-4.409772, 36.721751],
      [-4.409868, 36.721721],
      [-4.409873, 36.721622],
      [-4.410292, 36.721523],
      [-4.410405, 36.721446],
      [-4.411821, 36.721493]
    ],
    [
      [-4.420903, 36.724284],
      [-4.423542, 36.723407],
      [-4.42513, 36.721497],
      [-4.425044, 36.719881],
      [-4.42543, 36.717851],
      [-4.422898, 36.718574],
      [-4.422512, 36.7178],
      [-4.419851, 36.718591],
      [-4.419572, 36.718986],
      [-4.418006, 36.71976],
      [-4.417319, 36.720672],
      [-4.417105, 36.722547],
      [-4.420903, 36.724284]
    ],

    [
      [-4.416997, 36.722461],
      [-4.417148, 36.720689],
      [-4.417813, 36.719743],
      [-4.419529, 36.718883],
      [-4.419894, 36.718505],
      [-4.419851, 36.717748],
      [-4.425645, 36.711951],
      [-4.425666, 36.711315],
      [-4.419572, 36.717542],
      [-4.412234, 36.719631],
      [-4.411923, 36.72099],
      [-4.416997, 36.722461]
    ],
    [
      [-4.425409, 36.717782],
      [-4.425795, 36.715581],
      [-4.425731, 36.712054],
      [-4.419937, 36.717782],
      [-4.41998, 36.71847],
      [-4.422598, 36.717714],
      [-4.422963, 36.718488],
      [-4.425409, 36.717782]
    ],
    [
      [-4.416032, 36.732969],
      [-4.420989, 36.729151],
      [-4.422083, 36.727311],
      [-4.423435, 36.726588],
      [-4.424551, 36.726932],
      [-4.425559, 36.726674],
      [-4.425173, 36.721704],
      [-4.423606, 36.723579],
      [-4.420795, 36.724439],
      [-4.417126, 36.72277],
      [-4.414272, 36.726485],
      [-4.415774, 36.7329],
      [-4.416032, 36.732969]
    ],
    [
      [-4.429879, 36.727978],
      [-4.430179, 36.727617],
      [-4.429836, 36.727101],
      [-4.42945, 36.727032],
      [-4.4296, 36.726826],
      [-4.430222, 36.726654],
      [-4.431274, 36.724504],
      [-4.431531, 36.724177],
      [-4.431574, 36.721615],
      [-4.425995, 36.721873],
      [-4.427025, 36.726878],
      [-4.429879, 36.727978]
    ],
    [
      [-4.434085, 36.729526],
      [-4.435651, 36.724023],
      [-4.435673, 36.72158],
      [-4.431832, 36.721666],
      [-4.431832, 36.724177],
      [-4.431016, 36.726104],
      [-4.430458, 36.727892],
      [-4.434085, 36.729526]
    ],
    [
      [-4.435615, 36.721358],
      [-4.435636, 36.720911],
      [-4.434499, 36.71957],
      [-4.433598, 36.719742],
      [-4.432954, 36.719656],
      [-4.432375, 36.719656],
      [-4.430079, 36.71828],
      [-4.429607, 36.718142],
      [-4.426345, 36.717918],
      [-4.425701, 36.720292],
      [-4.42583, 36.721582],
      [-4.435615, 36.721358]
    ],
    [
      [-4.436619, 36.717864],
      [-4.43619, 36.715542],
      [-4.435825, 36.71537],
      [-4.435246, 36.715421],
      [-4.432435, 36.714338],
      [-4.432027, 36.714424],
      [-4.431727, 36.714303],
      [-4.431813, 36.713805],
      [-4.430311, 36.71193],
      [-4.427864, 36.709865],
      [-4.426513, 36.711224],
      [-4.426513, 36.714424],
      [-4.426577, 36.715576],
      [-4.426384, 36.71764],
      [-4.430332, 36.717967],
      [-4.432414, 36.719206],
      [-4.433615, 36.719412],
      [-4.434624, 36.719257],
      [-4.435847, 36.718518],
      [-4.436619, 36.717864]
    ],
    [
      [-4.409128, 36.723329],
      [-4.409407, 36.723622],
      [-4.410651, 36.723987],
      [-4.411451, 36.723996],
      [-4.411429, 36.723759],
      [-4.411998, 36.723574],
      [-4.412797, 36.723837],
      [-4.412904, 36.723703],
      [-4.412583, 36.723561],
      [-4.412926, 36.723041],
      [-4.411912, 36.722766],
      [-4.411638, 36.722792],
      [-4.411569, 36.722719],
      [-4.411209, 36.722899],
      [-4.41129, 36.72299],
      [-4.41107, 36.72314],
      [-4.411113, 36.723226],
      [-4.410946, 36.723411],
      [-4.410705, 36.723394],
      [-4.41063, 36.723247],
      [-4.411102, 36.723084],
      [-4.411129, 36.722972],
      [-4.410528, 36.72256],
      [-4.410013, 36.722474],
      [-4.409573, 36.722964],
      [-4.4096, 36.723179],
      [-4.409482, 36.723243],
      [-4.40901, 36.723041],
      [-4.408854, 36.723084],
      [-4.408726, 36.723282],
      [-4.409128, 36.723329]
    ]
  ];

  function getRandomProbability(min, max) {
    return Math.random() * (max - min) + min;
  }

  function drawAreas() {
    map.eachLayer(function (layer) {
      if (layer instanceof L.GeoJSON) {
        map.removeLayer(layer);
      }
    });

    areas.forEach(function (coords) {
      var probability = getRandomProbability(0, 100);

      var color;
      if (probability <= 10) {
        color = 'red';
      } else if (probability <= 30) {
        color = 'orange';
      } else if (probability <= 69) {
        color = 'yellow';
      } else {
        color = 'green';
      }

      var geojsonFeature = {
        "type": "Feature",
        "properties": { "probability": probability },
        "geometry": {
          "type": "Polygon",
          "coordinates": [coords]
        }
      };

      var areaLayer = L.geoJSON(geojsonFeature, {
        style: function (feature) {
          return { color: color };
        }
      }).addTo(map);

      var centroid = calculateCentroid(coords);

      var carIcon = L.icon({
        iconUrl: 'img/coche.png',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      var marker = L.marker(centroid, { icon: carIcon }).addTo(map);

      var popupOpen = false;

      marker.on('click', function (e) {

        if (!popupOpen) {
          marker.bindPopup("Probabilidad de aparcar: " + probability.toFixed(2) + "%", {
            className: 'custom-popup'
          }).openPopup();

          marker._popup._container.classList.add('show');
          popupOpen = true;
        } else {
          marker.closePopup();
          popupOpen = false;
        }
      });
    });

    function calculateCentroid(coords) {
      var sumX = 0, sumY = 0;
      coords.forEach(function (coord) {
        sumX += coord[0];
        sumY += coord[1];
      });
      var centerX = sumX / coords.length;
      var centerY = sumY / coords.length;
      console.log("Suma de X:", sumX);
      console.log("Suma de Y:", sumY);
      console.log("Centro X:", centerX);
      console.log("Centro Y:", centerY);
      return [centerY, centerX];
    }

  }

  drawAreas();

  setTimeout(function () {
    setInterval(drawAreas, 60000);
  }, 15000);
}

window.onload = initMap;

L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',

    // This is an array of Map Point objects
    features: [
    {
        type: 'Feature',
        properties: {
            title: 'Lincoln Park Community Shelter',
            description: '600 W Fullerton Pkwy, Chicago, IL 60614',
            'marker-color': '#0000FF',
            'marker-size': 'large',
            'marker-symbol': 'star',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.644162, 41.925708]
        }
    },
    {
    
        type: 'Feature',
        properties: {
            title: 'Volunteers of America of Illinois',
            description: '47 W Polk St, Chicago, IL 60605',
            'marker-color': '#7FFF00',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.629339, 41.871856]
        }
    },
     type: 'Feature',
        properties: {
            title: 'Greater Chicago Food Depository',
            description: '4100 W. Ann Lurie Place, Chicago, IL 60632',
            'marker-color': '#FFC800',
            'marker-size': 'large',
            'marker-symbol': 'star',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -87.727044, 41.817688]
        }
    },
    {
    
        type: 'Feature',
        properties: {
            title: 'Anti-Cruelty Society',
            description: '157 W Grand Ave, Chicago, IL 60654',
            'marker-color': '#00CED1',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-87.632919, 41.891429]
        }
    },
     {
    
        type: 'Feature',
        properties: {
            title: 'The Salvation Army, Irving Park Corps Community Center',
            description: '4056 N. Pulaski Road, Chicago, IL 60641-2411',
            'marker-color': '#FFD700',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -87.727865, 41.955292]
        }
    },
    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the points to the map

// Makes sure that map's initial zoom contains all of the points
map.on('ready', function() {
    map.fitBounds(myLayer.getBounds());
});
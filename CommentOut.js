var geojson; //why do we need to initialize this variable? What is this for? //this variable sets up the map by refrencing the features collection

//what does the initialize part do? //the initilize part creates the variable 

document.addEventListener('DOMContentLoaded', function() {
    //var URL = '1fmQs-Il1k3zBYs3UHyJGhNw_GYyp93RTgVE7BLnFX-4';
    var URL = "1oPetcSZyL14YbFwgV8kvgvzhDjKA3KzgE14amvHXX2Y";
    Tabletop.init( { key: URL, callback: convertToGeoJSON, simpleSheet: true } ) //makes the spreadsheet into a tabletop file and sends it to convert function 
})

//what does this section do?
function convertToGeoJSON(data) { 
    console.log(data); //prints data
    places = [] //creates a list called places 
    for(i = 0; i < data.length; i++) { //why is this loop here? //this runs through the spreadsheet and creates place objects with infromaton into the list
        console.log(data[i]); //populates data list
        place = { type: 'Feature',             
        properties: {
                    title: data[i]["Name"], //does the google form need to be in a specific order? //no, it will search for whatever is between the quotes
                    description: data[i]["Description"],
                    'marker-color': data[i]["Hexcolor"], //data[row][column]
                    'marker-size': 'large',
                    'marker-symbol': data[i]["MarkerSymbol"],
                },
                geometry: {
                    type: 'Point',
                    coordinates: [data[i]["Long"], data[i]["Lat"]]
                }
        }
        if((!isNaN(data[i]["lat"]) && !isNaN(data[i]["long"])) && //what does 'isNaN' mean? //stands for is not a number
                !(data[i]["lat"]==="" && data[i]["long"]==="") ) { //if latitude and longitude are both numbers then add them to place
            places.push(place); 
        }
    }

    geojson = { type: 'FeatureCollection', features: places};
    setupMap(geojson);
}



function setupMap(geo) {
    myLayer.setGeoJSON(geo); // Adds all of the points to the map
    map.fitBounds(myLayer.getBounds()); 
    map.legendControl.addLegend(document.getElementById('legend').innerHTML); //adds a key
    m.openPopup(); //opens pop up 
    populateListing(); 
}


L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA'; //accesses mapbox
var map = L.mapbox.map('map', 'jeffstern.6878aba5')
  .setView([38.12367, -76.81229], 9); 
var myLayer = L.mapbox.featureLayer().addTo(map);



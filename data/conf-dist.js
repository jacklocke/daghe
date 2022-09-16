// Rome
let latitude = 41.9027;
let longitude = 12.4963;
let areaName = "Rome";
let timearea = "Europe";
let timezone = "Berlin"; // check on https://open-meteo.com/en/docs

/* // London
let latitude = 51.5098;
let longitude = -0.1180;
let areaName = "London";
let timearea = "Europe";
let timezone = "London";
*/

/* // New York
let latitude = 40.7306;
let longitude = -73.9352;
let areaName = "New York";
*/


// IF you have another personal file, overwrite variables with your own (userful for develop and git)
try {
    $.getScript("data/conf.js", function() {
        //Script loaded but not necessarily executed
     });   
} catch (error) {
    // no personale file, use latitude and longitude here...
}
//  erase this to avoid Console error 404 or create a conf.js file that contains only:
/*
// New York
latitude = 40.7306;
longitude = -73.9352;
areaName = "New York";
*/
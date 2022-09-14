// Rome
let latitude = 41.9027;
let longitude = 12.4963;
let areaName = "Rome";

/* // London
let latitude = 51.5098;
let longitude = -0.1180;
let areaName = "London";
*/

/* // New York
let latitude = 40.7306;
let longitude = -73.9352;
let areaName = "New York";
*/

// IF you have another personal file, overwrite variables with your own (userful for develop and git)
try {
    $.getScript("data/area.js", function() {
        //Script loaded but not necessarily executed
     });   
} catch (error) {
    // no personale file, use latitude and longitude here...
}
//  erase this to avoid Console error 404 or create a area.js file that contains only:
/*
// New York
let latitude = 40.7306;
let longitude = -73.9352;
let areaName = "New York";
*/
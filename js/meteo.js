let date = new Date();
let today = date.toISOString().substring(0, 10);

let url = "https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude;
url+="&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&";
url+="timezone="+timearea+"%2F"+timezone;
url+="&start_date="+today+"&end_date="+today+"";
//console.log(url);

$.getJSON( url, function( data ) {
    var items = [];
    //$.each( data, function( key, val ) { console.log(key); console.log(val);console.log("-----"); });

    // Documentation: https://open-meteo.com/en/docs
    let temperature = data["current_weather"]["temperature"];
    let windspeed = data["current_weather"]["windspeed"];
    let weathercode = data["current_weather"]["weathercode"];
    let temp_min = data["daily"]["apparent_temperature_min"];
    let temp_max = data["daily"]["apparent_temperature_max"];
    let sunrise = data["daily"]["sunrise"] + ""; //"2022-09-11T07:02"
    let sunset = data["daily"]["sunset"] + ""; //"2022-09-11T07:02"

    $('#footer_content').text(WMO[weathercode] + "  🌡" + temperature + "°  🍃" + windspeed + "km/h  🌅" + sunset.slice(-5));
    console.log(areaName);
    
});


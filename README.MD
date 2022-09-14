
# Daghe start page

fast userful personal start page:

  

###  Features

  

- Store your URLs, with a tooltip

- Fast search URLs (and in tooltips) and open with enter (also select with arrow, use just your keyboard)

- Fast command like **g:** for search in *Google* or **d:** for *DuckDuckGO*

- Weather in the corner

  

---

  

###  Configuration

Configuration files are in **data** folder.

  
Create a data/**area.js** file with latitude and longitude, for example:

  

    // Rome
    latitude = 41.9027;
    longitude = 12.4963;
    areaName = "Rome";

  

Copy data/data-dist.json to data/**data.json** and put all your links, for example:

    [{
    "title": "Li",
    "desc": "Linkedin",
    "tooltip": "tooltip sample",
    "color": "yellow",
    "url": "https://www.linkedin.com"
    }, {
    "title": "Fa",
    "desc": "Facebook",
    "tooltip": "tooltip sample2",
    "color": "red",
    "url": "https://www.facebook.com"
    }, {
    "title": "Tw",
    "desc": "Twitter",
    "tooltip": "tooltip sample3",
    "color": "blue",
    "url": "https://www.twitter.com"
    }, {
    "title": "Wa",
    "desc": "Google Waves",
    "tooltip": "tooltip sample4",
    "color": "green",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, {
    "title": "GH",
    "desc": "GitHub",
    "tooltip": "yeah science Lorem ipsum carciofi yeah Lorem ipsum carciofi yeah Lorem ipsum yeah lorem ipsum carciofi yeah",
    "color": "red",
    "url": "https://www.github.com"
    }]

  
  

----

  

###  ToDo list

 - [x] filter and launch link
 - [ ] better look?
 - [ ] cooler animated (looped?) GIF
 - [ ] different timezone
 - [ ] loader
 - [ ] mobile ? is needed?
 - [ ] todo list (saved in a simple localstorage)
 - [ ] news feed? is too much?
 - [ ] better -dist files logic

  

----

  

####  Inspiration

- [Oliviale](https://github.com/oliviale) for Periodic table style
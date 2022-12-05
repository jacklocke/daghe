$(document).keyup(function (e) {

    if(checkIfFunction() && e.keyCode != 13) {
        return;
    }
    
    switch (e.keyCode) {
        case 13: // enter
            selectOption();
            break;
        case 38: // arrow up
            arrowUpPressed();
            break;
        case 40: // arrow down
            arrowDownPressed();
            break;    
        default:
            checkBase();
            break;
    }

})

/**
 * check if user want to use a function, like google inline search
 */
function checkIfFunction() {
    let text = $("#autofill").val();
    if(text.indexOf(':')> -1) {
        $(".services li").removeClass("selected");
        return true;
    }
    return false;
}

/**
 * if nothing is selected the first is the new selection
 *   or if previous selection was now hided it remove
 */
function checkBase() {
    var selected = $(".selected");

    // no one is selected
    if(selected.length===0) {
            selectFirst ();
    } else { // something is selected

        // if the previous selection, was now hided
        if ($(selected).hasClass('hided')){
            $(selected).removeClass('selected');  // unselect
            selectFirst();
        }
    }

        lastActions(1);
}

/**
 * when UP is pressed
 */
function arrowUpPressed() {

    checkBase();
    
    var selected = $(".selected");

    if (selected.prev(':not(.hided)').length == 0) {
        //console.log(selected.parents().children('.list-group-item:not(.hided)'));
        var _ogg = selected.parents().children('.list-group-item:not(.hided)');

        var next = false;

        for (let idx = _ogg.length-1; idx >= 0; idx--) {

            //console.log(idx); console.log( _ogg[idx]); console.log(next); console.log("------");

            // if next <li> was the selected one (cycle is inverse idx--)
            if(next) {
                $(".services li").removeClass("selected"); // remove all selected
                _ogg[idx].classList.add(('selected')); // and selected to this one
                break; // stop execute
            }

            // when I find the selected <li>
            next = _ogg[idx].classList.contains(('selected')); //boolean
        }
        


     } else {
        $(".services li").removeClass("selected");
        selected.prev(':not(.hided)').addClass("selected");
    }

        lastActions(0);
}


/**
 * when DOWN is pressed
 */
function arrowDownPressed() {

    checkBase();
    
    var selected = $(".selected");

    if (selected.next(':not(.hided)').length == 0) {
        //console.log(selected.parents().children('.list-group-item:not(.hided)'));
        var _ogg = selected.parents().children('.list-group-item:not(.hided)');
        
        var prev = false;

        for (let ix = 0; ix < _ogg.length; ix++) {

            // if previous <li> was the selected one
            if(prev) {
                $(".services li").removeClass("selected"); // remove all selected
                _ogg[ix].classList.add(('selected')); // and selected to this one
                break; // stop execute
            }

            // when I find the selected <li>
            prev = _ogg[ix].classList.contains(('selected')); //boolean
        }

    } else {
        $(".services li").removeClass("selected");
        selected.next(':not(.hided)').addClass("selected");
    }

    lastActions(0);
}


/**
 * when ENTER is pressed
 */
function selectOption() {

    let text = $("#autofill").val().toLowerCase();

    //console.log(text.substring(0, text.indexOf(':')));

    switch (text.substring(0, text.indexOf(':'))) {
        case "b":
        case "brave":
            window.location.href= "https://search.brave.com/search?q=" + text.substring(text.indexOf(':')+1, text.length);
            break;
        case "g":
        case "google":
            window.location.href= "https://www.google.com/search?q=" + text.substring(text.indexOf(':')+1, text.length);
            break;
        case "d":
        case "duck":
            window.location.href= "https://duckduckgo.com/?q=" + text.substring(text.indexOf(':')+1, text.length);
            break;
        case "a":
        case "amazon":
            window.location.href= "https://www.amazon.it/s?k=" + text.substring(text.indexOf(':')+1, text.length);
            break;
        case "w":
        case "wiki":
        case "wikipedia":
            window.location.href= "https://it.wikipedia.org/w/index.php?search=" + text.substring(text.indexOf(':')+1, text.length);
            break;
        case "y":
        case "youtube":
            window.location.href= "https://www.youtube.com/results?search_query=" + text.substring(text.indexOf(':')+1, text.length);
            break;
        default:
            break;
    }

    var selected = $(".selected:not(.hided)");

    if (selected.length== 1) {
        console.log($(".selected a").attr('href'));
        window.location.href=$(".selected a").attr('href');
    }

}

/**
 * when nothing is selected
 *    the first :not(.hided) is new selected
 */
function selectFirst () {
    $('#newList li:not(.hided):first').addClass('selected');
}


/**
 * actions after every case
 */
function lastActions(basic) {

    // scroll div to an eventually selected link
    if($(".selected").length > 0) {
        $('#item_container').animate( { scrollTop : ($('.selected').position().top) }, 100 );
    }

    if(!basic){ // up arrow move it to the left, so if is up or down, move the cursor to the end
        // set focus on input and cursor on last letter
        const input = document.getElementById('autofill');
        let end = input.value.length;
        input.setSelectionRange(end, end);
        input.focus();
    }
    
}
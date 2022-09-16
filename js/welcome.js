let _hh = date.getHours();
let _case = 0;
let _msg = "Welcome back";
let _usr = "...";

_case = (_hh >=   5 & _hh < 12) ? 1 : _case;
_case = (_hh >= 12 & _hh < 17) ? 2 : _case;
_case = (_hh >= 17 & _hh < 22) ? 3 : _case;
_case = (_hh >= 22 & _hh <   5) ? 4 : _case;

switch (_case) {
    case 1:
        _msg = "good morning";
        break;
    case 2:
        _msg = "good afternoon";
        break;
    case 3:
        _msg = "good evening";
        break;
    case 4:
        _msg = "good night";
        break;
}

try {
    if(document.URL.indexOf('?id=')>-1){
        _usr = " " + document.URL.substring(document.URL.indexOf('?id=')+4, document.URL.length);    
    }
} catch (error) {
    _usr = '...';
}

_msg+=_usr;

$('#welc_msg').html(_msg);
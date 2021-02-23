const url = 'sessions.json';

let sessionsList = [];

function getSessions(){
    return new Promise(function(resolve, reject){
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionsList = e.target.response;
            resolve(sessionsList);
        };
        oReq.open('GET', url, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

export {
    getSessions
}
export {sessionTemplate} from './template';

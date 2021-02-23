import getSessions, {sessionTemplate as template} from './sessionRepo.js';
// import getSessions, * as template from './sessionRepo.js';
function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    // list.innerHTML = template.sessionTemplate(data.listItems);
    list.innerHTML = template(data.listItems);
};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });

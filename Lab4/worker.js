let count = 0;
function sentDate() {
    postMessage([(new Date()).toString(),count]);
    if (count <6){
        count ++;
    }
    else{
        count = 0;
    }
}
self.onmessage = function (params) {
    
    if(params.data){
        sentDate();
        interval = setInterval(sentDate,1000);
    }
    else{
        clearInterval(interval);
    }
}

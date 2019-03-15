function sendData(url, method, form){
    var formData = new FormData(form);
    if(validate(form)){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send(formData);
    }
}

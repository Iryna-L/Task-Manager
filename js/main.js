function validate(form) {
    var els = form.elements;
    var answer = "";

    if(!els.email.value) answer = " * Fill in your email. </br>";
    if(!els.userName.value) answer += " * Fill in your name. </br>";
    if(!/^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(els.userName.value)) answer += " * Fill in your CORRECT name(WITHOUT NUMBERS). </br>";
    if(!els.password.value) answer += " * Fill in the password. </br>";
    if(!/(?=.*[0-9])(?=.*[a-z]){8,}/.test(els.password.value)) answer += " * incorrect password. MINIMUM: 8 SYMBOLS. Password must contain numbers and letters </br>";
    if(els.password.value == "1234qwer"||els.password.value == "qwer1234") answer += " * Too weak password. </br>";
    if(els.password.value!=els.password2.value) answer += " * Not confirmed password, try again. </br>";

    showAnswer(answer);

    function showAnswer(answer){
        removeAlert();
        var f = document.getElementsByTagName("form")[0];  
        var elem = document.createElement("span");
        elem.classList.add("error");   
        elem.innerHTML = answer;
        f.appendChild(elem); 
        var clearfix = document.createElement("div");
        clearfix.style.cssText = "clear:both;";
        f.appendChild(clearfix); 
    }
    function removeAlert(){
        var fo = document.getElementsByTagName("form")[0]; 
        var s = document.getElementsByTagName("span")[0];
        if(fo.contains(s)){
            fo.removeChild(s);
        }
    }
}

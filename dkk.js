var cookies = 0;

var cookiesprclick = 1;

function addcookie () {
    cookies += cookiesprclick;
    document.getElementById("cookietotal").innerHTML = cookies;
}

var nightMode = false;

function switchMode (){
    document.getElementById("#nightmode")
    nightMode = !nightMode
    if (nightMode) {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
}

function click () {

    document.getElementById("clicks")
    if(cookies >= 27) {
    cookiesprclick += 1;
    } else {
        alert("Need more cookies")
    }
}


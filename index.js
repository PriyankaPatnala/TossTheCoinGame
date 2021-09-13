function toss() {
    var val= Math.floor(Math.random()*100),
    ele=document.getElementById('tossval');
    document.getElementById('OpContainer').style.display = "inline";
    if (val%2==0) {
        ele.innerText = "Heads";
    } else {
        ele.innerText = "Tails";
    }
}

function reset() {
    document.getElementById('OpContainer').style.display = "none";
    document.getElementById('tossval').innerText = "";
}
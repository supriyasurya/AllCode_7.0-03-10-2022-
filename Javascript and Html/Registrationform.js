function onchangeEvent() {
    let change_text = document.getElementById("Gender").value;
    document.getElementById("demo").innerHTML = "you selected : " + change_text;
}

function onFocusEvent(x) {
    document.getElementById(x).style.
    background="#0B12B8";

}

function validateForm() {
    var x = document.forms["registration"]
    ["fname"].value;
    if (x == "") {
        alert("name must be filled out");
        return false;
    }

}


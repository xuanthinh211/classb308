function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert(copyText.value);
}

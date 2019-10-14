// alert gmail
function gmail(){
    alert ("My email is panuwat33586@gmail.com");
}
//edit content
function skilledit(){
    document.getElementById("skill-content").contentEditable = true;
}
function nameedit(){
    document.getElementById("nameinfo").contentEditable = true;
}
//change background color
function randombackgroundcolor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
 }
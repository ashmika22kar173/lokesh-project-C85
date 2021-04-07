canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

car_width = 120;
car_height = 70;

car_x = 10;
car_y = 10;

var background_img = "racing.jpg";
var car_img = "car1.png";



function add() {
    background_img1 = new Image();
    background_img1.onload = uploadbackground;
    background_img1.src = background_img;

    car_img1 = new Image();
    car_img1.onload = uploadcar;
    car_img1.src = car_img;


}

function uploadbackground() {

    ctx.drawImage(background_img1, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {


    ctx.drawImage(car_img1, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == '38') {
        up();
        console.log("up");

    }
    if (keypress == '40') {
        down();
        console.log("down");

    }

    if (keypress == '37') {
        left();
        console.log("left");

    }
    if (keypress == '39') {
        right();
        console.log("right");

    }
}
function up()
{
if (car_y >=0)
{
car_y = car_y - 10;
console.log("When up arrow is pressed ="+ car_x +"-"+car_y);
uploadbackground();
uploadcar();


}
}

function down()
{
if (car_y <=500)
{
car_y = car_y + 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();


}
}

function left()
{
if (car_x >=0)
{
car_x = car_x - 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();


}
}

function right()
{
if (car_x <=700)
{
car_x = car_x + 10;
console.log("When up arrow is pressed ,x="+ car_x +" y ="+car_y);
uploadbackground();
uploadcar();


}
}
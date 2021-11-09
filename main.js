canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverx = 100;
rovery = 100;
rover_width = 100;
rover_height = 100;
nasa_images = ["mars.jpg", "Nasa_image_1.jpg", "Nasa_image_2.jpg", "Nasa_image_3.jpg", "Nasa_image_4.jpg", "Nasa_image_5.jpg"];
random_number = Math.floor(Math.random()*6);
background_image = nasa_images[random_number];
rover_image = "rover.png"

function add() {
    bg_image = new Image();
    bg_image.onload = uploadBg;
    bg_image.src = background_image;
    r_image = new Image();
    r_image.onload = uploadRover;
    r_image.src = rover_image;
}

function uploadBg() {
    ctx.drawImage(bg_image, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(r_image, roverx, rovery, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (key_pressed == '37') {
        left();
        console.log("Left Key Is Pressed");
    }
    if (key_pressed == '39') {
        right();
        console.log("Right Key Is Pressed");
    }
    if (key_pressed == '38') {
        up();
        console.log("Up Key Is Pressed");
    }
    if (key_pressed == '40') {
        down();
        console.log("Down Key Is Pressed");
    }
}

function up() {
    if (rovery >=0) {
        rovery = rovery - 10;
        uploadBg()
        uploadRover()
    }
}

function down() {
    if (rovery <=500) {
        rovery = rovery + 10;
        uploadBg()
        uploadRover()
    }
}

function left() {
    if (roverx >=0) {
        roverx = roverx - 10;
        uploadBg()
        uploadRover()
    }
}

function right() {
    if (roverx <=700) {
        roverx = roverx + 10;
        uploadBg()
        uploadRover()
    }
}
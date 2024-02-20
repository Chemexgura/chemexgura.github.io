// Function to display the overlay and announcement box
function displayOverlay() {
    document.getElementById("overlay").style.display = "block";
    // Close the overlay after 4 seconds
    setTimeout(closeOverlay, 6000);
}

// Function to close the overlay and announcement box
function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

// Call the displayOverlay function when the page is loaded
window.onload = displayOverlay;

function displayBox0() {
    var box0 = document.getElementById("displayBox0");
    toggleVisibility(box0);
}

function displayBox1() {
    var box1 = document.getElementById("displayBox1");
    toggleVisibility(box1);
}

function displayBox2() {
    var box2 = document.getElementById("displayBox2");
    toggleVisibility(box2);
}

function displayBox3() {
    var box3 = document.getElementById("displayBox3");
    toggleVisibility(box3);
}

function displayBox4() {
    var box4 = document.getElementById("displayBox4");
    toggleVisibility(box4);
}

function displayBox5() {
    var box5 = document.getElementById("displayBox5");
    toggleVisibility(box5);
}

function displayBox6() {
    var box6 = document.getElementById("displayBox6");
    toggleVisibility(box6);
}

function displayBox7() {
    var box7 = document.getElementById("displayBox7");
    toggleVisibility(box7);
}

function displayBox8() {
    var box8 = document.getElementById("displayBox8");
    toggleVisibility(box8);
}

function displayBox9() {
    var box9 = document.getElementById("displayBox9");
    toggleVisibility(box9);
}

function displayBox10() {
    var box10 = document.getElementById("displayBox10");
    toggleVisibility(box10);
}

function displayBox11() {
    var box11 = document.getElementById("displayBox11");
    toggleVisibility(box11);
}

function displayBox12() {
    var box12 = document.getElementById("displayBox12");
    toggleVisibility(box12);
}

function displayBox13() {
    var box13 = document.getElementById("displayBox13");
    toggleVisibility(box13);
}

function displayBox14() {
    var box14 = document.getElementById("displayBox14");
    toggleVisibility(box14);
}

function displayBox15() {
    var box15 = document.getElementById("displayBox15");
    toggleVisibility(box15);
}

function displayBox16() {
    var box16 = document.getElementById("displayBox16");
    toggleVisibility(box16);
}

function displayBox17() {
    var box17 = document.getElementById("displayBox17");
    toggleVisibility(box17);
}

function displayBox18() {
    var box18 = document.getElementById("displayBox18");
    toggleVisibility(box18);
}

function displayBox19() {
    var box19 = document.getElementById("displayBox19");
    toggleVisibility(box19);
}

// Generic function to toggle visibility
function toggleVisibility(box) {
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

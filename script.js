//Setting up of moment.js information and format at top of Scheduler
var a = moment().format("LLLL");
document.getElementById("todaysDate").innerHTML = a;

//Creating variables to measure time against moment.js to add color coding to each hour according to time of day
    var correctTime = moment().hour();
    var time9 = 9;
    var time10 = 10;
    var time11 = 11;
    var time12 = 12;
    var time13 = 13;
    var time14 = 14;
    var time15 = 15;
    var time16 = 16;
    var time17 = 17;
    var time18 = 18;

//Function to cycle through all the hours and options of color according to time of day
function rightColor() {
    if (correctTime > time9) {
        $("#box9").addClass("past");  
    }
    else if (correctTime >= time9 && correctTime < time10) {
        $("#box9").addClass("present");
        $("#box9").removeClass("past");
    }
    else if (correctTime < time9) {
        $("#box9").addClass("future");
        $("#box9").removeClass("present");
        $("#box9").removeClass("past");
    }

    if (correctTime > time10) {
        $("#box10").addClass("past");  
    }
    else if (correctTime >= time10 && correctTime < time11) {
        $("#box10").addClass("present");
        $("box10").removeClass("past");
    }
    else if (correctTime < time10) {
        $("#box10").addClass("future");
        $("box10").removeClass("present");
        $("box10").removeClass("past");
    }

    if (correctTime > time11) {
        $("#box11").addClass("past");  
    }
    else if (correctTime >= time11 && correctTime < time12) {
        $("#box11").addClass("present");
        $("#box11").removeClass("past");
    }
    else if (correctTime < time11) {
        $("#box11").addClass("future");
        $("#box11").removeClass("present");
        $("#box11").removeClass("past");
    }

    if (correctTime > time12) {
        $("#box12").addClass("past");  
    }
    else if (correctTime >= time12 && correctTime < time13) {
        $("#box12").addClass("present");
        $("#box12").removeClass("past");
    }
    else if (correctTime < time12) {
        $("#box12").addClass("future");
        $("#box12").removeClass("present");
        $("#box12").removeClass("past");
    }

    if (correctTime > time13) {
        $("#box13").addClass("past");  
    }
    else if (correctTime >= time13 && correctTime < time14) {
        $("#box13").addClass("present");
        $("#box13").removeClass("past");
    }
    else if (correctTime < time13) {
        $("#box13").addClass("future");
        $("#box13").removeClass("present");
        $("#box13").removeClass("past");
    }

    if (correctTime > time14) {
        $("#box14").addClass("past");  
    }
    else if (correctTime >= time14 && correctTime < time15) {
        $("#box14").addClass("present");
        $("#box14").removeClass("past");
    }
    else if (correctTime < time14) {
        $("#box14").addClass("future");
        $("#box14").removeClass("present");
        $("#box14").removeClass("past");
    }

    if (correctTime > time15) {
        $("#box15").addClass("past");  
    }
    else if (correctTime >= time15 && correctTime < time16) {
        $("#box15").addClass("present");
        $("#box15").removeClass("past");
    }
    else if (correctTime < time15) {
        $("#box15").addClass("future");
        $("#box15").removeClass("present");
        $("#box15").removeClass("past");
    }

    if (correctTime > time16) {
        $("#box16").addClass("past");  
    }
    else if (correctTime >= time16 && correctTime < time17) {
        $("#box16").addClass("present");
        $("#box16").removeClass("past");
    }
    else if (correctTime < time16) {
        $("#box16").addClass("future");
        $("#box16").removeClass("present");
        $("#box16").removeClass("past");
    }

    if (correctTime > time17) {
        $("#box17").addClass("past");  
    }
    else if (correctTime >= time17 && correctTime < time18) {
        $("#box17").addClass("present");
        $("#box17").removeClass("past");
    }
    else if (correctTime < time17) {
        $("#box17").addClass("future");
        $("#box17").removeClass("present");
        $("#box17").removeClass("past");
    }
}
rightColor();

//Adding EventListener to single class element at top of table body tag to control click of all submit to localStorage buttons
    var controlAll = document.querySelector(".pageMaster");
    controlAll.addEventListener("click", doSomething, false);

//Function that cycle through all the buttons an submit textarea entry to localStorage    
    function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box9").value;
        localStorage.setItem("text9", clickedItem);
    }

    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box10").value;
        localStorage.setItem("text10", clickedItem);
    }

    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box11").value
        localStorage.setItem("text11", clickedItem);
    }

    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box12").value;
        localStorage.setItem("text12", clickedItem);
    }

    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box13").value;
        localStorage.setItem("text13", clickedItem);
    }

    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box14").value;
        localStorage.setItem("text14", clickedItem);
    }

    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box15").value;
        localStorage.setItem("text15", clickedItem);
    }

    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box16").value;
        localStorage.setItem("text16", clickedItem);
    }

    if (e.target !== e.currentTarget) {
        var clickedItem = document.getElementById("box17").value;
        localStorage.setItem("text17", clickedItem);
    }
    e.stopPropagation();
}

//Return of localStorage information to populate textarea window with the last recorded and saved information from scheduler
    var apptInfo9 = localStorage.getItem("text9");
    document.getElementById("box9").innerHTML = apptInfo9;

    var apptInfo10 = localStorage.getItem("text10");
    document.getElementById("box10").innerHTML = apptInfo10;

    var apptInfo11 = localStorage.getItem("text11");
    document.getElementById("box11").innerHTML = apptInfo11;

    var apptInfo12 = localStorage.getItem("text12");
    document.getElementById("box12").innerHTML = apptInfo12;

    var apptInfo13 = localStorage.getItem("text13");
    document.getElementById("box13").innerHTML = apptInfo13;

    var apptInfo14 = localStorage.getItem("text14");
    document.getElementById("box14").innerHTML = apptInfo14;

    var apptInfo15 = localStorage.getItem("text15");
    document.getElementById("box15").innerHTML = apptInfo15;

    var apptInfo16 = localStorage.getItem("text16");
    document.getElementById("box16").innerHTML = apptInfo16;

    var apptInfo17 = localStorage.getItem("text17");
    document.getElementById("box17").innerHTML = apptInfo17;


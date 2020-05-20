var a = moment().toString();
    document.getElementById("todaysdate").innerHTML = "Today's Date is: " + a;

var day = moment().startOf("day");
    document.getElementById("first-hour").innerHTML = day;
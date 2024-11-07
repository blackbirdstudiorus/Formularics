var power_map = new Map([
    ["mevt", 1000000],
    ["kvt", 1000],
    ["vt", 1],
    ["mivt", 0.001]
])
var work_map = new Map([
    ["mej", 0.000001],
    ["kj", 0.001],
    ["j", 1],
    ["mij", 1000]
])
var time_map = new Map([
    ["d", 86400],
    ["h", 3600],
    ["m", 60],
    ["s", 1]
])
results.onclick = function(){
    var power_v = document.getElementById("power").value;
    var work_v = document.getElementById("work").value;
    var time_v = document.getElementById("time").value;
    var power = document.getElementById("power");
    var work = document.getElementById("work");
    var time = document.getElementById("time");
    if (power_v == "") {
        var t = 1;
    }
    else if (work_v == "") {
        var t = 2;
    }
    else if (time_v == "") {
        var t = 3;
    }
    console.log(t);
    var power_izm = document.getElementById("power-izm").value;
    var work_izm = document.getElementById("work-izm").value;
    var time_izm = document.getElementById("time-izm").value;
    console.log();
    if (!si.checked) {
        if (t == 1) {
            time_v = time_v * time_map.get(time_izm);
            work_v = work_v / work_map.get(work_izm);
            document.getElementById("power").value = (work_v / time_v) / power_map.get(power_izm);
        }
        if (t == 2) {
            power_v = power_v * power_map.get(power_izm);
            time_v = time_v * time_map.get(time_izm);
            document.getElementById("work").value = (power_v * time_v) * work_map.get(work_izm);
        }
        if (t == 3) {
            power_v = power_v * power_map.get(power_izm);
            work_v = work_v / work_map.get(work_izm);
            document.getElementById("time").value = (work_v / power_v) / time_map.get(time_izm);
        }
    }
    else {
        if (t == 1) {
            time_v = time_v * time_map.get(time_izm);
            work_v = work_v / work_map.get(work_izm);
            document.getElementById("power").value = work_v / time_v;
        }
        if (t == 2) {
            power_v = power_v * power_map.get(power_izm);
            time_v = time_v * time_map.get(time_izm);
            document.getElementById("work").value = power_v * time_v;
        }
        if (t == 3) {
            power_v = power_v * power_map.get(power_izm);
            work_v = work_v / work_map.get(work_izm);
            document.getElementById("time").value = work_v / power_v;
        }
    }
}

power_del.onclick = function() {
    document.getElementById("power").value = "";
}
work_del.onclick = function() {
    document.getElementById("work").value = "";
}
time_del.onclick = function() {
    document.getElementById("time").value = "";
}
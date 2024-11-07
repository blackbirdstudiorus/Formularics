var time_map = new Map([
    ["d", 86400],
    ["h", 3600],
    ["m", 60],
    ["s", 1]
])
var moving_map = new Map([
    ["km", 1000],
    ["m", 1],
    ["sm", 0.01],
    ["mm", 0.001]
])
results.onclick = function(){
    var moving_v = document.getElementById("moving").value;
    var time_v = document.getElementById("time").value;
    var ac_v = document.getElementById("ac").value;
    var speed_v = document.getElementById("speed").value;
    var speed0_v = document.getElementById("speed0").value;

    var moving = document.getElementById("moving");
    var moving_type = document.getElementById("moving_type").value;
    var time = document.getElementById("time");
    var ac = document.getElementById("ac");
    var speed = document.getElementById("speed");
    var speed0 = document.getElementById("speed0");

    if (not_ss.checked) {
        speed0_v = 0;
    }
    if (not_fs.checked) {
        speed_v = 0;
    }
    if (moving_type == "rm") {
        ac_v = 0;
    }
    if (moving_type == "rz") {
        ac_v = ac_v * (-1);
    }
    var m = 0;
    var f = 0;
    if (not_da.checked) {
        var f = 4;
        var ac_v = "not";
        var m = m + 1;
    }
    if (not_dt.checked) {
        var f = 3;
        var time_v = "not";
        var m = m + 1;
    }
    if (not_ds.checked) {
        var f = 1;
        var moving_v = "not";
        var m = m + 1; 
    }
    if (not_dv.checked) {
        var f = 2;
        var speed_v = "not";
        console.log("f=2");
        var m = m + 1;
    }
    if (not_dv0.checked) {
        var f = 5;
        var speed0_v = "not";
        var m = m + 1; 
    }

    if (moving_v == "") {
        var t = 1;
        console.log("t=1");
    }
    else if (time_v == "") {
        var t = 2;
    }
    else if (ac_v == "" && moving_type != "rm") {
        var t = 3;
    }
    else if (speed_v == "" && !not_fs.checked) {
        var t = 4;
    }
    else if (speed0_v == "" && !not_ss.checked && moving_type != "rm") {
        var t = 5;
    }
    
    var time_izm = document.getElementById("time-izm").value;
    var moving_izm = document.getElementById("moving-izm").value;
    var si = document.getElementById("si");
    if (m == 1 | (moving_type == "rm" && m == 0)) {
        if (si.checked) {
            var moving_v = moving_v * moving_map.get(moving_izm);
            var time_v = time_v * time_map.get(time_izm);
            var speed_v = speed_v * moving_map.get(moving_izm) / time_map.get(time_izm);
            console.log(speed_v);
            console.log(time_v);
            console.log(moving_v);
            var speed0_v = speed0_v * moving_map.get(moving_izm) / time_map.get(time_izm);
            var ac_v = ac_v * moving_map.get(moving_izm) / ((time_map.get(time_izm))**2);
            console.log(speed0_v);
            console.log(ac_v);
        }
        
        if (moving_type == "rm") {
            if (!not_da.checked && !not_ds.checked && !not_dv.checked && !not_dv0.checked && !not_dt.checked) {
                if (t == 1) {
                    document.getElementById("moving").value = speed_v * time_v;
                }
                if (t == 2) {
                    document.getElementById("time").value = moving_v / speed_v;
                }
                if (t == 3) {
                    document.getElementById("speed").value = moving_v / time_v;
                }
            }
        }
        else {
            if (t == 1) {
                if (f == 2) {
                    document.getElementById("moving").value = (speed0_v * time_v) + ((ac_v * (time_v ** 2)) / 2);
                }
                if (f == 3) {
                    document.getElementById("moving").value = ((speed_v**2) - (speed0_v**2)) / (2 * ac_v);
                }
                if (f == 4) {
                    document.getElementById("moving").value = (speed_v - (- speed0_v)) * time_v / 2;
                }
                if (f == 5) {
                    document.getElementById("moving").value = (speed_v * time_v) - ((ac_v * (time_v*time_v)) / 2);
                }
            }
            else if (t == 5) {
                if (f == 2) {
                    document.getElementById("speed0").value = (moving_v - ((ac_v * (time_v * time_v)) / 2)) / time_v;
                }
                if (f == 3) {
                    document.getElementById("speed0").value = Math.sqrt((speed_v*speed_v) - 2 * ac_v * moving_v);
                }
                if (f == 4) {
                    document.getElementById("speed0").value = ((2 * moving_v) / time_v) - speed_v;
                }
                if (f == 1) {
                    document.getElementById("speed0").value = speed_v - (ac_v * time_v);
                }
            }
            else if (t == 2) {
                if (f == 2) {
                    if (moving_type == "ry") {
                        document.getElementById("time").value = (-2*speed0_v + Math.sqrt((4*speed0_v*speed0_v)+8*ac_v*moving_v)) / (2 * ac_v);
                    }   
                    else if (moving_type == "rz") {
                        document.getElementById("time").value = (-2*speed0_v + Math.sqrt((4*speed0_v*speed0_v)+8*(-ac_v)*moving_v)) / (2 * (-ac_v));
                    }         
                }   
                if (f == 4) {
                    document.getElementById("time").value = (2 * moving_v) / (speed_v - (- speed0_v));
                }
                if (f == 5) {
                    if (moving_type == "ry") {
                        document.getElementById("time").value = ((-2*speed_v + Math.sqrt((4*speed_v*speed_v)-8*ac_v*moving_v)) / (2 * ac_v))*(-1);
                    }   
                    else if (moving_type == "rz") {
                        var ac_v = -ac_v;
                        document.getElementById("time").value = ((-2*speed_v + Math.sqrt((4*speed_v*speed_v)-8*ac_v*moving_v)) / (2 * ac_v))*(-1);
                    }
                }
                if (f == 1) {
                    document.getElementById("time").value = (speed_v - speed0_v) / ac_v;
                }
            }
            else if (t == 3) {
                if (f == 1) {
                    if (moving_type == "ry") {
                        document.getElementById("ac").value = (speed_v - speed0_v) / time_v;
                    }
                    else if (moving_type == "rz") {
                        document.getElementById("ac").value = (speed0_v - speed_v) / time_v;
                    }
                }
                if (f == 2) {
                    if (moving_type == "ry") {
                        document.getElementById("ac").value = (2 * (moving_v - speed0_v * time_v)) / (time_v * time_v);
                    }
                    else if (moving_type == "rz") {
                        document.getElementById("ac").value = ((2 * (moving_v - speed0_v * time_v)) / (time_v * time_v))*(-1);
                    }
                }
                if (f == 3) {
                    if (moving_type == "ry") {
                        document.getElementById("ac").value = (speed_v**2 - speed0_v**2) / (2 * moving_v);
                    }
                    else if (moving_type == "rz") {
                        document.getElementById("ac").value = (speed_v**2 - speed0_v**2) / (2 * moving_v);
                    }
                }
                if (f == 5) {
                    if (moving_type == "ry") {
                        document.getElementById("ac").value = (-2 * (moving_v - speed_v * time_v)) / (time_v * time_v);
                    }
                    else if (moving_type == "rz") {
                        document.getElementById("ac").value = ((-2 * (moving_v - speed_v * time_v)) / (time_v * time_v))*(-1);
                    }
                }
            }
            else if (t == 4) {
                if (f == 1) {
                    document.getElementById("speed").value = speed0_v -(- (ac_v * time_v));
                }
                if (f == 3) {
                    document.getElementById("speed").value = Math.sqrt((speed0_v*speed0_v) + 2 * ac_v * moving_v);
                }
                if (f == 4) {
                    document.getElementById("speed").value = ((2 * moving_v) / time_v) - speed0_v;
                }
                if (f == 5) {
                    document.getElementById("speed").value = (moving_v -(- ((ac_v * time_v * time_v) / 2))) / time_v;
                }
            }
        }
    }
}
time_del.onclick = function() {
    document.getElementById("time").value = "";
}
moving_del.onclick = function() {
    document.getElementById("moving").value = "";
}
speed_del.onclick = function() {
    document.getElementById("speed").value = "";
}
speed0_del.onclick = function() {
    document.getElementById("speed0").value = "";
}
ac_del.onclick = function() {
    document.getElementById("ac").value = "";
}
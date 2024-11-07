var mass_map = new Map([
    ["kg", 1],
    ["g", 0.001],
    ["mg", 0.000001],
    ["cnt", 100],
    ["tn", 1000]
])
var volume_map = new Map([
    ["l", 0.001],
    ["ml", 0.000001],
    ["m3", 1],
    ["dm3", 1000],
    ["sm3", 1000000],
    ["mm3", 1000000000]
])
results.onclick = function(){
    var density_v = document.getElementById("density").value;
    var mass_v = document.getElementById("mass").value;
    var volume_v = document.getElementById("volume").value;
    var density = document.getElementById("density");
    var mass = document.getElementById("mass");
    var volume = document.getElementById("volume");
    var div = document.getElementById("main");
    if (density_v == "") {
        var t = 1;
    }
    else if (mass_v == "") {
        var t = 2;
    }
    else if (volume_v == "") {
        var t = 3;
    }
    var mass_izm = document.getElementById("mass-izm").value;
    var volume_izm = document.getElementById("volume-izm").value;
    var si = document.getElementById("si");
    console.log();
    if (si.checked) {
        if (t == 1) {
            mass_v = mass_v * mass_map.get(mass_izm);
            volume_v = volume_v * volume_map.get(volume_izm);
            document.getElementById("density").value = mass_v / volume_v;
        }
        if (t == 2) {
            volume_v = volume_v * volume_map.get(volume_izm);
            density_v = density_v * mass_map.get(mass_izm);
            document.getElementById("mass").value = volume_v * density_v;
        }
        if (t == 3) {
            mass_v = mass_v * mass_map.get(mass_izm);
            density_v = density_v / volume_map.get(volume_izm);
            document.getElementById("volume").value = mass_v / density_v;
        }
    }
    else {
        if (t == 1) {
            document.getElementById("density").value = mass_v / volume_v;
        }
        if (t == 2) {
            document.getElementById("mass").value = density_v * volume_v;
        }
        if (t == 3) {
            document.getElementById("volume").value = mass_v / density_v;
        }
    }
    
}
density_del.onclick = function() {
    document.getElementById("density").value = "";
}
mass_del.onclick = function() {
    document.getElementById("mass").value = "";
}
volume_del.onclick = function() {
    document.getElementById("volume").value = "";
}
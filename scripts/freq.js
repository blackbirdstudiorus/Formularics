var time_map = new Map([
    ["d", 86400],
    ["h", 3600],
    ["m", 60],
    ["s", 1]
])
var freq_map = new Map([
    ["mehz", 1000000],
    ["khz", 1000],
    ["hz", 1],
    ["mihz", 0.001]
])
results.onclick = function() {
    var freq_v = document.getElementById("freq").value;
    var time_v = document.getElementById("time").value;
    var kolvo_v = document.getElementById("kolvo").value;
    if (freq_v == "") {
        var t = 1;
    }
    else if (time_v == "") {
        var t = 2;
    }
    else if (kolvo_v == "") {
        var t = 3;
    }
    console.log(t);
    var time_izm = document.getElementById("time_izm").value;
    var freq_izm = document.getElementById("freq_izm").value;
    var si = document.getElementById("si");
    if (si.checked) {
        freq_v = freq_v * freq_map.get(freq_izm);
        time_v = time_v * time_map.get(time_izm);
    }
    if (t == 1) {
        document.getElementById("freq").value = kolvo_v / time_v;
    }
    else if (t == 2) {
        document.getElementById("time").value = kolvo_v / freq_v;
    }
    else if (t == 3) {
        document.getElementById("kolvo").value = freq_v * time_v;
    }
}
freq_del.onclick = function() {
    document.getElementById("freq").value = "";
}
time_del.onclick = function() {
    document.getElementById("time").value = "";
}
kolvo_del.onclick = function() {
    document.getElementById("kolvo").value = "";
}
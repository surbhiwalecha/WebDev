function clk_24_hr(){
const targetDiv = document.getElementById("clock_12hr");
const showDiv = document.getElementById("clock_24hr");
    targetDiv.style.display = "none";
    showDiv.style.display = "block";

}

function clk_12_hr(){
    const targetDiv = document.getElementById("clock_24hr");
    const showDiv = document.getElementById("clock_12hr");
        targetDiv.style.display = "none";
        showDiv.style.display = "block";
    
}


//24hr
let time_24hr= setInterval(function(){ curr_time_24hr() }, 1000);

function curr_time_24hr() {

    let d, h, m, s, h_f, m_f, s_f, day, curr_date;
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    h_f = h.toString().padStart(2, '0');
    m_f = m.toString().padStart(2, '0');
    s_f = s.toString().padStart(2, '0');
    curr_day = d.toDateString().substring(4, -1);
    curr_date = d.toDateString().substring(4);
    document.getElementById("time_24").innerHTML = h_f + " : " + m_f + " : " + s_f;
    document.getElementById("date_24").innerHTML = curr_date;
    document.getElementById("day_24").innerHTML = curr_day;
}
//12 hr format

let time_12hr = setInterval(function(){ curr_time_12hr() }, 1000);

function curr_time_12hr() {
    let d = new Date();
    let h = d.getHours() % 12 || 12;
    let m = d.getMinutes();
    let s = d.getSeconds();
    let h_f = h.toString().padStart(2, '0');
    let m_f = m.toString().padStart(2, '0');
    let s_f = s.toString().padStart(2, '0');
    let suf = (d.getHours() > 12) ? "PM" : "AM";
    let curr_day = d.toDateString().substring(4, -1);
    let curr_date = d.toDateString().substring(4);
    let curr_time = h_f + " : " + m_f + " : " + s_f + " " + suf;
    document.getElementById("time").innerHTML = curr_time;
    document.getElementById("date").innerHTML = curr_date;
    document.getElementById("day").innerHTML = curr_day;

}

const views = document.getElementById("pageviews");
const price = document.getElementById("money");
const slider = document.getElementById("slide");
const toggle = document.getElementById("billing");
const month = document.getElementById("per-month")
const toggleslider = document.getElementById("toggle-slider")
let clickbutton = false;
let rangevalue = 50;

toggle.addEventListener("click", (e) => {
    clickbutton = !clickbutton;
    if (!clickbutton){
        toggleslider.style.background = "#CFD8EF";
        if(rangevalue >= 0 && rangevalue < 25){
            price.textContent = "$"+10+".00";
            month.textContent = "/month";
        } else if (rangevalue >= 25 && rangevalue < 50){
            price.textContent = "$"+12+".00";
            month.textContent = "/month";
        } else if (rangevalue >= 50 && rangevalue <= 70){
            price.textContent = "$"+16+".00";
            month.textContent = "/month";
        } else if (rangevalue > 70 && rangevalue < 90){
            price.textContent = "$"+20+".00";
            month.textContent = "/month";
        } else {
            price.textContent = "$"+25+".00";
            month.textContent = "/month";
        }

    } else {
        toggleslider.style.background = "#7AEADF";
        if (rangevalue >= 0 && rangevalue < 25){
            toggle.style.background = "#7AEADF"
            price.textContent = "$"+90;
            month.textContent = "/year";
        } else if (rangevalue >= 25 && rangevalue < 50){
            price.textContent = "$"+108;
            month.textContent = "/year";
        } else if (rangevalue >= 50 && rangevalue <= 70){
            price.textContent = "$"+144;
            month.textContent = "/year";
        } else if (rangevalue > 70 && rangevalue < 90){
            price.textContent = "$"+180;
            month.textContent = "/year";
        } else {
            price.textContent = "$"+225;
            month.textContent = "/year";
        }
    } 
});

slider.addEventListener("input", (e) => {
    slider.style.backgroundSize = `${Number(e.target.value)}% 100%`
    if (!clickbutton){
        if (e.target.value >= 0 && e.target.value < 25){
            price.textContent = "$"+10+".00";
            views.textContent = 50+"K Pageviews";
        } else if (e.target.value >= 25 && e.target.value < 50){
            price.textContent = "$"+12+".00";
            views.textContent = 75+"K Pageviews";
        } else if (e.target.value >= 50 && e.target.value <= 70){
            price.textContent = "$"+16+".00";
            views.textContent = 100+"K Pageviews";
        } else if (e.target.value > 70 && e.target.value < 90){
            price.textContent = "$"+20+".00";
            views.textContent = 150+"K Pageviews";
        } else {
            price.textContent = "$"+25+".00";
            views.textContent = 200+"K Pageviews";
        }

    } else {
        if (e.target.value >= 0 && e.target.value < 25){
            price.textContent = "$"+90;
            month.textContent = "/year";
            views.textContent = 50+"K Pageviews";
        } else if (e.target.value >= 25 && e.target.value < 50){
            price.textContent = "$"+108;
            month.textContent = "/year";
            views.textContent = 75+"K Pageviews";
        } else if (e.target.value >= 50 && e.target.value <= 70){
            price.textContent = "$"+144;
            month.textContent = "/year";
            views.textContent = 100+"K Pageviews";
        } else if (e.target.value > 70 && e.target.value < 90){
            price.textContent = "$"+180;
            month.textContent = "/year";
            views.textContent = 150+"K Pageviews";
        } else {
            price.textContent = "$"+225;
            month.textContent = "/year";
            views.textContent = 200+"K Pageviews";
        }
    }
});
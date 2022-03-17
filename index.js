const daily= document.querySelector(".Daily");
const weekly= document.querySelector(".Weekly");
const monthly= document.querySelector(".Monthly");
const w32= document.querySelector(".w32");
const w36= document.querySelector(".w36");
const w10= document.querySelector(".w10");
const w8= document.querySelector(".w8");
const w4= document.querySelector(".w4");
const w7= document.querySelector(".w7");
const w44= document.querySelector(".w44");
const w5= document.querySelector(".w5");
const w55= document.querySelector(".w55");
const w100= document.querySelector(".w100");
const w2= document.querySelector(".w2");
const w22= document.querySelector(".w22");
const dailyfunc=()=>{
    w32.innerHTML="5hrs";
    w36.textContent="Yesterday-7hrs";
    w10.textContent="1hr";
    w8.textContent="Yesterday-2hrs";
    w4.textContent="0hrs";
    w7.textContent="Yesterday-1hr";;
    w44.textContent="1hr";
    w5.textContent="Yesterday-1hr";
    w55.textContent="1hr";
    w100.textContent="Yesterday-3hrs";
    w2.textContent="0hrs";
    w22.textContent="Yesterday-1hr";
    daily.style.color="white";
    weekly.style.color="hsl(236, 100%, 87%)";
    monthly.style.color="hsl(236, 100%, 87%)";
}

const dailyclick= daily.addEventListener('click',dailyfunc)
const weeklyfunc=()=>{
    w32.innerHTML="32hrs";
    w36.textContent="Last Week-36hrs";
    w10.textContent="10hrs";
    w8.textContent="Last Week-8hrs";
    w4.textContent="4hrs";
    w7.textContent="Last Week-7hrs";;
    w44.textContent="4hrs";
    w5.textContent="Last Week-5hrs";
    w55.textContent="5hrs";
    w100.textContent="Last Week-10hrs";
    w2.textContent="2hrs";
    w22.textContent="Last Week-2hrs";
    weekly.style.color="white"
    monthly.style.color="hsl(236, 100%, 87%)";
    daily.style.color="hsl(236, 100%, 87%)";
}
const weeklyclick=weekly.addEventListener('click',weeklyfunc)
const monthlyfunc=()=>{
    w32.innerHTML="103hrs";
    w36.textContent="Last Month-128hrs";
    w10.textContent="23hrs";
    w8.textContent="Last Month-29hrs";
    w4.textContent="13hrs";
    w7.textContent="Last Month-19hrs";;
    w44.textContent="11hrs";
    w5.textContent="Last Month-18hrs";
    w55.textContent="21hrs";
    w100.textContent="Last Month-23hrs";
    w2.textContent="7hrs";
    w22.textContent="Last Month-11hrs";
    daily.style.color="hsl(236, 100%, 87%)";
    weekly.style.color="hsl(236, 100%, 87%)";
    monthly.style.color="white";
}
const monthlyclick=monthly.addEventListener('click',monthlyfunc)
 
 



let cl = console.log;

const month = document.getElementById("month");
const week = document.getElementById("week");
const weeks = document.getElementById("weeks");

const emailRecieved = document.getElementById("emailRecieved");
const unreadEmail = document.getElementById("unreadEmail");
const sentRecieved = document.getElementById("sentRecieved");

const missed = document.getElementById("missed");
const complete = document.getElementById("complete");
const call = document.getElementById("call");

const sentSms = document.getElementById("sentSms");
const recievedSms = document.getElementById("recievedSms");
const unreadSms = document.getElementById("unreadSms");




const onMonthHandler = (eve) =>{
    eve.preventDefault()
    cl("month")
  emailRecieved.innerHTML = "1100";
  unreadEmail.innerHTML ="1200";
  sentRecieved.innerHTML ="1500";

  missed.innerHTML ="103";
  complete.innerHTML ="107";
  call.innerHTML ="199";

  sentSms.innerHTML ="200";
  recievedSms.innerHTML ="201";
  unreadSms.innerHTML ="203";

month.classList.add("active");
day.classList.remove("active");
week.classList.remove("active");
weeks.classList.remove("active");




}

const onweekHandler = (eve) =>{
    eve.preventDefault()
    cl("month")
  emailRecieved.innerHTML = "500";
  unreadEmail.innerHTML ="530";
  sentRecieved.innerHTML ="540";

  missed.innerHTML ="40";
  complete.innerHTML ="44";
  call.innerHTML ="45";


  sentSms.innerHTML ="300";
  recievedSms.innerHTML ="301";
  unreadSms.innerHTML ="302";


  week.classList.add("active");
  day.classList.remove("active");
  month.classList.remove("active");
  weeks.classList.remove("active");



}

const onweeksHandler = (eve) =>{
    eve.preventDefault()
    cl("month")
  emailRecieved.innerHTML = "987";
  unreadEmail.innerHTML ="917";
  sentRecieved.innerHTML ="900";

  missed.innerHTML ="50";
  complete.innerHTML ="51";
  call.innerHTML ="52";

  sentSms.innerHTML ="401";
  recievedSms.innerHTML ="402";
  unreadSms.innerHTML ="403";
 
  weeks.classList.add("active");
  day.classList.remove("active");
  month.classList.remove("active");
  week.classList.remove("active");


}








month.addEventListener("click", onMonthHandler);
week.addEventListener("click", onweekHandler)
weeks.addEventListener("click", onweeksHandler)



//
var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});
let yearDays = 0;
const lifeTime = 50;
let hrsPerDay = 0;
let minsPerDay = 0;
let hrsPerWeek = 0;
let minsPerWeek = 0;
let daysPerWeek = 0;
let hrsPerMonth = 0;
let minsPerMonth = 0;
let daysPerMonth = 0;
let hrsPerYear = 0;
let minsPerYear = 0;
let daysPerYear = 0;
let lifeTimeDays = 0;
let lifeTimeYears = 0;

function calculateScreenTime()
{
    console.log("Calculate Screen Time...")
    let results = document.getElementById("stcalcresults");
    const hrs = document.getElementById("hrs").value;
    const mins = document.getElementById("mins").value;
    console.log("Hrs = "+hrs+" Mins = "+mins);
    calculateSevenDays(hrs, mins);
    calculateMonth(hrs, mins);
    calculateYear(hrs, mins);
    calculateLifetime();
    
}

function calculateLifetime()
{
    console.log("CLT: Year Days "+daysPerYear);
    lifeTimeDays = daysPerYear * lifeTime;
    console.log("CLT: Result Days "+lifeTimeDays);
    lifeTimeYears = (lifeTimeDays / 365).toFixed(2);
    console.log("CLT: This is "+lifeTimeYears+" years on your phone");
    
    //output results
    const output = document.getElementById("lifeTime");
    output.innerHTML = "";
    
    const card = document.createElement("div");
    card.classList.add("resultsCard");
        card.innerHTML = `
            <h3>Life Time Results</h3>
            <p><strong>Days Across a Life Time</strong> ${lifeTimeDays}</p>
            <p>This is <strong> ${lifeTimeYears} years </strong> of you life staring at your Screen</p>
        `;
    output.appendChild(card);
}

function calculateYear(hrs, mins)
{
    console.log("C365D: Calculate 365 Days (1 Year)...");
    console.log("C365D: hrs "+hrs+" mins"+mins);
    hrsYearCalc = +hrs*365;
    minsYearCalc = +mins*365;
    console.log("C365D: year hrs "+hrsYearCalc+" mins "+minsYearCalc);
    let yearMinsToHours = parseInt(minsYearCalc / 60);
    let takeAwayMins = 0;
    if (yearMinsToHours < 1)
    {
        console.log("C365D: yearly mins less than 1 hour");
        minsPerYear = +yearMins;
        hrsPerYear = +yearHrs;
    }
    else
    {
        takeAwayMins = +yearMinsToHours * 60;
        minPerYear = +minsYearCalc - +takeAwayMins;
        hrsPerYear = +hrsYearCalc + +yearMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultYear "+minPerYear);
        console.log("HrsResultsYear "+hrsPerYear);
    }
    console.log("C365D: Results "+hrsPerYear+"hrs "+minPerYear+"mins");
    let totalMinutes = (hrsYearCalc * 60)+ +minsYearCalc;
    let days = calcDays(totalMinutes);
    //set Year Days for LifeTime calcDays
    daysPerYear = days;
    console.log("C365D: Days "+days);
    
    //Output Results
    const output = document.getElementById("year");
    output.innerHTML = "";
    
    const card = document.createElement("div");
    card.classList.add("resultsCard");
        card.innerHTML = `
            <h3>365 Days / 1 Year </h3>
            <p><strong>Total Time</strong> ${hrsPerYear} hrs ${minPerYear} mins</p>
            <p><strong>Days Per Year</strong> ${daysPerYear} </p>
        `;
    output.appendChild(card);
}

function calculateMonth(hrs, mins)
{
    console.log("C30D: Calculate 30 days (1 Month)... ");
    console.log("C30D: hrs "+hrs+" mins "+mins);
    let monthHrs = +hrs*30;
    let monthMins = +mins*30;
    console.log("C30D: month hrs "+monthHrs+" mins "+monthMins);
    let monthMinsToHours = parseInt(monthMins / 60);
    let takeAwayMins = 0;
    if (monthMinsToHours < 1)
    {
        console.log("C30D: monthly mins less than 1 hour");
        minsPerMonth = +monthMins;
        hrsPerMonth = +monthHrs;
    }
    else
    {
        takeAwayMins = monthMinsToHours * 60;
        minsPerMonth = +monthMins - +takeAwayMins;
        hrsPerMonth = +monthHrs + +monthMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultMonth "+minsPerMonth);
        console.log("HrsResultsMonth "+hrsPerMonth);
    }
    console.log("C30D: Results "+hrsPerMonth+"hrs "+minsPerMonth+"mins");
    let totalMins = (monthHrs*60)+ +monthMins;
    const days = calcDays(totalMins);
    console.log("C30D: Results in Day "+days);
    daysPerMonth = days;
    
    //Output Results
    const output = document.getElementById("month");
    output.innerHTML = "";
    
    const card = document.createElement("div");
    card.classList.add("resultsCard");
        card.innerHTML = `
            <h3>30 Day / 1 Month Results</h3>
            <p><strong>Total Time</strong> ${hrsPerMonth} hrs ${minsPerMonth} mins</p>
            <p><strong>Days Per Month</strong> ${daysPerMonth} </p>
        `;
    output.appendChild(card);
    
}

function calculateSevenDays(hrs, mins)
{ 
    console.log("Calculate Seven Days...");
    console.log("C7D: hrs "+hrs+" mins "+mins);
    let weekhrs = +hrs*7;
    let weekmins = +mins*7;
    console.log("C7D: weekhr "+weekhrs+" weekmins "+weekmins);
    let weekMinsToHours = parseInt(weekmins / 60);
    console.log("C7D: Hours in Week Mins Ratio "+weekMinsToHours);
    let takeAwayMins = 0;
    if (weekMinsToHours < 1)
    {
        console.log("C7D: Week Mins to Hours less than 1 hour");
        minsPerWeek = +weekmins;
        hrsPerWeek = +weekhrs;
    }
    else 
    {
        takeAwayMins = weekMinsToHours * 60;
        minsPerWeek = +weekmins - +takeAwayMins;
        hrsPerWeek = +weekhrs + +weekMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultWeel "+minsPerWeek);
        console.log("HrsResultsWeek "+hrsPerWeek);
        
    }
    
    console.log("C7D: Result for a week: Hrs "+hrsPerWeek+" mins "+minsPerWeek);
    const output = document.getElementById("sevenDays");
    output.innerHTML = "";
    
    let totalMinutes = (hrsPerWeek*60)+minsPerWeek;
    console.log("C7D: Total Minutes "+totalMinutes);
    let days = calcDays(totalMinutes);
    daysPerWeek = days;
    const card = document.createElement("div");
    card.classList.add("resultsCard");
        card.innerHTML = `
            <h3>7 Day Results</h3>
            <p><strong>Total Time</strong> ${hrsPerWeek} hrs ${minsPerWeek} mins</p>
            <p><strong>Days Per Week</strong> ${daysPerWeek} </p>
        `;
    output.appendChild(card);
}

function calcDays(totalMinutes) 
{
    console.log("Calc Days Looking at the screen from total minutes");
    let days = (totalMinutes / 1440).toFixed(2);
    console.log("Days "+days);
    return days;
    
}

function outPutResults()
{
    
}
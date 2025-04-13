let yearDays = 0;
const lifeTime = 50;

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
    console.log("CLT: Year Days "+yearDays);
    lifeTimeDays = yearDays * lifeTime;
    console.log("CLT: Result Days "+lifeTimeDays);
    years = (lifeTimeDays / 365).toFixed(2);
    console.log("CLT: This is "+years+" years on your phone");
    
    //output results
    const output = document.getElementById("lifeTime");
    output.innerHTML = "";
    
    const card = document.createElement("div");
    card.classList.add("resultsCard");
        card.innerHTML = `
            <h3>Life Time Results</h3>
            <p><strong>Days Across a Life Time</strong> ${lifeTimeDays}</p>
            <p>This is <strong> ${years} years </strong> of you life staring at your Screen</p>
        `;
    output.appendChild(card);
}

function calculateYear(hrs, mins)
{
    console.log("C365D: Calculate 365 Days (1 Year)...");
    console.log("C365D: hrs "+hrs+" mins"+mins);
    let yearHrs = +hrs*365;
    let yearMins = +mins*365;
    console.log("C365D: year hrs "+yearHrs+" mins "+yearMins);
    let yearMinsToHours = parseInt(yearMins / 60);
    let minResultYear = 0;
    let hrsResultYear = 0;
    let takeAwayMins = 0;
    if (yearMinsToHours < 1)
    {
        console.log("C365D: yearly mins less than 1 hour");
        minResultYear = +yearMins;
        hrsResultYear = +yearHrs;
    }
    else
    {
        takeAwayMins = +yearMinsToHours * 60;
        minResultYear = +yearMins - +takeAwayMins;
        hrsResultYear = +yearHrs + +yearMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultYear "+minResultYear);
        console.log("HrsResultsYear "+hrsResultYear);
    }
    console.log("C365D: Results "+hrsResultYear+"hrs "+minResultYear+"mins");
    let totalMinutes = (yearHrs * 60)+ +yearMins;
    let days = calcDays(totalMinutes);
    //set Year Days for LifeTime calcDays
    yearDays = days;
    console.log("C365D: Days "+days);
    
    //Output Results
    const output = document.getElementById("year");
    output.innerHTML = "";
    
    const card = document.createElement("div");
    card.classList.add("resultsCard");
        card.innerHTML = `
            <h3>365 Days / 1 Year </h3>
            <p><strong>Total Time</strong> ${hrsResultYear} hrs ${minResultYear} mins</p>
            <p><strong>Days Per Month</strong> ${days} </p>
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
    let minResultMonth = 0;
    let hrsResultMonth = 0;
    let takeAwayMins = 0;
    if (monthMinsToHours < 1)
    {
        console.log("C30D: monthly mins less than 1 hour");
        minResultMonth = +monthMins;
        hrsResultsMonth = +monthHrs;
    }
    else
    {
        takeAwayMins = monthMinsToHours * 60;
        minResultMonth = +monthMins - +takeAwayMins;
        hrsResultMonth = +monthHrs + +monthMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultMonth "+minResultMonth);
        console.log("HrsResultsMonth "+hrsResultMonth);
    }
    console.log("C30D: Results "+hrsResultMonth+"hrs "+minResultMonth+"mins");
    let totalMins = (monthHrs*60)+ +monthMins;
    const days = calcDays(totalMins);
    console.log("C30D: Results in Day "+days);
    
    //Output Results
    const output = document.getElementById("month");
    output.innerHTML = "";
    
    const card = document.createElement("div");
    card.classList.add("resultsCard");
        card.innerHTML = `
            <h3>30 Day / 1 Month Results</h3>
            <p><strong>Total Time</strong> ${hrsResultMonth} hrs ${minResultMonth} mins</p>
            <p><strong>Days Per Month</strong> ${days} </p>
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
    let minResultWeek = 0;
    let hrsResultsWeek = 0;
    let takeAwayMins = 0;
    if (weekMinsToHours < 1)
    {
        console.log("C7D: Week Mins to Hours less than 1 hour");
        minResultWeek = +weekmins;
        hrsResultWeek = +weekhrs;
    }
    else 
    {
        takeAwayMins = weekMinsToHours * 60;
        minResultWeek = +weekmins - +takeAwayMins;
        hrsResultWeek = +weekhrs + +weekMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultWeel "+minResultWeek);
        console.log("HrsResultsWeek "+hrsResultWeek);
        
    }
    
    console.log("C7D: Result for a week: Hrs "+hrsResultWeek+" mins "+minResultWeek);
    const output = document.getElementById("sevenDays");
    output.innerHTML = "";
    
    let totalMinutes = (hrsResultWeek*60)+minResultWeek;
    console.log("C7D: Total Minutes "+totalMinutes);
    let days = calcDays(totalMinutes);
    
    const card = document.createElement("div");
    card.classList.add("resultsCard");
        card.innerHTML = `
            <h3>7 Day Results</h3>
            <p><strong>Total Time</strong> ${hrsResultWeek} hrs ${minResultWeek} mins</p>
            <p><strong>Days Per Week</strong> ${days} </p>
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
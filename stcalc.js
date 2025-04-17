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
let restOfYourLifeScreenTime = 0;
let ageSubmitted = "N";
let dailyScreenTimeMinutes = 0;

function calculateScreenTime()
{
    console.log("Calculate Screen Time...")
    let results = document.getElementById("stcalcresults");
    const hrs = document.getElementById("hrs").value;
    const mins = document.getElementById("mins").value;
    const age = document.getElementById("age").value;
    dailyScreenTimeMinutes = (hrs*60) + +mins;
    console.log("Hrs = "+hrs+" Mins = "+mins);
    console.log("Daily Screen Time Minutes ="+dailyScreenTimeMinutes);
    calculateSevenDays(dailyScreenTimeMinutes);
    calculateMonth(dailyScreenTimeMinutes);
    calculateYear(dailyScreenTimeMinutes);
    calculateLifetime();
    if (age > 0)
    {
        console.log("Age submitted");
        ageSubmitted = "Y";
        calculateHowMuchLeft(age);
    }
    else
    {
        console.log("Age Not Submitted");
        ageSubmitted - "N";
    }
    
    outputResults();
    
}

function calculateHowMuchLeft(age)
{
    console.log("How Much Left");
    let yourAge = +age + 0;
    let yearsLeft = 100;
    if (yourAge < 80)
    {
        yearsLeft = 80 - age;   
    }
    else {
        yearsLeft = 10;
    }
    restOfYourLifeScreenTime = ((yearsLeft*daysPerYear) / 365).toFixed(2);
}

function calculateLifetime()
{
    console.log("CLT: Year Days "+daysPerYear);
    lifeTimeDays = parseInt(daysPerYear * lifeTime);
    console.log("CLT: Result Days "+lifeTimeDays);
    lifeTimeYears = parseInt(lifeTimeDays / 365);
    console.log("CLT: This is "+lifeTimeYears+" years on your phone");
    
    
}

function calculateYear(dailyMinutes)
{
    console.log("C365D: Calculate 365 Days (1 Year)...");
    //console.log("C365D: hrs "+hrs+" mins"+mins);
    //hrsYearCalc = +hrs*365;
    minsYearCalc = +dailyMinutes*365;
    console.log("C365D: mins "+minsYearCalc);
    let yearMinsToHours = parseInt(minsYearCalc / 60);
    let takeAwayMins = 0;
    if (yearMinsToHours < 1)
    {
        console.log("C365D: yearly mins less than 1 hour");
        minsPerYear = +minsYearCalc;
        hrsPerYear = +yearMinsToHours;
    }
    else
    {
        takeAwayMins = +yearMinsToHours * 60;
        minPerYear = +minsYearCalc - +takeAwayMins;
        hrsPerYear = +yearMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultYear "+minPerYear);
        console.log("HrsResultsYear "+hrsPerYear);
    }
    console.log("C365D: Results "+hrsPerYear+"hrs "+minPerYear+"mins");
    //let totalMinutes = (hrsYearCalc * 60)+ +minsYearCalc;
    let days = calcDays(minsYearCalc);
    //set Year Days for LifeTime calcDays
    daysPerYear = days;
    console.log("C365D: Days "+days);
    
    
}

function calculateMonth(dailyMinutes)
{
    console.log("C30D: Calculate 30 days (1 Month)... ");
   // console.log("C30D: hrs "+hrs+" mins "+mins);
   // let monthHrs = +hrs*30;
    let monthMins = +dailyMinutes*30;
    console.log("C30D: month mins "+monthMins);
    let monthMinsToHours = parseInt(monthMins / 60);
    let takeAwayMins = 0;
    if (monthMinsToHours < 1)
    {
        console.log("C30D: monthly mins less than 1 hour");
        minsPerMonth = +monthMins;
        hrsPerMonth = +monthMinsToHours;
    }
    else
    {
        takeAwayMins = monthMinsToHours * 60;
        minsPerMonth = +monthMins - +takeAwayMins;
        hrsPerMonth = +monthMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultMonth "+minsPerMonth);
        console.log("HrsResultsMonth "+hrsPerMonth);
    }
    console.log("C30D: Results "+hrsPerMonth+"hrs "+minsPerMonth+"mins");
    //let totalMins = (monthHrs*60)+ +monthMins;
    const days = calcDays(monthMins);
    console.log("C30D: Results in Day "+days);
    daysPerMonth = days;
    
    
}

function calculateSevenDays(dailyMinutes)
{ 
    console.log("Calculate Seven Days...");
    let weekmins = +dailyMinutes*7;
    console.log("C7D: weekmins "+weekmins);
    let weekMinsToHours = parseInt(weekmins / 60);
    console.log("C7D: Hours in Week Mins Ratio "+weekMinsToHours);
    let takeAwayMins = 0;
    if (weekMinsToHours < 1)
    {
        console.log("C7D: Week Mins to Hours less than 1 hour");
        minsPerWeek = +weekmins;
        hrsPerWeek = +weekMinsToHours;
    }
    else 
    {
        takeAwayMins = weekMinsToHours * 60;
        minsPerWeek = +weekmins - +takeAwayMins;
        hrsPerWeek = +weekMinsToHours;
        console.log("TakeAwayMins "+takeAwayMins);
        console.log("MinResultWeel "+minsPerWeek);
        console.log("HrsResultsWeek "+hrsPerWeek);
        
    }
   
    console.log("C7D: Result for a week: Hrs "+hrsPerWeek+" mins "+minsPerWeek);
    let totalMinutes = (hrsPerWeek*60)+minsPerWeek;
    let days = calcDays(totalMinutes);
    daysPerWeek = days;
    console.log("C7D: Total Minutes "+totalMinutes);
  
}

function calcDays(totalMinutes) 
{
    console.log("Calc Days Looking at the screen from total minutes");
    let days = (totalMinutes / 1440).toFixed(2);
    console.log("Days "+days);
    return days;
    
}

function outputResults()
{
    //output results
    const output = document.getElementById("results");
    output.innerHTML = "";
    
    const cardDay = document.createElement("div");
    if (ageSubmitted == "N")
    {
        cardDay.classList.add("resultsCard");
            cardDay.innerHTML = `
                <h3>Results</h3>
                <p>You Spend...</p>
                <p>${hrsPerWeek} hrs ${minsPerWeek} mins a week staring at a screen, or
                ${daysPerWeek} days</p>
                <p>${hrsPerMonth} hrs ${minsPerMonth} mins per month or ${daysPerMonth} days</p>
                <p>${hrsPerYear} hrs ${minPerYear} mins per year, 
                or ${daysPerYear} days</p>
                <h3>Life Time</h3>
                <p>This is ${lifeTimeDays} days across a fifty year adult lifetime</p>
                <p>This is <strong> ${lifeTimeYears} years </strong> of you life staring at your Phone Screen</p>
            `;
        output.appendChild(cardDay);
    }
    else
    {
        cardDay.classList.add("resultsCard");
            cardDay.innerHTML = `
                <h3>Results</h3>
                <p>You Spend...</p>
                <p>${hrsPerWeek} hrs ${minsPerWeek} mins a week staring at a screen, or
                ${daysPerWeek} days</p>
                <p>${hrsPerMonth} hrs ${minsPerMonth} mins per month or ${daysPerMonth} days</p>
                <p>${hrsPerYear} hrs ${minPerYear} mins per year, 
                or ${daysPerYear} days</p>
                <h3>Rest of you life...</h3>
                <p>If you continue the same it will be ${restOfYourLifeScreenTime} years of your remaining life </p>
                <p>Are you OK with that?</p>
            `;
        output.appendChild(cardDay);
    }
    
    
    
}
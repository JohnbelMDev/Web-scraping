const fetch = require('node-fetch')
//
const cors = require('cors')
app.use(cors())

const cheerio = require("cheerio");
let salaries = []

// understand the code that I'm trying to change

// let showData = document.getElementById('showData')
// using fetch to make request, so I can be able to access the data from the table
// from the table row
function calculateSalarie(){
fetch('https://questionnaire-148920.appspot.com/swe/data.html')
// extracting the text from the response body
.then(response => response.text())
.then(html =>{
  // using the cheerio library
  const $ = cheerio.load(html);
  // in order to grab the selectors below and access all of the player's salary
  // I had to go on the browser and use inspect tool to select an element
  //using each too loop to iterate over the doom
 $ ("#salaries-table > tbody > tr > td.player-salary").each((index, element) => {

   var numberPattern = '[0-9]+(?:,[0-9]{3})*(?:\.[0-9]+)?';

const salary = $(element).text().match( numberPattern )
// console.log('salary',salary);
// checking if salary if not null to print out all the numbers
   if(salary !== null){
     // console.log(salary);
    //  using s to store the first index of salary '
    //  and spliting them by comma in order to rid of the commas
    //  then I used join to join them by space

     const s = parseInt(salary[0].split(',').join(''))
     //using salaries to store all the values from s as an array
     salaries.push(s)
   }

 })

 //  using sortedArray to sort all the salaries from  highest to lowerst
 let sortedArray = salaries.sort((a,b) => b - a)
 // console.log('sorted',sortedArray.length)
  // sortedArray.splice()
  // using slice to grab the numbers starting
  // from the zero index to the last element before 125 and storing those values
  // inside top Salaries
  let topSalaries = sortedArray.slice(0,125)
  //using reduce on topSalaries to calculate the sum and storing the sum in total
  let total = topSalaries.reduce((sum,salary) => sum + salary)

  let average = total / topSalaries.length
  // printing out the average
  console.log('average',average);

});
// console.log('i');






//cite
//https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b

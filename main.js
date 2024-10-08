
// const wrapSetting = document.getElementById("wrap");
// wrapSetting.style.width = "940px";
// wrapSetting.style.height = "auto";
// wrapSetting.style.border = "5px solid black"
// wrapSetting.style.marginLeft = "auto";
// wrapSetting.style.marginRight = "auto";
// wrapSetting.style.marginTop = "-9px";
// wrapSetting.style.backgroundColor = "#F1EBE1";

//  CSS styling through DOM for wrap (body) of page
const wrapSetting = document.getElementById("wrap");
wrapSetting.style.cssText = `
  width: 940px;
  height: auto;
  border: 5px solid black;
  margin: auto auto -9px;
  background-color: #F1EBE1;
`;

console.log(wrapSetting.outerHTML);

// const headerDiv = document.querySelector("#header");
// headerDiv.className= "headerFont";
// headerDiv.style.border = "1px solid #D3D3D3";
// headerDiv.style.height = "200px";
// headerDiv.textContent = ("SBA-316");

//  CSS styling for header segment through DOM
const headerDiv = document.querySelector("#header");
headerDiv.classList.add("headerFont"); 
headerDiv.style.cssText = `
  border: 1px solid #D3D3D3;
  height: 200px;
`;
headerDiv.textContent = "SBA-316";

// Body text input through DOM / parent-child relationship used
const oldestChild = document.querySelector(".whatMustBeDone")
oldestChild.textContent=
("This assessment measures your understanding of the Document Object Model (DOM) and your capability to implement its features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given.  This assessment has a total duration of two (2) days. This is a take-home assessment. You have two total days (including weekends and holidays) to work on this assessment. This assessment will be due at 5:00pm on the second day after it is assigned. Your instructor may provide you with class time to work on the assessment, schedule permitting.");

// Attaching CSS styling to text above
oldestChild.className= "basicFont";
//const bodyOfText = document.getElementsByClassName("whatMustBeDone");

//  table included...
function tableGrade(data) {
    const table = document.createElement('table');
  
    for (let rowData of data) {
      const row = document.createElement('tr');
      for (let cellData of rowData) {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    document.getElementById('tableContainer').appendChild(table);
  }
  
  //  data input into table above...
  const tableData = [
    ['Requirement', 'Weight'],
    ['Cache at least one element using selectElementById.', '5%'],
    ['Cache at least one element using querySelector or querySelectorAll.', '5%'],
    ['Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).', '5%'],
    ['Iterate over a collection of elements to accomplish some task.', '10%'],
    ['Create at least one element using createElement.', '5%'],
    ['Use appendChild and/or prepend to add new elements to the DOM.', '5%'],
    ['Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.', '2%'],
    ['Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.', '10%'],
    ['Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.', '5%'],
    ['Modify at least one attribute of an element in response to user interaction.', '3%'],
    ['Register at least two different event listeners and create the associated event handler functions.', '10%'],
    ['Use at least two Browser Object Model (BOM) properties or methods.', '3%'],
    ['Include at least one form and/or input with HTML attribute validation.', '5%'],
    ['Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation).', '5%'],
    ['Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).', '10%'],
    ['Commit frequently to the git repository.', '5%'],
    ['Include a README file that contains a description of your application.', '2%'],
    ['Level of effort displayed in creativity, presentation, and user experience.',  '5%']
  ];
  
  console.log(tableGrade(tableData));

  //  interactive voting section...
  document.addEventListener("DOMContentLoaded", function () {
    const pollForm = document.getElementById("question");
    const yesCount = document.getElementById("yes-count");
    const noCount = document.getElementById("no-count");
    let yesVotes = 0;
    let noVotes = 0;
  
    pollForm.addEventListener("submit", function (e) {
  
        e.preventDefault();
        const formData = new FormData(pollForm);
        const userVote = formData.get("vote");
  
        if (userVote === "yes") {
            yesVotes++;
        } else if (userVote === "no") {
            noVotes++;
        }
        updateResults();
    });
  
    function updateResults() {
        yesCount.textContent = yesVotes;
        noCount.textContent = noVotes;
    }
    
  })
  const fragment = document.createElement('template');
fragment.innerHTML = 'By Aaron Santiago';

const clonedFragment = fragment.content.cloneNode(true);

const byAaronSantiagoElement = document.getElementById('ByAaronSantiago');
byAaronSantiagoElement.appendChild(clonedFragment);
//END OF LINE//
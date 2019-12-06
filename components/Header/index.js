// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // define new elements
    const newHeader = document.createElement('div'),
    dateSpan = document.createElement('span'),
    h1 = document.createElement('h1'),
    tempSpan = document.createElement('span');

    // set class names
    newHeader.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    // set up structure of elements
    newHeader.appendChild(dateSpan);
    newHeader.appendChild(h1);
    newHeader.appendChild(tempSpan);

    // set text content
    dateSpan.textContent = `SMARCH 28, 2019`;
    h1.textContent = `Lambda Times`;
    tempSpan.textContent = `98°`;

    return newHeader;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
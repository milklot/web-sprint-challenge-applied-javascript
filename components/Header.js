// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const div = document.createElement('div');
    const topSpan = document.createElement('span');
    const h1 = document.createElement('h1');
    const bottomSpan = document.createElement('span');

    div.classList.add('header');
    topSpan.classList.add('date');
    bottomSpan.classList.add('temp');

    topSpan.textContent = 'MARCH 28, 2020';
    h1.textContent = 'Lambda Times';
    bottomSpan.textContent = '98°';

    div.appendChild(topSpan);
    div.appendChild(h1);
    div.appendChild(bottomSpan);

    const parentDiv = document.querySelector('.header-container');
    parentDiv.append(div);
}

Header();
import Axios from "axios";

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

Axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(result => console.log(result))

const tabMaker = (tabName) => {
    const result = document.createElement('div');

    result.classList.add('tab');
    result.textContent = tabName;
    return result;
}

Axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(result => {
        const topics = result.data.topics;

        topics.forEach(data => {
            const finalTab = tabMaker(data);
            document.querySelector('.topics').appendChild(finalTab);
        })
    })
    .catch(fail => console.log('something went wrong: ', fail));
import Axios from "axios";

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsDiv = document.querySelector('.cards-container');

// Axios.get('https:lambda-times-api.herokuapp.com/articles')
//     .then(result => console.log(result))

Axios.get('https:lambda-times-api.herokuapp.com/articles')
    .then(result => {
        const bootstrapArr = result.data.articles.bootstrap;
        const jsArr = result.data.articles.javascript;
        const jqueryArr = result.data.articles.jquery;
        const nodeArr = result.data.articles.node;
        const technologyArr = result.data.articles.technology;

        bootstrapArr.forEach(element => {
            cardsDiv.append(cardMaker(element));
        });
        jsArr.forEach(element => {
            cardsDiv.append(cardMaker(element));
        });
        jqueryArr.forEach(element => {
            cardsDiv.append(cardMaker(element));
        });
        nodeArr.forEach(element => {
            cardsDiv.append(cardMaker(element));
        });
        technologyArr.forEach(element => {
            cardsDiv.append(cardMaker(element));
        });
    })
    .catch(error => {
        console.log("something went wrong", error);
    })


const cardMaker = (object) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const img_container = document.createElement('div');
    const img = document.createElement('img');
    const authors_name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    img_container.classList.add('img-container');

    headline.textContent = `${object.headline}`;
    img.src = `${object.authorPhoto}`;
    authors_name.textContent = `By ${object.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(img_container);
    img_container.appendChild(img);
    author.appendChild(authors_name);

    card.addEventListener('click', () => {
        console.log(headline.textContent);
    });
    return card;
}
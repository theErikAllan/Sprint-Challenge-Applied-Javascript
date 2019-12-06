// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // console.log(response.data.articles);
        const articles = Object.values(response.data.articles);
        console.log(articles);
        articles.forEach(array => {
            array.forEach(article => {
                let newCard = articleCreator(article);
                articleEntryPoint.appendChild(newCard);
            })
        })
    })


function articleCreator(article) {
    // define new elements
    const newCard = document.createElement('div'),
          headDiv = document.createElement('div'),
          authDiv = document.createElement('div'),
          imgDiv = document.createElement('div'),
          authImg = document.createElement('img'),
          authSpan = document.createElement('span');

    // set class names
    newCard.classList.add('card');
    headDiv.classList.add('headline');
    authDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    // set up structure of the elements
    newCard.appendChild(headDiv);
    newCard.appendChild(authDiv);
    authDiv.appendChild(imgDiv);
    imgDiv.appendChild(authImg);
    authDiv.appendChild(authSpan);

    // set text content
    headDiv.textContent = article.headline;
    authImg.src = article.authorPhoto;
    authSpan.textContent = `By ${article.authorName}`;

    return newCard;
}

const articleEntryPoint = document.querySelector('.cards-container');
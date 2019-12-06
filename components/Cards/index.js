// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //console.log(response);
        const articles =  Object.values( response.data.articles);
        //console.log(articles);
        articles.forEach(element => {
            element.forEach(el =>{
                articleMaker(el);
            });
        });
        //articleMaker(response);

    })

function articleMaker(article){
    
    //create Elements
    const card = document.createElement('div');
    const headline =document.createElement('div');
    const author = document.createElement('div');
    const imgContatiner = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement ('span');

    //assign Classes
    card.classList.add('card');
    headline.classList.add('headline')
    author.classList.add('author');
    imgContatiner.classList.add('img-container');

    //assign Text/Content
    headline.textContent = `${article.headline}`;
    image.src = article.authorPhoto;
    authorName.textContent =`${article.authorName}`;

    //Est Parent Child Relations
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContatiner);
    imgContatiner.appendChild(image);
    author.appendChild(authorName);

    //Return or Assign to DOM
    document.querySelector('.cards-container').appendChild(card);

    //for (var element in obj.data.articles)
    
    // obj.data.articles.forEach(element => {
    //     console.log(element);
    // });;
}

import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
    //Creating Elements Here
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

    //Classes Applied Here
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //AppendChild Here
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(img);

  //TextContent Here
  authorName.textContent = article.authorName;
  img.setAttribute('src', article.authorPhoto);

  //EventListener Here
  card.addEventListener('click', () => {
    console.log(headline.textContent);
  })

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios
    .get(`https://lambda-times-api.herokuapp.com/topics`)
    .then((response) => {
      response.data.topics.forEach(topic => {
        axios
          .get(`https://lambda-times-api.herokuapp.com/articles`)
          .then(response => {
            let target = document.querySelector(selector);

            if(topic === 'node.js') {
              topic = 'node'
            }
            let cardData = (response.data.articles[topic])

            for(let i = 0; i < cardData.length; i++) {
              target.append(Card(cardData[i]));
            }
          })
      })
    })
}

export { Card, cardAppender }

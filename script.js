const container = document.querySelector('.container');

// fetch news articles from an API
fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    // loop through articles and create HTML elements
    data.articles.forEach(article => {
      // create HTML element for each article
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
      
      // display article information in the element
      articleElement.innerHTML = `
        <img src="${article.urlToImage}">
        <div>
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read More</a>
        </div>
      `;
      
      // add article element to container element
      container.appendChild(articleElement);
    });
  })
  .catch(error => console.error(error));


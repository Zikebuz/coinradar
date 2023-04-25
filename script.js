
async function getNews() {
  const apiKey = 'cd60e3bd52ef41bd862bb1584fb8e170';
  const apiUrl = `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const articles = data.articles.slice(0, 7); // Get the first 10 articles
    const newsContainer = document.getElementById('news');

    // Loop through the first 10 articles and create HTML elements to display them
    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      const title = article.title;
      const url = article.url;

      // Create HTML elements to display the article
      const articleTitle = document.createElement('a');
      articleTitle.href = url;
      articleTitle.textContent = title;
      articleTitle.target = '_blank';

      // Add the article to the news container
      newsContainer.appendChild(articleTitle);

    }
  } catch (error) {
    console.error(error);
  }
}

// Call the getNews() function when the page loads
window.onload = getNews;



const inputElement = document.getElementById("amount");
inputElement.addEventListener("focus", function () {
  inputElement.style.outlineColor = "#8a2be2";
});


const currencyPairSelector = document.getElementById("currencyPair");
currencyPairSelector.addEventListener("focus", function () {
  currencyPairSelector.style.outlineColor = "#8a2be2";
});



function convertPrice() {
  const amount = document.getElementById('amount').value;
  const currencyPair = document.getElementById('currencyPair').value;
  const url = `https://min-api.cryptocompare.com/data/price?fsym=${currencyPair.split('/')[0]}&tsyms=${currencyPair.split('/')[1]}&api_key=${'CRYPTOCOMPARE_API_KEY'}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = document.getElementById('result');
      result.innerHTML = `${amount} ${currencyPair.split('/')[0]} = ${(amount * data[currencyPair.split('/')[1]]).toFixed(2)} ${currencyPair.split('/')[1]}`;
    })
    .catch(error => console.error(error));
}

document.getElementById('convert').addEventListener('click', convertPrice);











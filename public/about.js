function showPicture() {
    const random = Math.floor(Math.random() * 10);
    fetch(`https://api.unsplash.com/search/photos?query=nature`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');
  
        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
  
        const imgUrl = data.results[random].urls.regular;
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', imgUrl);
        imgEl.setAttribute('width', width);
        imgEl.setAttribute('height', height);
        containerEl.appendChild(imgEl);
      });
  }
  
  function showQuote(data) {
    fetch('https://api.quotable.io/quotes?tags=health|happiness')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }
  
  showPicture();
  showQuote();
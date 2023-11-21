// Function to fetch a random quote from the API
function getQuote() {
    fetch('https://quotes.rest/qod')
        .then(response => response.json())
        .then(data => {
            const quoteContainer = document.getElementById('quote-container');
            const quoteText = document.getElementById('quote-text');
            const quoteAuthor = document.getElementById('quote-author');
            
            const quote = data.contents.quotes[0];
            quoteText.textContent = `"${quote.quote}"`;
            quoteAuthor.textContent = `- ${quote.author}`;

            quoteContainer.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}

// Add a click event listener to the "Get a Quote" button
const getQuoteButton = document.getElementById('get-quote-button');
getQuoteButton.addEventListener('click', getQuote);

// Initial call to get a random quote when the page loads
getQuote();

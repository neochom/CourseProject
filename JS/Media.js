let currentIndex = 0;
const quotes = document.querySelectorAll('.Media-articles-quote-text');
const totalQuotes = quotes.length;

function showQuote(index) {
    quotes.forEach((quote, i) => {
        quote.classList.remove('active');
        if (i === index) {
            quote.classList.add('active');
        }
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalQuotes;
    showQuote(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalQuotes) % totalQuotes;
    showQuote(currentIndex);
});

showQuote(currentIndex);
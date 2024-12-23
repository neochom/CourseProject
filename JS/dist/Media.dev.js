"use strict";

var currentIndex = 0;
var quotes = document.querySelectorAll('.Media-articles-quote-text');
var totalQuotes = quotes.length;

function showQuote(index) {
  quotes.forEach(function (quote, i) {
    quote.classList.remove('active');

    if (i === index) {
      quote.classList.add('active');
    }
  });
}

document.getElementById('nextBtn').addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % totalQuotes;
  showQuote(currentIndex);
});
document.getElementById('prevBtn').addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + totalQuotes) % totalQuotes;
  showQuote(currentIndex);
});
showQuote(currentIndex);
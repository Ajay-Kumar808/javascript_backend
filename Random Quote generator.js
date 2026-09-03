const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only way to do great work is to love what you to. - Steve jobs",
    "Don't watch the clok; do what it does. keep going. - Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. - Confucius",
    "Opportunities don't happen, you create them. - Chris Grosser",
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
const index = Math.floor(Math.random()*5);
quote.innerHTML = quotes[index];   /* ineerHtml ke jagh per textContent bhi ho sakta hai */
})
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const copyBtn = document.getElementById("copy");
const newQuoteBtn = document.getElementById("new-quote");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote(api_url);

copyBtn.addEventListener("click", function () {
    // Combine the quote and author's name
    const textToCopy = `${quote.innerText} - ${author.innerText}`;
    copyTextToClipboard(textToCopy);
  });

  newQuoteBtn.addEventListener("click", function () {
    getQuote(api_url);
  });

  function copyTextToClipboard(text) {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Quote copied to clipboard!");
  }
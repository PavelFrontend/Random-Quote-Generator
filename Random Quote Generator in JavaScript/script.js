const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuote = document.querySelector("button");
const volume = document.querySelector(".volume");
const copy = document.querySelector(".copy");
const twitter = document.querySelector(".twitter");

newQuote.addEventListener("click", () => {
	newQuote.innerText = "Loading...";
	fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
		quote.innerText = result.content;
		author.innerText = result.author || "No Author";
		newQuote.innerText = "New Quote";
	});
});

volume.addEventListener("click", () => {
	speechSynthesis.speak(new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`));
});

copy.addEventListener("click", () => {
	navigator.clipboard.writeText(quote.innerText);
});

twitter.addEventListener("click", () => {
	window.open(`https://twitter.com/intent/tweet?url=${quote.innerText} by ${author.innerText}`, "_blank");
});



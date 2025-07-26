function diacritic_answer1 (){
  setTimeout(() => {
    document.getElementById('diacritic_q1').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

function diacritic_answer2 () {
  setTimeout(() => {
    document.getElementById('diacritic_q2').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

let scrollProgress = document.getElementById('scroll_progress');

function getScrollProgress() {
  let pageHeight = document.body.scrollHeight - window.innerHeight;
  let percentProgress = (window.scrollY / pageHeight) * 100;
  scrollProgress.style.width = percentProgress + '%';
}

window.onscroll = getScrollProgress;

let dictionary = [];
let searchBox = document.getElementById('search_box');
let searchResults = document.getElementById('search_results');

fetch('/dictionary.json')
  .then(res => res.json())
  .then(data => dictionary = data);

function searchDictionary() {
  const query = searchBox.value.trim().toLowerCase();
  const results = dictionary.filter(entry => entry.pashto.includes(query) || entry.ipa.includes(query) || entry.english.toLowerCase().includes(query));

  if (results.length > 0) searchResults.innerHTML = results.map(result => `<p><span class="text-pashto">${result.pashto}</span> ${result.type} - ${result.ipa} - ${result.english}</p>`).join("");
  else searchResults.innerHTML = "<p>No results found</p>";
}
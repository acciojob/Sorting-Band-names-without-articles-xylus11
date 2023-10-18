//your code here
// Array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Led Zeppelin', 'Queen'];

// Custom sorting function to sort names without articles
function customSort(a, b) {
  const articles = ['the', 'a', 'an'];
  const getNameWithoutArticle = (name) => {
    const words = name.split(' ');
    return words.filter(word => !articles.includes(word.toLowerCase())).join(' ');
  }

  const nameA = getNameWithoutArticle(a);
  const nameB = getNameWithoutArticle(b);

  return nameA.localeCompare(nameB);
}

// Sort the band names using the custom sorting function
bandNames.sort(customSort);

// Get the ul element
const ulElement = document.getElementById('band');

// Append the sorted band names to the ul element using li tags
bandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});


function searchCharacter() {
  const characterName = document.getElementById('characterInput').value;
  const apiUrl = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Not found');
          }
          return response.json();
      })
      .then(data => {
          if (data.results.length > 0) {
              displayCharacterInfo(data.results[0]);
          } else {
              alert('Character not found');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Error fetching character. Please try again.');
      });
}

function displayCharacterInfo(character) {
  const characterInfoContainer = document.getElementById('characterInfo');

  const characterName = character.name;
  const characterImage = character.image;

  const characterInfoHTML = `
<h2>${characterName}</h2>
<img src="${characterImage}" alt="${characterName}">`;

  characterInfoContainer.innerHTML = characterInfoHTML;
}

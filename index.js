let joke;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  fetchJoke()

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const jokeList = document.getElementById('joke-list')
    const username = document.getElementById('name-input').value
    if (username === "") return;

    const newJokeLi = document.createElement('li')
    fetchJoke()
    newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${joke}`
    jokeList.appendChild(newJokeLi)
  })
})

function fetchJoke() {
  return fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
}


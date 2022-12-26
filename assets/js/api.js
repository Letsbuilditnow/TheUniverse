//Example fetch using pokemonapi.co
document.querySelector('#input').addEventListener('click', getFetch)

function getFetch(event){
    event.preventDefault();

  const choice = document.querySelector('#choice').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=XW877BDgoSCa4jkAuvS2yA1ao3VbEnTwHLHz4Qb4&date=${choice}`
// https://api.nasa.gov/planetary/apod&date

  console.log("hi") 
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
       media_type="image"?document.getElementById("image").src=data.url:document.getElementById("video").src=data.url
       
       document.getElementById("description").innerText=data.explanation;

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//Example fetch using pokemonapi.co
document.querySelector('#input').addEventListener('click', getFetch)

function getFetch(event){
    event.preventDefault();
//   const choice = document.querySelector('input').value
  const url = 'https://api.nasa.gov/planetary/apod?api_key=XW877BDgoSCa4jkAuvS2yA1ao3VbEnTwHLHz4Qb4'
  

  console.log("hi") 
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
            
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
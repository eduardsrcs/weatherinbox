const cities = {
  Riga: 'Rīga'
}

window.onload = () => {
  getData()

  setInterval(() => getData(), 60000)
}

var getData = () => fetch('inbox.php')
    .then(res => res.json())
    .then(data => render(data))
    .catch(err => console.log(err))
  

var render = (data) => {
  console.log(';)')
  document.querySelector('#city').innerHTML = cities[data.geoip.city]
  document.querySelector('#temp').innerHTML = `${data.weather.currTemp} &#8451;`
  document.querySelector('#otherweather').innerHTML = `${data.weather.icoSymbol}, wind: ${data.weather.windDir}, ${data.weather.windSpeed} m/s`
}
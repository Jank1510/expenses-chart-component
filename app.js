var mon = document.getElementById("mon")
mon.style.height = '100px'

fetch('./data.json')
    .then(response => response.json())
    .then(json => {
        jsonAdvice = json
        console.log(jsonAdvice)
    })
document.getElementById('searchButton').addEventListener('click', () => {
    const countryName = document.getElementById('countryInput').value
    fetchCountryData(countryName)
    //console.log(countryName)

})

async function fetchCountryData(countryName) {
    const messageElement = document.getElementById('message')
    try{
        const response = await fetch(`search?country=${countryName}`)
        const data = await response.json()
    
    if(data.lenght === 1){
        displayCountryInfo(data[0], resultsElement)

    } else{
        displayCountryInfo(data, resultsElement)
    }

    } catch(error) {
        console.log(error)
        messageElement.textContent = "No result found, please check your spelling"

    }
}

function displayCountryInfo(countryData, container){
    
}
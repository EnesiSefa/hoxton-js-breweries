// Write your code here
type State = {
    breweries: Brewerie[]
}
type Brewerie ={
    id: string
    name: string,
    brewery_type: string,
    street: null,
    address_2: null,
    address_3: null,
    city: string,
    state: string,
    county_province: null,
    postal_code: number,
    country: string,
    longitude: null,
    latitude: null,
    phone: number,
    website_url: null,
    updated_at: string,
    created_at: string,

}


let state = {
    breweries: []
  }


  
function render(){
    let mailEl = document.querySelector("main")
    if(mailEl === null) return
    mailEl.textContent = ''
   
    renderHeader ()

    

}
render()


function renderHeader () {
    
    
    let h1El = document.createElement("h1")
    h1El.textContent = "List of Breweries"
    
    let headerEl= document.createElement("header")
    headerEl.className="search-bar"
    
    let formEl = document.createElement("form")
    formEl.id = "search-breweries-form" 
    formEl.autocomplete = "off"
    
    let labelEl = document.createElement("label")
    labelEl.htmlFor = "search-breweries"
    let h2EL = document.createElement("h2")
    h2EL.textContent = "Search breweries:"

    let inputEl = document.createElement("input")
    inputEl.id = "search-breweries"
    inputEl.name = "search-breweries"
    inputEl.type= "text"

    let mainEl = document.querySelector("main")
    
    
    labelEl.appendChild(h2EL)
    formEl.append(labelEl,inputEl)
    headerEl.appendChild(formEl)
    mainEl.appendChild(headerEl)
    

  }

  function breweriesList(){
    let articleEl = document.createElement("article")
    
    let ulEl = document.createElement("ul")
    ulEl.className = "breweries-list"

    for(let brewerie of state.breweries){
    let liEl = document.createElement("li")
    let h2EL = document.createElement("h2")
    h2EL.textContent = "Snow Belt Brew"

    let divEl = document.createElement("div")
    divEl.className = "type"
    divEl.textContent = "micro"

    let addressSectionEl = document.createElement("section")
    addressSectionEl.className = "address"
    let addressH3El = document.createElement("h3")
    addressH3El.textContent = "Phone:"
    let addressPEl = document.createElement("p")
    addressPEl.textContent = "9511 Kile Rd"
    let addressPEL2 = document.createElement("p")
    addressPEL2.textContent=  "Chardon, 44024"

    let phoneSectionEl = document.createElement("section")
    phoneSectionEl.className= "phone"
    let phoneH3El = document.createElement("h3")
    phoneH3El.textContent = "Phone:"
    let phonePEl = document.createElement("p")
    phonePEl.textContent = "N/A"

    let linkSectionEl = document.createElement("section")
    let aEl = document.createElement("a")
    aEl.href = "null"
    aEl.target = "_blank"
    aEl.textContent ="Visit Website"

    linkSectionEl.append(aEl)
    phoneSectionEl.append(phoneH3El,phonePEl)
    addressSectionEl.append(addressH3El,addressPEl,addressPEL2)
    liEl.append(h2EL,divEl,addressSectionEl,phoneSectionEl,linkSectionEl)
    ulEl.append(liEl)
  }
    articleEl.append(ulEl)



  }

  function getInfoFromServer(){
    fetch("https://api.openbrewerydb.org/breweries?per_page=3")
   .then(response => response.json())
   .then(data => state.breweries = data)
   render()
  }
  
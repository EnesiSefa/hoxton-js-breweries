// Write your code here
type State = {
    breweries: brewerie[]
}
type brewerie ={
    address_2: null,
    address_3: null,
    brewery_type: string,
    city: string,
    country: string,
    county_province: null,
    created_at: string,
    id: number,
    latitude: string,
    longitude: string,
    name: string,
    obdb_id: string,
    phone: string,
    postal_code: string,
    state: string,
    street: string,
    updated_at: string,
    website_url: string
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

    let liEl = document.createElement("li")
    let h2EL = document.createElement("h2")
    h2EL.textContent = "Snow Belt Brew"

    let divEl = document.createElement("div")
    divEl.className = "type"
    divEl.textContent = "micro"

    let sectionEl = document.createElement("section")
    sectionEl.className = "address"
    let h3El = document.createElement("h3")
    h3El.textContent = "Phone:"
    let pEl = document.createElement("p")
    pEl.textContent = "9511 Kile Rd"
    let pEl2 = document.createElement("p")
    pEl2.textContent=  "Chardon, 44024"

    let sectionEl2 = document.createElement



  }

  function get
  
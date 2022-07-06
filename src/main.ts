// Write your code here
type State = {
  USState: "";
  breweries: Brewery[];
  nameFilter: "";
  typeFilter : "",
  
};
type Brewery = {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: null;
  address_3: null;
  city: string;
  state: string;
  county_province: null;
  postal_code: number;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
};

let state: State = {
  USState: "",
  breweries: [],
  nameFilter: "",
};

function render() {
  console.log(state);
  let mailEl = document.querySelector("main");
  if (mailEl === null) return;
  mailEl.textContent = "";

  renderHeader();
  breweriesList(state);
  listenToSelectStateForm();
  filterSection()
}
render();

function renderHeader() {
  let h1El = document.createElement("h1");
  h1El.textContent = "List of Breweries";

  let headerEl = document.createElement("header");
  headerEl.className = "search-bar";

  let formEl = document.createElement("form");
  formEl.id = "search-breweries-form";
  formEl.autocomplete = "off";
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    let breweriesInput = formEl["search-breweries"].value;
    state.nameFilter = breweriesInput;
    render();
  });

  let labelEl = document.createElement("label");
  labelEl.htmlFor = "search-breweries";
  let h2EL = document.createElement("h2");
  h2EL.textContent = "Search breweries:";

  let inputEl = document.createElement("input");
  inputEl.id = "search-breweries";
  inputEl.name = "search-breweries";
  inputEl.type = "text";

  let mainEl = document.querySelector("main");
  if (mainEl === null) return;

  labelEl.appendChild(h2EL);
  formEl.append(labelEl, inputEl);
  headerEl.appendChild(formEl);
  mainEl.appendChild(headerEl);
}

function breweriesList() {
  let mainEl = document.querySelector("main");
  let articleEl = document.createElement("article");

  let ulEl = document.createElement("ul");
  ulEl.className = "breweries-list";

  for (let brewery of getFilteredBreweriesName()) {
    let ulEl = document.createElement("ul");
    ulEl.className = "breweries-list";
    let liEl = document.createElement("li");
    let h2EL = document.createElement("h2");
    h2EL.textContent = brewery.name;

    let divEl = document.createElement("div");
    divEl.className = "type";
    divEl.textContent = "micro";

    let addressSectionEl = document.createElement("section");
    addressSectionEl.className = "address";
    let addressH3El = document.createElement("h3");
    addressH3El.textContent = "Address:";
    let addressPEl = document.createElement("p");
    addressPEl.textContent = brewery.street;
    let addressPEL2 = document.createElement("p");
    let strongEl = document.createElement("strong");
    strongEl.textContent = `${brewery.city}, ${brewery.postal_code}`;

    let phoneSectionEl = document.createElement("section");
    phoneSectionEl.className = "phone";
    let phoneH3El = document.createElement("h3");
    phoneH3El.textContent = "Phone:";
    let phonePEl = document.createElement("p");
    phonePEl.textContent = brewery.phone ? brewery.phone : "N/A";

    let linkSectionEl = document.createElement("section");
    linkSectionEl.className = "link"
    let aEl = document.createElement("a");
    aEl.href = brewery.website_url;
    aEl.target = "_blank";
    aEl.textContent = "Visit Website";

    linkSectionEl.append(aEl);
    phoneSectionEl.append(phoneH3El, phonePEl);
    addressPEL2.appendChild(strongEl);
    addressSectionEl.append(addressH3El, addressPEl, addressPEL2);
    liEl.append(h2EL, divEl, addressSectionEl, phoneSectionEl, linkSectionEl);
    ulEl.append(liEl);
    articleEl.append(ulEl);
    mainEl?.append(articleEl);
  }
}

function listenToSelectStateForm() {
  let formEl = document.querySelector<HTMLFormElement>("#select-state-form");
  formEl?.addEventListener("submit", function (event) {
    event.preventDefault();
    let USState = formEl["select-state"].value;
    state.USState = USState;
    getBreweriesForState();
  });
}
listenToSelectStateForm();

function getBreweriesForState() {
  // find breweries in this state
  fetch(`https://api.openbrewerydb.org/breweries?by_state=${state.USState}`)
    .then((r) => r.json())
    .then((parsedData) => {
      state.breweries = parsedData;
      render();
    });
  // put them in state
  // rerender
}

function getFilteredBreweriesName() {
  let searchedBreweries = state.breweries.filter((brewery) =>
    brewery.name.toUpperCase().includes(state.nameFilter.toUpperCase())
  );

  return searchedBreweries;
}


function filterSection(){
  let mainEl = document.querySelector("main")

  let asideEl = document.createElement("aside")
  asideEl.className = "filters-section"

  let h2EL = document.createElement("")
  h2EL.textContent = "Filter By:"

  let formEl = document.createElement("form")
  formEl.id ="filter-by-type-form"
  formEl.autocomplete = "off"
  let labelEl = document.createElement("label")
  labelEl.htmlFor = "filter-by-type"

  let h3El = document.createElement("h3")
  h3El.textContent ="Type of Brewery"
  let selectEl = document.createElement("select")
  selectEl.name = "filter-by-type"
  selectEl.id = "filter-by-type"
  let optionSelectType = document.createElement("option")
  optionSelectType.value = ""
  optionSelectType.textContent = "Select a type..."
  let optionMicro = document.createElement("option")
  optionMicro.value = "micro"
  optionMicro.textContent = "micro"
  let optionRegional = document.createElement("option")
  optionRegional.value = "regional"
  optionRegional.textContent = "Micro"
  let optionBrewpub = document.createElement("option")
  optionBrewpub.value = "brewpub"
  optionBrewpub.textContent = "Brewpub"

  selectEl.append(optionSelectType,optionMicro,optionRegional,optionBrewpub)
  labelEl.appendChild(h3El)
  formEl.append(labelEl,selectEl)
  asideEl.append(h2EL,formEl)
  mainEl.append(asideEl)
  
}


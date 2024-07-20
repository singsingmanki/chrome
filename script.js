const dropButton = document.getElementById("dropdown-button");
const dropMenu = document.getElementById("dropdown");
const dropButtonCat = document.getElementById("dropdown-button-cat");
const dropMenuCat = document.getElementById("dropdown-cat");
const catUl = document.getElementById("catUl");
// const dropButtonCountry = document.getElementById("dropdown-button-country");
// const dropMenuCountry = document.getElementById("dropdown-country");

// Form
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(form.action, {
    method: "GET",
    body: new FormData(form),
  });
});

// Main Select
const searchKeywords = document.getElementById("keywords");
const searchCategories = document.getElementById("categories");
const topStories = document.getElementById("top-stories");

// Category
// const searchMedia = document.getElementById("media");
const searchBusiness = document.getElementById("business");
// const searchEntertain = document.getElementById("entertainment");
// const searchGeneral = document.getElementById("general");
const searchHealth = document.getElementById("health");
const searchScience = document.getElementById("science");
const searchSports = document.getElementById("sports");
const searchTech = document.getElementById("technology");

const searchPotlitics = document.getElementById("politics");
const searchFashion = document.getElementById("fashion");
const searchFood = document.getElementById("food");
const searchUS = document.getElementById("us");
const searchWorld = document.getElementById("world");

// Country
// const searchLocal = document.getElementById("local");
// const searchInter = document.getElementById("international");
// const searchUS = document.getElementById("us");

// Search Bar
const inputField = document.getElementById("search-dropdown");
const selectFieldCat = document.getElementById("dropdown-button-cat");
// const selectFieldCountry = document.getElementById("dropdown-button-country");


// Event listener for clicking on the category dropdown button
dropMenu.style.display = "none";
dropMenuCat.style.display = "none";

dropButtonCat.addEventListener("click", function () {
  if (dropMenuCat.style.display === "block") {
    dropMenuCat.style.display = "none";
  } else {
    dropMenuCat.style.display = "block";
  }
});

// Event listener for clicking anywhere else on the page
document.addEventListener("click", function (event) {
  // Check if the click event target is outside the category dropdown menu
  if (
    !dropButtonCat.contains(event.target) &&
    !dropMenuCat.contains(event.target)
  ) {
    dropMenuCat.style.display = "none";
  }
});

const selectSearch = (searchItem, btn, menu) => {
  // Event listener for clicking on the dropdown button
  btn.addEventListener("click", function () {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });

  // Event listener for clicking anywhere else on the page
  document.addEventListener("click", function (event) {
    // Check if the click event target is outside the dropdown menu
    if (!btn.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  });

  searchItem.addEventListener("click", function () {
    btn.innerText = searchItem.innerText;
    menu.style.display = "none";
    // Create a new SVG element
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

    // Set the SVG element's attributes
    svgElement.setAttribute("class", "w-2.5 h-2.5 ms-2.5");
    svgElement.setAttribute("aria-hidden", "true");
    svgElement.setAttribute("viewBox", "0 0 10 6");
    svgElement.setAttribute("fill", "none");

    // Create the path element
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("stroke", "currentColor");
    pathElement.setAttribute("stroke-linecap", "round");
    pathElement.setAttribute("stroke-linejoin", "round");
    pathElement.setAttribute("stroke-width", "2");
    pathElement.setAttribute("d", "m1 1 4 4 4-4");

    // Append the path element to the SVG element
    svgElement.appendChild(pathElement);
    btn.appendChild(svgElement);
    // console.log(dropButton);

    // Change search bar
    switch (btn.innerText) {
      case "Top Stories":
        inputField.style.display = "flex";
        selectFieldCat.style.display = "none";
        // selectFieldCountry.style.display = "none";
        if (submitBtn.classList.contains("hidden")) {
          inputField.classList.add("w-[349.4167.px]");
          submitBtn.classList.remove("hidden");
        }
        break;
      case "Keywords":
        inputField.style.display = "flex";
        selectFieldCat.style.display = "none";
        // selectFieldCountry.style.display = "none";
        if (submitBtn.classList.contains("hidden")) {
          inputField.classList.add("w-[349.4167.px]");
          submitBtn.classList.remove("hidden");
        }
        break;
      case "Categories":
        inputField.style.display = "none";
        selectFieldCat.style.display = "flex";
        submitBtn.classList.add("hidden");
        selectFieldCat.classList.add("w-[386.75px]", "rounded-r-lg");
        // selectFieldCountry.style.display = "none";
        break;
    }
  });
};

// Main Select
selectSearch(topStories, dropButton, dropMenu);
selectSearch(searchKeywords, dropButton, dropMenu);
selectSearch(searchCategories, dropButton, dropMenu);
// selectSearch(searchCountries, dropButton, dropMenu);
// selectSearch(searchMedia, dropButton, dropMenu);

// Category Select
selectSearch(searchBusiness, dropButtonCat, dropMenuCat);
// selectSearch(searchEntertain, dropButtonCat, dropMenuCat);
// selectSearch(searchGeneral, dropButtonCat, dropMenuCat);
selectSearch(searchHealth, dropButtonCat, dropMenuCat);
selectSearch(searchScience, dropButtonCat, dropMenuCat);
selectSearch(searchSports, dropButtonCat, dropMenuCat);
selectSearch(searchTech, dropButtonCat, dropMenuCat);
selectSearch(searchPotlitics, dropButtonCat, dropMenuCat);
selectSearch(searchFashion, dropButtonCat, dropMenuCat);
selectSearch(searchFood, dropButtonCat, dropMenuCat);
selectSearch(searchUS, dropButtonCat, dropMenuCat);
selectSearch(searchWorld, dropButtonCat, dropMenuCat);

// // Country Select
// selectSearch(searchLocal, dropButtonCountry, dropMenuCountry);
// selectSearch(searchInter, dropButtonCountry, dropMenuCountry);
// selectSearch(searchUS, dropButtonCountry, dropMenuCountry);

// create news card
function createNewsCard(url, imgSrc, newsTitle, description, date) {
  // Create the main <a> element
  const newsCard = document.createElement("a");
  newsCard.href = url;
  newsCard.target = "_blank";
  // if currently light mode
  if (lightModeBtn.classList.contains("hidden")) {
    newsCard.className =
      "transition ease-in duration-300 flex flex-row items-center mx-auto m-10 bg-white border border-gray-200 rounded-lg shadow max-w-lg hover:bg-blue-100";
  } else {
    newsCard.className =
      "transition ease-in duration-300 flex flex-row items-center mx-auto m-10 bg-gray-700 border border-gray-700 rounded-lg shadow max-w-lg hover:bg-gray-600";
  }

  // Create the <img> element
  const img = document.createElement("img");
  img.className =
    "object-cover w-48 rounded-t-lg h-36 rounded-none rounded-s-lg";
  img.src = imgSrc;
  img.alt = "";

  // Create the content <div>
  const content = document.createElement("div");
  content.className =
    "h-[156px] w-[318px] flex flex-col justify-between pt-4 pl-4 pr-4 pb-1 leading-normal";

  // Create the news title <h5>
  const title = document.createElement("h5");
  // if currently light mode
  if (lightModeBtn.classList.contains("hidden")) {
    title.className =
      "transition-colors ease-in duration-300 overflow-hidden h-[50%] mb-1 text-lg font-bold tracking-tight text-gray-900";
  } else {
    title.className =
      "transition-colors ease-in duration-300 overflow-hidden h-[50%] mb-1 text-lg font-bold tracking-tight text-gray-200";
  }
  title.id = "newsTitle";
  title.textContent = newsTitle;

  // Create the description <p>
  const desc = document.createElement("p");
  if (lightModeBtn.classList.contains("hidden")) {
    desc.className =
      "transition-colors ease-in duration-300 overflow-hidden h-[50%] font-normal text-gray-700";
  } else {
    desc.className =
      "transition-colors ease-in duration-300 overflow-hidden h-[50%] font-normal text-gray-400";
  }

  desc.textContent = description;

  // Create the date <span>
  const newsDate = document.createElement("span");
  if (lightModeBtn.classList.contains("hidden")) {
    newsDate.className =
      "transition-colors ease-in duration-300 text-right font-mono text-gray-400";
  } else {
    newsDate.className =
      "transition-colors ease-in duration-300 text-right font-mono text-gray-500";
  }
  newsDate.textContent = date;

  // Append the elements
  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(newsDate);
  newsCard.appendChild(img);
  newsCard.appendChild(content);

  // console.log(newsCard);
  document.getElementById("newsItems").appendChild(newsCard);
}

const loading = () => {
  const loadingImg = document.createElement("img");
  loadingImg.className = "object-cover w-48 mx-auto m-20";
  loadingImg.src =
    "https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif";
  loadingImg.alt = "";
  document.getElementById("newsItems").appendChild(loadingImg);
};

const main = async (api, keyword, category) => {
  // Show the loading image
  loading();

  if (keyword !== "") {
    const res = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${api}`
      // `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&fq=news_desk:("${category}")&sort=newest&api-key=${api}`
    );
    const data = await res.json();
    console.log(data.response.docs);
    // Remove the loading image after a 2-second delay
    setTimeout(() => {
      document.getElementById("newsItems").innerHTML = "";

      for (let i = 0; i < 11; i++) {
        try {
          createNewsCard(
            data.response.docs[i].web_url,
            `https://static01.nyt.com/${data.response.docs[i].multimedia[0].url}`,
            data.response.docs[i].headline.main,
            data.response.docs[i].abstract,
            data.response.docs[i].pub_date.substring(0, 10)
          );
        } catch (error) {
          createNewsCard(
            data.response.docs[i].web_url,
            "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg",
            data.response.docs[i].headline.main,
            data.response.docs[i].abstract,
            data.response.docs[i].pub_date.substring(0, 10)
          );
        }
      }
    }, 600);
  } else {
    const res = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${api}`
    );
    const data = await res.json();
    console.log(data.results);
    // Remove the loading image after a 2-second delay
    setTimeout(() => {
      document.getElementById("newsItems").innerHTML = "";

      for (let i = 2; i < 13; i++) {
        try {
          createNewsCard(
            data.results[i].url,
            data.results[i].multimedia[0].url,
            data.results[i].title,
            data.results[i].abstract,
            data.results[i].published_date.substring(0, 10)
          );
        } catch (error) {
          createNewsCard(
            data.results[i].url,
            "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg",
            data.results[i].title,
            data.results[i].abstract,
            data.results[i].published_date.substring(0, 10)
          );
        }
      }
    }, 600);
  }
};

const submitBtn = document.getElementById("submitBtn");

inputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && !!inputField.value) {
    // Get the entered keyword
    const keyword = inputField.value;

    // Perform the search operation using the keyword
    event.preventDefault();
    submitBtn.click();
  }
});

// For event listener
const catArray = [];

// Get all the buttons within the unordered list
const buttons = catUl.getElementsByTagName("button");

// Iterate through the buttons and store their innerText values in the array
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    document.getElementById("newsItems").innerHTML = "";
    let selectedCategory = buttons[i].innerText.trim();
    if (selectedCategory !== "Select a category") {
      let inputKeyword = "";
      main("ZipOLjfXVQ8pmFXgq6kSD6LYFrLnWm9M", inputKeyword, selectedCategory);
    }
  });
}

submitBtn.addEventListener("click", function () {
  let inputKeyword = document.getElementById("search-dropdown").value;
  console.log(inputKeyword);
  console.log(dropButtonCat.innerText);
  if (!!inputKeyword) {
    document.getElementById("newsItems").innerHTML = "";
    main("ZipOLjfXVQ8pmFXgq6kSD6LYFrLnWm9M", inputKeyword);
  }
  // main("ZipOLjfXVQ8pmFXgq6kSD6LYFrLnWm9M", "tennis", "Sports");
});

// main page
const mainPage = async (api, category) => {
  // Show the loading image
  loading();

  const mainRes = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${api}`
  );
  const mainData = await mainRes.json();

  // Remove the loading image after a 0.6-second delay
  setTimeout(() => {
    document.getElementById("newsItems").innerHTML = "";

    for (let i = 0; i < 11; i++) {
      try {
        createNewsCard(
          mainData.results[i].url,
          mainData.results[i].multimedia[0].url,
          mainData.results[i].title,
          mainData.results[i].abstract,
          mainData.results[i].published_date.substring(0, 10)
        );
      } catch (error) {
        createNewsCard(
          mainData.results[i].url,
          "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg",
          mainData.results[i].title,
          mainData.results[i].abstract,
          mainData.results[i].published_date.substring(0, 10)
        );
      }
    }
  }, 600);
};

// Show top stories on the front page
mainPage("oJzK6CGrVq8vSyYgA3PBFHNkCsfsEILJ", "home");

// Event Listener for returning to Top Stories
topStories.addEventListener("click", function () {
  document.getElementById("newsItems").innerHTML = "";
  // Call the mainPage function to fetch and display the top stories
  mainPage("oJzK6CGrVq8vSyYgA3PBFHNkCsfsEILJ", "home");
});

// Toggle Dark / Light mode
const backdropToggle = document.getElementById("backdropBackground"); //"min-h-[600px] backdrop-brightness-120 dark:backdrop-brightness-50 overflow-auto"
const searchLabelToggle = document.getElementById("searchLabel"); //"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
const dropdownBtnToggle = document.getElementById("dropdown-button");
const dropdownToggle = document.getElementById("dropdown");
const ulToggle = document.getElementById("selectUl"); // "py-2 text-sm text-gray-700 dark:text-gray-200"
const topToggle = document.getElementById("top-stories");
const keywordToggle = document.getElementById("keywords");
const catToggle = document.getElementById("categories");
const searchDropDownToggle = document.getElementById("search-dropdown");
const catDropDownBtnToggle = document.getElementById("dropdown-button-cat");
const catDropDownToggle = document.getElementById("dropdown-cat");
const catUlToggle = document.getElementById("catUl");
const businessToggle = document.getElementById("business");
const politicsToggle = document.getElementById("politics");
const sportsToggle = document.getElementById("sports");
const scienceToggle = document.getElementById("science");
const technologyToggle = document.getElementById("technology");
const fashionToggle = document.getElementById("fashion");
const foodToggle = document.getElementById("food");
const healthToggle = document.getElementById("health");
const usToggle = document.getElementById("us");
const worldToggle = document.getElementById("world");
const submitBtnToggle = document.getElementById("submitBtn");

let darkModeBtn = document.getElementById("darkModeBtn");
let lightModeBtn = document.getElementById("lightModeBtn");

// dark mode
darkModeBtn.addEventListener("click", function () {
  darkModeBtn.classList.add("hidden");
  lightModeBtn.classList.remove("hidden");

  autofillColor(darkField);

  backdropToggle.classList.remove("backdrop-brightness-120");
  backdropToggle.classList.add("backdrop-brightness-50");
  searchLabelToggle.classList.remove("text-gray-900");
  searchLabelToggle.classList.add("text-white");
  dropdownBtnToggle.className =
    "transition-colors ease-in duration-300 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-gray-700 border border-gray-600 rounded-s-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-700";
  dropdownToggle.classList.remove("bg-white");
  dropdownToggle.classList.add("bg-gray-700");
  ulToggle.classList.remove("text-gray-700");
  ulToggle.classList.add("text-gray-200");
  topToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  keywordToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  catToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  searchDropDownToggle.className =
    "transition ease-in duration-300 block p-2.5 w-full z-20 text-sm text-gray-200 bg-gray-700 rounded-e-lg border-s-gray-700 border-s-2 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400";
  catDropDownBtnToggle.className =
    "transition-colors ease-in duration-300 flex-shrink-0 inline-flex items-center justify-between block p-2.5 w-[386.75px] rounded-r-lg z-20 text-sm text-white bg-gray-700 border-s-gray-700 border-s-2 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400";
  catDropDownToggle.className =
    "transition-colors ease-in duration-300 z-10 hidden bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-full";
  catUlToggle.className =
    "transition-colors ease-in duration-300 py-2 text-sm text-gray-200";
  businessToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  politicsToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  sportsToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  scienceToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  technologyToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  fashionToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  foodToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  healthToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  usToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  worldToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white";
  submitBtnToggle.className =
    "transition-colors ease-in duration-300 absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-800";

  let cardA = document.querySelectorAll("a");
  cardA.forEach(
    (a) =>
      (a.className =
        "transition-colors ease-in duration-300 flex flex-row items-center mx-auto m-10 bg-gray-700 border border-gray-700 rounded-lg shadow max-w-lg hover:bg-gray-600")
  );

  let cardH5 = document.querySelectorAll("h5");
  cardH5.forEach(
    (h5) =>
      (h5.className =
        "transition-colors ease-in duration-300 overflow-hidden h-[50%] mb-1 text-lg font-bold tracking-tight text-gray-200")
  );

  let cardP = document.querySelectorAll("p");
  cardP.forEach(
    (p) =>
      (p.className =
        "transition-colors ease-in duration-300 overflow-hidden h-[50%] font-normal text-gray-400")
  );

  let cardSpan = document.querySelectorAll("span.text-right");
  cardSpan.forEach(
    (s) =>
      (s.className =
        "transition-colors ease-in duration-300 text-right font-mono text-gray-500")
  );

  // hide search icon when selecting Categories
  if (dropButton.innerText === "Categories") {
    submitBtnToggle.classList.add("hidden");
  }
});

// light mode
lightModeBtn.addEventListener("click", function () {
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");

  autofillColor(lightField);

  backdropToggle.classList.remove("backdrop-brightness-50");
  backdropToggle.classList.add("backdrop-brightness-120");
  searchLabelToggle.classList.remove("text-white");
  searchLabelToggle.classList.add("text-gray-900");
  dropdownBtnToggle.className =
    "transition-colors ease-in duration-300 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100";
  dropdownToggle.classList.remove("bg-gray-700");
  dropdownToggle.classList.add("bg-white");
  ulToggle.classList.remove("text-gray-200");
  ulToggle.classList.add("text-gray-700");
  topToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  keywordToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  catToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  searchDropDownToggle.className =
    "transition ease-in duration-300 block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  catDropDownBtnToggle.className =
    "transition-colors ease-in duration-300 flex-shrink-0 inline-flex items-center justify-between block p-2.5 w-[386.75px] rounded-r-lg z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  catDropDownToggle.className =
    "transition-colors ease-in duration-300 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full";
  catUlToggle.className =
    "transition-colors ease-in duration-300 py-2 text-sm text-gray-700";
  businessToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  politicsToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  sportsToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  scienceToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  technologyToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  fashionToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  foodToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  healthToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  usToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  worldToggle.className =
    "transition-colors ease-in duration-300 inline-flex w-full px-4 py-2 hover:bg-gray-100";
  submitBtnToggle.className =
    "transition-colors ease-in duration-300 absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-600 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300";

  let cardA = document.querySelectorAll("a");
  cardA.forEach(
    (a) =>
      (a.className =
        "transition-colors ease-in duration-300 flex flex-row items-center mx-auto m-10 bg-white border border-gray-200 rounded-lg shadow max-w-lg hover:bg-blue-100")
  );

  let cardH5 = document.querySelectorAll("h5");
  cardH5.forEach(
    (h5) =>
      (h5.className =
        "transition-colors ease-in duration-300 overflow-hidden h-[50%] mb-1 text-lg font-bold tracking-tight text-gray-900")
  );

  let cardP = document.querySelectorAll("p");
  cardP.forEach(
    (p) =>
      (p.className =
        "transition-colors ease-in duration-300 overflow-hidden h-[50%] font-normal text-gray-700")
  );

  let cardSpan = document.querySelectorAll("span.text-right");
  cardSpan.forEach(
    (s) =>
      (s.className =
        "transition-colors ease-in duration-300 text-right font-mono text-gray-400")
  );

  // hide search icon when selecting Categories
  if (dropButton.innerText === "Categories") {
    submitBtnToggle.classList.add("hidden");
  }
});

// input field (autofill) color
const darkField = `
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px rgb(55, 65, 81) inset !important;
    -webkit-text-fill-color: rgb(229, 231, 235) !important;
  }
`;

const lightField = `input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 30px rgb(249 250 251) inset !important;
  -webkit-text-fill-color: rgb(107 114 128) !important;
}`;

if (lightModeBtn.classList.contains("hidden")) {
  autofillColor(lightField);
} else {
  autofillColor(darkField);
}

function autofillColor(fieldStyle) {
  // Get a reference to the <head> element
  const headElement = document.querySelector("head");
  // Get a reference to the first <style> element inside the <head>
  const styleElement = headElement.querySelector("style");
  // Remove the <style> element from the <head>
  if (styleElement) {
    headElement.removeChild(styleElement);
  }

  // Get all input elements on the page
  let inputs = document.querySelector("input");

  // Add the necessary styles to the document
  let style = document.createElement("style");
  style.textContent = fieldStyle;
  document.head.appendChild(style);

  // Add event listeners for different states
  inputs.addEventListener("animationstart", handleAnimation);
  inputs.addEventListener("animationend", handleAnimation);
  inputs.addEventListener("transitionend", handleAnimation);
  inputs.addEventListener("focus", handleAnimation);
  inputs.addEventListener("blur", handleAnimation);

  function isWebkitAutofill(element) {
    // Check if the element has the 'webkitBoxShadow' property
    return (
      window
        .getComputedStyle(element)
        .getPropertyValue("-webkit-box-shadow") !== "none"
    );
  }

  function handleAnimation(event) {
    // Check if the input element is in the autofill state
    if (isWebkitAutofill(inputs)) {
      // Apply the desired styles
      inputs.classList.add("webkit-autofill");
    } else {
      // Remove the styles when the autofill state is removed
      inputs.classList.remove("webkit-autofill");
    }
  }
}


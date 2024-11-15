const baseURL = "https://gibsonjk1.github.io/wdd230/";
const linksURL = "https://gibsonjk1.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linkURL);
    const data = await response.json();
    console.table(data.lessons);
}

getLinks();
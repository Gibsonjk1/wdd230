const baseURL = "https://gibsonjk1.github.io/wdd230/";
const linksURL = "https://gibsonjk1.github.io/wdd230/data/links.json";
const activities = document.querySelector('#activities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.table(data);
    displayLinks(data.lessons)
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const list = document.createElement('li');
        const lesson = week.lesson;
        const links = week.links;
        counter = 1;
        list.textContent = `Week ${lesson}: `
        links.forEach((link) => {
            const url = link.url;
            const title = link.title;

            list.innerHTML += `<a href=${url}>${title}</a>`
            counter += 1;
            if (counter <= links.length) {
                list.innerHTML += " | "
            }
        });
        // console.log(list)
        activities.appendChild(list);
    });



}
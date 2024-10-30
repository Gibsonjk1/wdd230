const d = new Date();
let year = d.getFullYear();
document.querySelector(
    "#copyright"
).innerHTML = `Copyright ${year} Jason K Gibson Idaho USA`;

document.querySelector(
    "#lastModified"
).innerHTML = `Last Modified: ${document.lastModified}`;
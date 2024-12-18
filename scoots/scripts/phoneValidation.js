const phone = document.querySelector('#phone');


phone.addEventListener('keyup', () => {
    phone.value = phone.value.replace(/[^\d-]/g, "")
})

phone.addEventListener('focusout', () => {
    let val = phone.value;
    val = val.replace(/[^\d]/g, "");
    val = val.slice(0, 3) + "-" + val.slice(3, 6) + "-" + val.slice(6);
    console.log(val)
    phone.value = val;
})
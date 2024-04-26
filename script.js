const meno = String(prompt('Zadajte Vaše meno').trim());
const priezvisko = String(prompt('Zadajte Vaše priezvisko').trim());
const email = `${priezvisko.slice(0, 5).toLowerCase()}${meno.slice(0, 3).toLowerCase()}`;

document.body.innerHTML = `Váš email je: ${email}@fit.cvut.cz`
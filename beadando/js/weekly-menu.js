async function populateWeeklyMenu() {
    try {
        const response = await fetch('/data/weekly-menu.json');
        const menu = await response.json();

        const rows = document.querySelectorAll('.weekly-menu-table tbody tr');

        console.log(menu);

        menu.forEach((day, i) => {
            rows[0].querySelectorAll('td span')[i].textContent = day["A"];
            rows[1].querySelectorAll('td span')[i].textContent = day["B"];
            rows[2].querySelectorAll('td span')[i].textContent = day["C"];
            rows[3].querySelectorAll('td')[i].textContent = day["dessert"];
        });
    }
    catch (error) {
        console.error("Hiba történt a menü betöltésekor:", error);
    }
}

document.addEventListener('DOMContentLoaded', populateWeeklyMenu);
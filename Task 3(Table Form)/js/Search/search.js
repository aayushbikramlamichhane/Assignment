
export function filterTable() {
    const searchInput = document.querySelector('.search');
    const rows = document.querySelectorAll('tbody tr');

    searchInput.addEventListener('input',  () => {
        const value = searchInput.value.toLowerCase();

        rows.forEach(row => {
            const data = row.querySelectorAll("td");
            const id = data[0].textContent.toLowerCase();
            // console.log(data[0]);
            // console.log(id);
            const name = data[1].textContent.toLowerCase();
            const address = data[2].textContent.toLowerCase();
            const contact = data[3].textContent.toLowerCase();

            if (id.includes(value) || name.includes(value) || address.includes(value) || contact.includes(value)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
}





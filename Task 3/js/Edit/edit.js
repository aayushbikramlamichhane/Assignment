import { id,name,address,contact } from "../Variable/variable.js"
import { localUser } from "../Localstorage/localstorage.js";





export function editUsers() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const index = urlParams.get("index");
    console.log(index);

    if (index !== null && index !== undefined) {
        const user = localUser[index];

        id.value = user.id;
        name.value = user.name;
        address.value = user.address;
        contact.value = user.contact;

        const saveButton = document.querySelector(".saveButton");
        saveButton.addEventListener("click", () => {
            if (!id.value || !name.value || !address.value || !contact.value) {
                alert("All fields are required.");
                return;
            }

            user.id = id.value;
            user.name = name.value;
            user.address = address.value;
            user.contact = contact.value;

            localStorage.setItem("localUser", JSON.stringify(localUser));

            window.location.href = "index.html";
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const dataObj = {};

        formData.forEach((value, key) => {
            dataObj[key] = value;
        });

        sessionStorage.setItem("formData", JSON.stringify(dataObj));
        sessionStorage.setItem("formType", "contact");

        window.location.href = "/koszonjuk.html";
    });
});
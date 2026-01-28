const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("enquiryModal");
const form = document.getElementById("enquiryForm");
const initialContent = document.getElementById("modalInitialContent");
const successContent = document.getElementById("modalSuccessContent");

const openModal = () => {
    if (initialContent) initialContent.classList.remove("hidden");
    if (successContent) successContent.classList.add("hidden");
    if (form) form.reset();

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
};

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        initialContent.classList.add("hidden");
        successContent.classList.remove("hidden");

        setTimeout(() => {
            closeModal();
        }, 2000);
    });
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

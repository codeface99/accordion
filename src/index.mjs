import "./styles.css";

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionContent = header.nextElementSibling;
    const accordionIcon = header.querySelector(".accordion-icon");

    accordionContent.classList.toggle("show");
    accordionIcon.classList.toggle("rotate");
  });
});

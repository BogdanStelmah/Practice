const tabs = document.querySelectorAll(".footer__item");

tabs.forEach((tab) => {
   tab.addEventListener("click", (e) => {
       tabs.forEach((tab) => {
           if (tab.classList.contains("active")) {
               tab.classList.remove("active");
           }
       });
       e.currentTarget.classList.toggle("active");
   });
});
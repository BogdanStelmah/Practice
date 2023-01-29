const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const list = dropdown.querySelector(".dropdown__list");
    let active;

    const refreshList = () => {
        active = list.querySelector(".dropdown__active");
        active.addEventListener("click", () => {
            dropdown.classList.toggle("active");

            document.addEventListener("click", closeByOuterClick);
        });
    }

    const ChoseNewActive = (e) => {
        active.classList.remove("dropdown__active");

        let tmp = active.cloneNode(true);
        tmp.addEventListener("click", ChoseNewActive);
        list.replaceChild(tmp, active);

        let li = e.currentTarget;
        tmp = li.cloneNode(true);
        tmp.classList.add("dropdown__active");
        list.replaceChild(tmp, li);

        dropdown.classList.remove("active");

        refreshList();
    }

    refreshList();

    let liElements = list.querySelectorAll("li");
    liElements.forEach(li => {
        if (!li.classList.contains("dropdown__active")) {
            li.addEventListener("click", ChoseNewActive);
        }
    });

    const closeByOuterClick = (e) => {
        if (e.target !== dropdown && !dropdown.contains(e.target)) {
            if (dropdown.classList.contains("active")) {
                dropdown.classList.remove("active");

                document.removeEventListener("click", closeByOuterClick);
            }
        }
    }
});
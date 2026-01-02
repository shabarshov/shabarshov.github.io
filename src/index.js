function showSection(sectionId) {
    console.log("sectionId", sectionId)
    const sections = document.querySelectorAll(".section")
    sections.forEach((s) => s.classList.remove("section--active"))

    document.getElementById(sectionId).classList.add("section--active")

    const navLinks = document.querySelectorAll(".link--nav")
    navLinks.forEach((l) => l.classList.remove("link--active"))
    document.getElementById("nav-" + sectionId).classList.add("link--active")

    const sidebar = document.getElementById("sidebar")
    const topicsMenu = document.getElementById("sidebar-topics")
    const exercisesMenu = document.getElementById("sidebar-exercises")

    if (sectionId === "home" || !sectionId) {
        sidebar.style.display = "none" // Скрываем сайдбар на главной
    } else {
        sidebar.style.display = "block"
        if (sectionId === "topics") {
            topicsMenu.style.display = "block"
            exercisesMenu.style.display = "none"
        } else {
            topicsMenu.style.display = "none"
            exercisesMenu.style.display = "block"
        }
    }

    window.scrollTo(0, 0)
}

function toggleAnswer(id) {
    const box = document.getElementById(id)
    const button = event.target

    if (box.style.display === "block") {
        box.style.display = "none"
        button.textContent = "Проверить"
    } else {
        box.style.display = "block"
        button.textContent = "Скрыть пояснение"
    }
}

document.querySelectorAll(".sidebar__link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: "smooth",
            })
        }
    })
})

function initSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.display = "block"
}

window.onload = () => showSection("home")

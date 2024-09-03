const togglebtn = document.querySelector("#dark-mode-toggle")
const currentmode = localStorage.getItem('darkmode')
togglebtn.addEventListener("change", () => {
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkmode', 'enabled')
    }
    else {
        localStorage.setItem('darkmode', 'disabled')
    }
})
if(currentmode=='enabled'){
    document.body.classList.add('dark-mode')
}
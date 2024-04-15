var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}

function runScraping() {
    fetch('/scrape')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
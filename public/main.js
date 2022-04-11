//axios
const host = location.origin
const axiosApp = axios.create({
    baseUrl: host
});

// If you don't want the particles, change the following to false
const doParticles = true;

// Do not mess with the rest of this file unless you know what you're doing
//Trust me, i know. --M1S0

const getWidth = () => { // credit to travis on stack overflow
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

if (doParticles) {
    if (getWidth() < 400) $.firefly({
        minPixel: 1,
        maxPixel: 2,
        total: 20
    });
    else $.firefly({
        minPixel: 1,
        maxPixel: 3,
        total: 40
    });
}

// This is for the click to copy
let t;
$(document).ready(() => {
    t = $(".ip").html();
});

$(document).on("click", ".ip", () => {
    let copy = document.createElement("textarea");
    copy.style.position = "absolute";
    copy.style.left = "-99999px";
    copy.style.top = "0";
    copy.setAttribute("id", "ta");
    document.body.appendChild(copy);
    copy.textContent = t;
    copy.select();
    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    $(".ip").html("<span class='extrapad'>See You Soon!</span>");
    setTimeout(() => {
        $(".ip").html(t);
        var copy = document.getElementById("ta");
        copy.parentNode.removeChild(copy);
    }, 800);
});

// Fetch total members from backend

async function updatePlayerCount() {
    const res = await axiosApp.get(`/api/fetchPlayers`)
    document.querySelector(".sip").innerHTML = res.data
}

updatePlayerCount()
setInterval(() => {
    updatePlayerCount()
}, 60 * 1000);
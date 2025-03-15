function NavToggle ()
{
    var nav = document.getElementById("snav");
    if (nav.className === "topnav") { nav.className += " responsive"; }
    else { nav.className = "topnav"; }
}

function scrollToAnswer() {
    setTimeout(() => {
        document.getElementById('diacritic_q1').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}
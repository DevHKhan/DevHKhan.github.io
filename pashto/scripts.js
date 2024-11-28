function NavToggle ()
{
    var nav = document.getElementById("snav");
    if (nav.className === "topnav") { nav.className += " responsive"; }
    else { nav.className = "topnav"; }
}
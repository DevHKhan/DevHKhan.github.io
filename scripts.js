function diacritic_answer1 () {
    setTimeout(() => {
        document.getElementById('diacritic_q1').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

function diacritic_answer2 () {
    setTimeout(() => {
        document.getElementById('diacritic_q2').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

let scrollProgress = document.getElementById('scroll_progress');
let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

function getScrollProgress() {
    let percentProgress = (window.scrollY / pageHeight) * 100;
    scrollProgress.style.width = percentProgress + '%';
}

window.onscroll = getScrollProgress;
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 577 || document.documentElement.scrollTop > 578) {
        document.getElementById("logo").style.height = "75px";
        document.getElementById("link").style.transform = "scale(.65)";
        document.getElementsByTagName('HEADER')[0].style.backgroundColor = 'rgba(0, 56, 95, 0.8)';
        document.getElementsByTagName('nav')[0].style.backgroundColor = 'transparent';
    } else {
        document.getElementById('logo').style.removeProperty('height');
        document.getElementById('link').style.removeProperty('transform');
        document.getElementsByTagName('HEADER')[0].style.removeProperty('background');
        document.getElementsByTagName('nav')[0].style.removeProperty('background');
    }
}
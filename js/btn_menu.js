var btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
});
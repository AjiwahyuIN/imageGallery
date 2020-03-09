const container = document.querySelector('.container');
const main = document.querySelector('.main')
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {
    if (e.target.className == 'thumb') {
        main.src = e.target.src;
        main.classList.add('fade');
        setTimeout(function () {
            main.classList.remove('fade');
        }, 500)

        thumbs.forEach(function (thumb) {
            // cara #1

            // if (thumb.classList.contains('active')) {

            //     thumb.classList.remove('active');

            // }

            // cara # 2
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});
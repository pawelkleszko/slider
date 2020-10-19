import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {

    const divider = document.querySelector('.divider');
    const dividerHandle = document.querySelector('.divider__handle');
    const imgContainerToBeResize = document.querySelector('.slider__img-container--second');
    const slider = document.querySelector('.slider__img-containers');
    const imgEl = document.querySelector('.slider__img')
    let offset;
    let containerWidth;
    let dragging = false;
    let mouseOut = false;


    const adjustDisplay = (percent) => {
        imgContainerToBeResize.style.width = `${percent}%`;
    }

    const move = (clientX) => {
        if (dragging) {
            offset = imgEl.getBoundingClientRect()
            containerWidth = slider.offsetWidth;
            const percent = (clientX - offset.left) / containerWidth * 100;
            if (percent > 0 && percent < 100) {
                divider.style.left = `${percent}%`
                console.log(percent);
                console.log(offset.left);
                adjustDisplay(percent);
            }
        } else {
            return
        }

    }

    dividerHandle.addEventListener('mousedown', (event) => {
        dragging = true;
        move();
    })

    window.addEventListener('mouseup', (event) => {
        dragging = false;
    })


    slider.addEventListener('mouseover', (e) => {
        mouseOut = false;
    })

    slider.addEventListener('mousemove', (e) => {
        move(e.clientX);
        // console.log(e.target);
    })

    dividerHandle.addEventListener('touchstart', () => {
        dragging = true;
    });

    dividerHandle.addEventListener('touchend', () => {
        dragging = false;
    });

    window.addEventListener('touchmove', event => {
        if (dragging) {
            move(event.touches[0].clientX);
        }
    });


})
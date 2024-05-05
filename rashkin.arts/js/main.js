(function () {

    // бургер меню 

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // табы 

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl)
            e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }

        if (activContent) {
            activContent.classList.remove('tab-content--show')
        }


        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')


    }

    // этапы работы 

    new Swiper('.progress__of__work--swiper', {

        slidesPerView: 1,
        spaceBetween: 30,

        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'fraction',

        //     renderFraction: function (currentClass, totallClass) {
        //         return ' <span class="' + currentClass + '"></span>' +
        //         '' +
        //         '<span class="' + totallClass + '"<>/span>';
        //     },
        // },

        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            601: {
                slidesPerView: 2,
            },
        }

    });

    new Swiper('.portfolio-swiper', {

        slidesPerView: 1,
        spaceBetween: 50,

        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            601: {
                slidesPerView: 2,
            },
        }

    });

    // ------------------


    // -------------------

})()
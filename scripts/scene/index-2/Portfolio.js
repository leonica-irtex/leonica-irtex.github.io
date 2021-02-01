Application.ScrollMagic.Scenes.Portfolio = function () {

    /**
     * Creating a timeline
     *
     * @type {TimelineMax}
     */
    const TIMELINE =
        new TimelineMax()


    /**
     * Iterate each element in the line separately
     */
    for (const [index, element] of Object.entries(document.querySelectorAll('[data-target="portfolioRowPicture"]'))) {

        /**
         * Register an animation frame
         */
        TIMELINE
            .fromTo(element, 50 + (index * 15), {
                scale: 0.95,
                opacity: 0,
                y: 10,
                rotationY: 10
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                rotationY: 0
            }, index * 4)

    }


    /**
     * Iterate each element in the line separately
     */
    for (const [index, element] of Object.entries(document.querySelectorAll('[data-target="portfolioRow"]'))) {

        /**
         *
         */
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

            /**
             * Register an animation frame
             */
            $(element).on( "swipeleft", function () {
                TweenMax.to(element, 1, {x: "-=250"})
            });

            /**
             * Register an animation frame
             */
            $(element).on( "swiperight", function () {
                TweenMax.to(element, 1, {x: "+=250"})
            });


        } else {

            /**
             * Declare primary constants
             */
            const LENGTH = $(element).find('img').length;
            const WIDTH = $(element).find('img').width();
            const DIVIDER = 0.1;


            /**
             * Depending on the logic we register the type of animation
             */
            if (index % 2 === 0) {

                TIMELINE
                    .fromTo(element, 500, {
                        x: (WIDTH * LENGTH) * DIVIDER
                    }, {
                        x: ((WIDTH * LENGTH) * -1) * DIVIDER
                    }, 0)

            } else {

                TIMELINE
                    .fromTo(element, 500, {
                        x: ((WIDTH * LENGTH) * -1) * DIVIDER
                    }, {
                        x: (WIDTH * LENGTH) * DIVIDER
                    }, 0)

            }

        }


    }


    /**
     * Layout
     */
    Application.Layout.set('Portfolio', new ScrollMagic.Scene({
        triggerElement: "#scene-portfolio",
        triggerHook: 0.4,
        duration: '100%'
    })
        .setTween(TIMELINE)
        .addTo(Application.ScrollMagic.Controllers.Main));

    /**
     * Return true since the code was executed without errors
     */
    return true;

};
Application.ScrollMagic.Scenes.Home = function () {

    /**
     * Function of repeatedly setting relevant information for a twin
     *
     * @returns {TimelineMax}
     */
    function self() {

        /**
         * Init main constants
         */
        var POSITION = $('[data-target="cloneSingle"]').position();


        /**
         * Creating a timeline
         *
         * @type {TimelineMax}
         */
        const TIMELINE =
            new TimelineMax()
                .fromTo("[data-target='singleWord']", 30, {opacity: 0, y: 10, rotationY: 10}, {opacity: 1, y: 0, rotationY: 0})
                .fromTo("[data-target='singleWord']",  50, {
                    xPercent: -50,
                    yPercent: -50,
                    left: "50%",
                    top: "50%",
                    position: "absolute",
                    fontSize: '13vh'
                }, {
                    xPercent: 0,
                    yPercent: 0,
                    left: POSITION.left,
                    top: POSITION.top,
                    fontSize: $('[data-target="cloneSingle"]').css('font-size')

                })

        /**
         * Iterate each element in the line separately
         */
        for (const [index, element] of Object.entries(document.querySelectorAll('[data-target="anotherWord"]'))) {

            /**
             * Register an animation frame
             */
            TIMELINE
                .fromTo(element, 5, {opacity: 0, y: 10, rotationY: 10}, {opacity: 1, y: 0, rotationY: 0})

        }

        /**
         * Returning the twin
         */
        return TIMELINE;

    }

    /**
     * Making parameters based on function calls relevant
     */
    $(window).resize(function(){

        /**
         * When you change the screen size, update the tween
         */
        if (Application.Layout.data.Home) {
            Application.Layout.data.Home.setTween(self())
        }

    });

    /**
     * If scrolling or resizing of the document changes
     * the position of the target element, the tween must be updated
     */
    $('[data-target="cloneSingle"]').onPositionChanged(function(){

        /**
         * When you change the screen size, update the tween
         */
        Application.Layout.data.Home.setTween(self())

    });

    /**
     * Layout
     */
    Application.Layout.set('Home', new ScrollMagic.Scene({
        triggerElement: "#scene-home",
        triggerHook: 0,
        duration: "100%"
    })
        .setPin("#scene-home")
        .setTween(self())
        .addTo(Application.ScrollMagic.Controllers.Main));

    /**
     * Return true since the code was executed without errors
     */
    return true;

};
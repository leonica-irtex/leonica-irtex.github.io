Application.ScrollMagic.Scenes.Education = function () {

    /**
     * Creating a timeline
     *
     * @type {TimelineMax}
     */
    const TIMELINE =
        new TimelineMax()
            .fromTo("[data-target='educationTitle']", 2, {
                opacity: 0,
                y: 10,
                rotationY: 10
            }, {
                opacity: 1,
                y: 0,
                rotationY: 0
            })


     /**
     * Iterate each element in the line separately
     */
    for (const [index, element] of Object.entries(document.querySelectorAll('[data-target="educationCard"]'))) {

        /**
         * Register an animation frame
         */
        TIMELINE
            .fromTo(element, 1.5, {
                opacity: 0,
                y: 10,
                rotationY: 10
            }, {
                opacity: 1,
                y: 0,
                rotationY: 0
            }, ((index + 3) / 2))


    }


    /**
     * Layout
     */
    Application.Layout.set('Education', new ScrollMagic.Scene({
        triggerElement: "#education",
        triggerHook: 0.78,
        duration: "70%"
    })
        // .setPin("#education")
        .setTween(TIMELINE)
        .addTo(Application.ScrollMagic.Controllers.Main));

    /**
     * Return true since the code was executed without errors
     */
    return true;

};
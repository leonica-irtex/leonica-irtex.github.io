Application.ScrollMagic.Scenes.Partners = function () {

    /**
     * Creating a timeline
     *
     * @type {TimelineMax}
     */
    const TIMELINE =
        new TimelineMax()
            .fromTo("[data-target='partnersTitle']", 2, {
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
    for (const [index, element] of Object.entries(document.querySelectorAll('[data-target="partnersImage"]'))) {

        /**
         * Register an animation frame
         */
        TIMELINE
            .fromTo(element, 2, {
                opacity: 0,
                y: 10,
                rotationY: 10
            }, {
                opacity: 1,
                y: 0,
                rotationY: 0
            }, ((index / 2) ))


    }


    /**
     * Layout
     */
    Application.Layout.set('Partners', new ScrollMagic.Scene({
        triggerElement: "#partners",
        triggerHook: 0.85,
        duration: "70%"
    })
        .setTween(TIMELINE)
        .addTo(Application.ScrollMagic.Controllers.Main));

    /**
     * Return true since the code was executed without errors
     */
    return true;

};
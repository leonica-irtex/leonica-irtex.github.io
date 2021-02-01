Application.ScrollMagic.Scenes.Prices = function () {

    /**
     * Init timeline
     *
     * @type {TimelineMax}
     */
    const TIMELINE = new TimelineMax();


    for (const [index, element] of Object.entries(document.querySelectorAll('.price-card'))) {

        /**
         * Update timeline for each element
         */
        TIMELINE
            .fromTo(element,  0.4,  {opacity: 0.05, scale: 0.95}, {opacity: 1, scale: 1},  index / 2)

    }

    /**
     * Layout
     */
    Application.Layout.set('Prices', new ScrollMagic.Scene({
        triggerElement: "#scene-prices",
        triggerHook: 0.6,
        duration: "80%"
    })
        .setTween(TIMELINE)
        .addTo(Application.ScrollMagic.Controllers.Main));

    return true;

};

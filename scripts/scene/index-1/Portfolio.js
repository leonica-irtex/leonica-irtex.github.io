Application.ScrollMagic.Scenes.Portfolio = function () {

    var i = 0;

    /**
     * Iterate each element in the line separately
     */
    for (const e of document.querySelectorAll('.pinned-container')) {

        /**
         * Declare primary constants
         */
        const PINNED = e.querySelector(`.pinned`);

        /**
         * Creating a timeline
         *
         * @type {TimelineMax}
         */
        const TIMELINE =
            new TimelineMax()
                .fromTo(PINNED, 1, {opacity: 0.05, scale: 0.9, ease: Sine.easeOut}, {opacity: 1, filter: '', scale: 1, ease: Sine.easeOut}, 0)
                .to(PINNED, 2, {opacity: 1, ease: Sine.easeOut})
                .to(PINNED, 1, {scale: 0.9, opacity: 0.05, ease: Sine.easeOut})


        /**
         * Layout
         */
        Application.Layout.set(`Portfolio_Project_${i++}`, new ScrollMagic.Scene({
            triggerElement: e,
            triggerHook: 0.5,
            duration: $(e).height() + 200
            // duration: '100%'
        })
            .setTween(TIMELINE)
            .offset(-250)
            .addTo(Application.ScrollMagic.Controllers.Main));

    }

    /**
     * Return true since the code was executed without errors
     */
    return true;

};
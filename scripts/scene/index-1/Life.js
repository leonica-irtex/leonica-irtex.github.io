Application.ScrollMagic.Scenes.Life = function () {


    /**
     * Creating a timeline
     *
     * @type {TimelineMax}
     */
    const TIMELINE_MAIN =
        new TimelineMax()
            .fromTo("#my-life-text", 100,
                {
                    y: 0,
                    x: '-250%',

                }, {
                    y: 0,
                    x: '150%'
                }, 0)


    /**
     * Iterate each element in the line separately
     */
    for (const [index, element] of Object.entries(document.querySelectorAll('.lifeline-card'))) {

        /**
         * Creating a timeline
         *
         * @type {TimelineMax}
         */
        const TIMELINE =
            new TimelineMax()

        /**
         * Declare primary constants
         */
        const ID = $(element).attr('id');

        /**
         * Register an animation frame
         */
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

            TIMELINE
                .fromTo(`#${ID} .lifeline-text`, 1.0, {
                    opacity: 0.05,
                    y: "10%",
                    scale: 0.96
                }, {
                    opacity: 1.0,
                    y: "0%",
                    scale: 1
                }, 0.3)

        } else {

            TIMELINE
                .fromTo(`#${ID} .lifeline-text`, 1.0, {
                    opacity: 0.05,
                    y: "30%",
                    scale: 0.96
                }, {
                    opacity: 1.0,
                    y: "50%",
                    scale: 1
                }, 0.3)
                .fromTo(`#${ID} .lifeline-image`, 3.0, {
                    opacity: 0.05,
                    y: "15%"
                }, {
                    opacity: 1.0,
                    y: "40%"
                }, 0.0)


        }

        Application.Layout.set(`Life#${ID}`, new ScrollMagic.Scene({
            triggerElement: `#${ID}`,
            triggerHook: 0.8,
            duration: "80%"
        })
            .setTween(TIMELINE)
            .addTo(Application.ScrollMagic.Controllers.Main));

    }


    /**
     * Layout
     */
    Application.Layout.set(`LifeText`, new ScrollMagic.Scene({
        triggerElement: `#my-life-text`,
        triggerHook: 1,
        duration: "200%"
    })
        .setTween(TIMELINE_MAIN)
        .addTo(Application.ScrollMagic.Controllers.Main));

    /**
     * Return true since the code was executed without errors
     */
    return true;

};

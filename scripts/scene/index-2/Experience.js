Application.ScrollMagic.Scenes.Experience = function () {

    /**
     * Creating a timeline
     *
     * @type {TimelineMax}
     */
    const TIMELINE =
        new TimelineMax()
            .fromTo("[data-target='greatExperienceTitle']", 2, {
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
    for (const [index, element] of Object.entries(document.querySelectorAll('[data-target="greatExperienceProgressBar"]'))) {

        /**
         * Declare primary constants
         */
        const PERCENT = $(element).attr('data-progress');
        const BAR = element.querySelector(`[data-target="bar"]`);
        const TEXT = element.querySelector(`[data-target="text"]`);

        /**
         * Register an animation frame
         */
        TIMELINE
            .fromTo(BAR, 3, {
                opacity: 0,
                width: 0
            }, {
                opacity: 1,
                width: `${PERCENT}%`
            }, ((index + 1) / 3))
            .fromTo(TEXT, 5, {
                opacity: 0,
                y: 10,
                rotationY: 10
            }, {
                opacity: 1,
                y: 0,
                rotationY: 0
            }, ((index + 1) / 3))


    }


    /**
     * Iterate each element in the line separately
     */
    for (const [index, element] of Object.entries(document.querySelectorAll('[data-target="greatExperienceCard"]'))) {

        /**
         * Register an animation frame
         */
        TIMELINE
            .fromTo(element, 3, {
                opacity: 0,
                y: 10,
                rotationY: 10
            }, {
                opacity: 1,
                y: 0,
                rotationY: 0
            })


    }

    /**
     * Register an animation frame
     */
    TIMELINE
        .fromTo(`[data-target="greatExperienceYearsExperience"]`, 5, {
            opacity: 0,
            y: 10,
            rotationY: 10
        }, {
            opacity: 1,
            y: 0,
            rotationY: 0
        }, 2)

    /**
     * Register an animation frame
     */
    TIMELINE
        .fromTo(`[data-target="greatExperienceDownloadCV"]`, 2, {
            opacity: 0,
            y: 10,
            rotationY: 10
        }, {
            opacity: 1,
            y: 0,
            rotationY: 0
        })

    /**
     * Layout
     */
    Application.Layout.set('Experience', new ScrollMagic.Scene({
        triggerElement: "#great-experience",
        triggerHook: 0.75,
        duration: "100%"
    })
        // .setPin("#great-experience")
        .setTween(TIMELINE)
        .addTo(Application.ScrollMagic.Controllers.Main));

    /**
     * Return true since the code was executed without errors
     */
    return true;

};
Application.ScrollMagic.Scenes.Home = function () {

    /**
     * Creating a timeline
     *
     * @type {TimelineMax}
     */
    const TIMELINE =
        new TimelineMax()
            .to("#component-home-offer",  1,   {x: "-150%", y: "0%", scale: 0.8, opacity: 0}, 0.5)
            .to("#component-home-offer",  1,   {display: 'none'}, 0.6)
            .to("#component-projects",    1,   {opacity: 1, width: "100%", left: 0, top: 0, y: "0%", x: "0%"}, 0.5)
            .to("#scene-projects",        1,   {width: "100%", overflow: "hidden"}, 0.2)


    /**
     * Layout
     */
    Application.Layout.set('Home', new ScrollMagic.Scene({
        triggerElement: "#scene-home",
        triggerHook: 0,
        duration: "100%"
    })
        .setPin("#scene-home")
        .setTween(TIMELINE)
        .offset(-10)
        .addTo(Application.ScrollMagic.Controllers.Main));


    /**
     * Return true since the code was executed without errors
     */
    return true;

};
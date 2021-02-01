$(document).ready(function (e=null) {

    /**
     * VUE Content Controller
     *
     * @type {Application.Vue}
     */
    Application.Vue.Main = new Vue({
        el: "#main",
        data: {
            metric: {
                scroll: 0,
                time: 0,
                timer: false
            },
            life: Application.LifeLine.list(),
            prices: Application.PriceList.list(),
            portfolio: Application.Portfolio.list(),
            experience: Application.Experience.list(),
            education: Application.Education.list(),
            partners: Application.Partners.list(),
            offer: Application.Offer.list(),
            counts: Application.Counts.list(),
        },
        mounted: function () {

            /**
             * Initializing scenes.
             *
             * Run the tasks collection of functions in parallel,
             * without waiting until the previous function has completed.
             * If any of the functions pass an error to its callback,
             * the main callback is immediately called with the value of the error.
             * Once the tasks have completed, the results are passed to the final callback as an array.
             */

            async.parallel(Object.values(Application.ScrollMagic.Scenes));

        }
    });

    /**
     * Measuring the time spent on the site
     *
     * @type {number}
     */
    Application.Vue.Main.metric.timer = setInterval(function () {
        Application.Vue.Main.metric.time++;
    }, 1000);

});

/**
 * Measuring the total scroll across the page
 */
$(document).scroll(function() {
    Application.Vue.Main.metric.scroll++;
});
class EventObserver {
    constructor() {
        this.observers = {};
    }

    on (event, fn) {
        this.observers[event] = fn;
    }

    broadcast(event, data) {
        for (const [e, d] of Object.entries(this.observers)) {
            if (e === event) {
                d(data);
            }
        }
    }
}

class Storage {
    constructor() {
        this.data = [];
    }

    add (data={}) {
        if (data instanceof Object) {
            this.data.push(data);
        }
    }

    list () {
        return this.data;
    }
}

class KeyStore extends EventObserver {

    constructor() {

        super();

        this.data = {};
        this.event = {};

    }

    set (key, value) {
        this.broadcast('set', [key, value]);
        this.data[key] = value;
    }

    get (key) {
        this.broadcast('get', key);
        return this.data[key];
    }

    list () {
        return this.data;
    }
}

class Debug {

    indicators(enabled=true) {


        if (enabled) {
            for (const [index, scene] of Object.entries(Application.Layout.data)) {
                scene.addIndicators({
                    name: `Scene ${index}`,
                    colorEnd: "#FFFFFF"
                });
            }
        }

    }
    
    scenes(enabled=true) {

        if (enabled) {

            $("#main").append("<div class='fixed top-0 left-0 p-4 bg-black' id='debug_info'> </div>")

            return Application.Layout.on('set', function (e=null) {

                $("#debug_info").append(`<div id="scene-${e[0]}" class="text-white text-xs"> ${e[0]} <span id="scene-${e[0]}-progress" class="font-bold"></span> <span id="scene-${e[0]}-enabled" class="italic"></span> </div>`);

                e[1].on("enter", event => {
                    $(`#scene-${e[0]}`).css('color', 'orange');
                });

                e[1].on("progress", event => {
                    $(`#scene-${e[0]}-progress`).text(Math.round(event.progress * 100) / 100);
                });

                e[1].on("leave", event => {
                    $(`#scene-${e[0]}`).css('color', 'gray');
                });

                e[1].on("change", event => {
                    $(`#scene-${e[0]}`).css('color', 'blue');
                });

                e[1].on("destroy", event => {
                    $(`#scene-${e[0]}`).css('color', 'red');
                });

                e[1].on("shift", event => {
                    $(`#scene-${e[0]}`).css('color', 'gray');
                });

                e[1].on("update", event => {
                    $(`#scene-${e[0]}-enabled`).text(e[1].enabled() ? 'Active' : 'Deactive');
                });

            });



        }

    }

}

class Layout extends KeyStore {}
class Text extends KeyStore {}
class Portfolio extends Storage {}
class PriceList extends Storage {}
class LifeLine extends Storage {}
class Experience extends Storage {}
class Education extends Storage {}
class Partners extends Storage {}
class Offer extends Storage {}
class Counts extends Storage {}

const Application = {

    Offer:      new Offer(),
    Portfolio:  new Portfolio(),
    PriceList:  new PriceList(),
    LifeLine:   new LifeLine(),
    Layout:     new Layout(),
    Debug:      new Debug(),
    Experience: new Experience(),
    Education:  new Education(),
    Counts:     new Counts(),
    Partners:   new Partners(),

    Vue: {},
    ScrollMagic: {
        Controllers: {},
        Scenes: {}
    }
    
}

const DEBUG = Application.Debug;

$(window).resize(function() {

    for (const [ID, Scene] of Object.entries(Application.Layout.list())) {
        Scene.refresh();
    }

});
window.SnakeJS.Modules.watermelon = (function (app) {
    const ParentClass = app.Modules.gameObject.create;

    function WaterMelon() {
        ParentClass.call(this);

        const shrink = 2,
            imagePos =  {
                x: 0,
                y: 3
            },
            createNextObj = false;

        this.delay = 70000;

        this.getShrink = function () {
            return shrink;
        };

        this.getImagePos = function () {
            return imagePos;
        };

        this.isCreateNextObj = function () {
            return createNextObj;
        };
    }

    WaterMelon.prototype = Object.create(ParentClass.prototype);
    WaterMelon.prototype.constructor = WaterMelon;

    return {
        create: WaterMelon
    };
}(window.SnakeJS));

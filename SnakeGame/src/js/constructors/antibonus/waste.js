window.SnakeJS.Modules.waste = (function (app) {
    const ParentClass = app.Modules.gameObject.create;

    function Waste() {
        ParentClass.call(this);

        const score = -2,
            imagePos =  {
                x: 0,
                y: 2
            },
            createNextObj = false;

        this.delay = 10000;

        this.getScore = function () {
            return score;
        };

        this.getImagePos = function () {
            return imagePos;
        };

        this.isCreateNextObj = function () {
            return createNextObj;
        };
    }

    Waste.prototype = Object.create(ParentClass.prototype);
    Waste.prototype.constructor = Waste;

    return {
        create: Waste
    };
}(window.SnakeJS));

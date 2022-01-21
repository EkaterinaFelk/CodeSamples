window.SnakeJS.Modules.cake = (function (app) {
    const ParentClass = app.Modules.gameObject.create;

    function Cake() {
        ParentClass.call(this);

        const score = 10,
            imagePos =  {
                x: 1,
                y: 0
            },
            createNextObj = false;

        this.delay = 7000;

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

    Cake.prototype = Object.create(ParentClass.prototype);
    Cake.prototype.constructor = Cake;

    return {
        create: Cake
    };
}(window.SnakeJS));

window.SnakeJS.Modules.apple = (function (app) {
    const ParentClass = app.Modules.gameObject.create;

    function Apple() {
        ParentClass.call(this);

        const score = 1,
            imagePos = {
                x: 0,
                y: 0
            };

        this.getScore = function () {
            return score;
        };

        this.getImagePos = function () {
            return imagePos;
        };
    }

    Apple.prototype = Object.create(ParentClass.prototype);
    Apple.prototype.constructor = Apple;

    return {
        create: Apple
    };
}(window.SnakeJS));

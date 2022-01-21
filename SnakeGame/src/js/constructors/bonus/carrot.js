window.SnakeJS.Modules.carrot = (function (app) {
    const ParentClass = app.Modules.gameObject.create;

    function Carrot() {
        ParentClass.call(this);

        const score = 2,
            imagePos =  {
                x: 0,
                y: 1
            };

        this.getScore = function () {
            return score;
        };

        this.getImagePos = function () {
            return imagePos;
        };
    }

    Carrot.prototype = Object.create(ParentClass.prototype);
    Carrot.prototype.constructor = Carrot;

    return {
        create: Carrot
    };
}(window.SnakeJS));

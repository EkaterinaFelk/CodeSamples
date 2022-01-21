window.SnakeJS.Modules.mushroom = (function (app) {
    const ParentClass = app.Modules.gameObject.create;

    function Mushroom() {
        ParentClass.call(this);

        const die = true,
            imagePos = {
                x: 1,
                y: 1
            },
            createNextObj = false;

        this.delay = 10000;

        this.getImagePos = function () {
            return imagePos;
        };

        this.getDie = function () {
            return die;
        };

        this.isCreateNextObj = function () {
            return createNextObj;
        };
    }

    Mushroom.prototype = Object.create(ParentClass.prototype);
    Mushroom.prototype.constructor = Mushroom;

    return {
        create: Mushroom
    };
}(window.SnakeJS));

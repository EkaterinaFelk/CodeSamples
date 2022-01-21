window.SnakeJS.Modules.stone = (function (app) {
    const ParentClass = app.Modules.gameObject.create;

    function Stone() {
        ParentClass.call(this);

        const imagePos = {
                x: 1,
                y: 2
            },
            createNextObj = false;

        this.getImagePos = function () {
            return imagePos;
        };

        this.isCreateNextObj = function () {
            return createNextObj;
        };
    }

    Stone.prototype = Object.create(ParentClass.prototype);
    Stone.prototype.constructor = Stone;

    return {
        create: Stone
    };
}(window.SnakeJS));

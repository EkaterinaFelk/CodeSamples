window.SnakeJS.Modules.gameObject = (function (app) {
    function GameObject() {
        const XYPos = setPosition(),
            score = 0,
            imagePos = {},
            die = false,
            shrink = 0,
            createNextObj = true;

        this.delay = 0;

        this.getX = function () {
            return XYPos[0];
        };

        this.getY = function () {
            return XYPos[1];
        };

        this.getScore = function () {
            return score;
        };

        this.getImagePos = function () {
            return imagePos;
        };

        this.getDie = function () {
            return die;
        };

        this.getShrink = function () {
            return shrink;
        };

        this.isCreateNextObj = function () {
            return createNextObj;
        };
    }

    function getRandomPosition() {
        const x = app.Helpers.random(1, app.Core.config.ceilCount - 2),
            y = app.Helpers.random(1, app.Core.config.ceilCount - 2);

        return [x, y];
    }

    function setPosition() {
        const pos = getRandomPosition();

        if (app.Actions.checkCollision.gameObject(pos)) {
            return setPosition();
        }

        return pos;
    }

    return {
        create: GameObject
    };
}(window.SnakeJS));

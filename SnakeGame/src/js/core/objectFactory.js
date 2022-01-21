window.SnakeJS.Core.var.objectFactory = (function (app) {
    'use strict';
    const modules = app.Modules;

    return {
        makeSnake() {
            return new modules.snake.create();
        },
        makeApple() {
            return new modules.apple.create();
        },
        makeCarrot() {
            return new modules.carrot.create();
        },
        makeCake() {
            return new modules.cake.create();
        },
        makeWaterMelon() {
            return new modules.watermelon.create();
        },
        makeStone() {
            return new modules.stone.create();
        },
        makeWaste() {
            return new modules.waste.create();
        },
        makeMushroom() {
            return new modules.mushroom.create();
        }
    };
}(window.SnakeJS));

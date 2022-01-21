window.SnakeJS.GameLogic = (function (app) {
    const vars = app.Core.var,
        conf = app.Core.config;

    function createGameObject() {
        let rnd,
            obj = null;

        const objectFactory = vars.objectFactory,
            gameObjects = vars.gameObjects,
            totalScore = vars.totalScore;

        if (totalScore < 5) {
            obj = objectFactory.makeApple();
        } else if (totalScore < 20) {
            rnd = app.Helpers.random(0, 50);
            if (rnd > 40) {
                obj = objectFactory.makeCarrot();
            } else if (rnd > 15) {
                gameObjects.push(objectFactory.makeStone());
                obj = objectFactory.makeApple();
            } else {
                obj = objectFactory.makeApple();
            }
        } else if (totalScore >= 15) {
            rnd = app.Helpers.random(0, 50);
            if (rnd > 45) {
                gameObjects.push(objectFactory.makeMushroom());
                obj = objectFactory.makeCarrot();
            } else if (rnd > 40) {
                gameObjects.push(objectFactory.makeCake());
                obj = objectFactory.makeApple();
            } else if (rnd > 35) {
                obj = objectFactory.makeCarrot();
            } else if (rnd > 30) {
                gameObjects.push(objectFactory.makeWaterMelon());
                obj = objectFactory.makeApple();
            } else if (rnd > 25) {
                gameObjects.push(objectFactory.makeWaste());
                obj = objectFactory.makeCarrot();
            } else if (rnd > 20) {
                gameObjects.push(objectFactory.makeStone());
                obj = objectFactory.makeApple();
            } else {
                obj = objectFactory.makeApple();
            }
        }

        return obj;
    }

    function updateParams(score) {
        conf.timeDelay *= conf.timeIncrement;
        vars.totalScore += score;
    }

    return {
        createGameObject,
        updateParams
    };
}(window.SnakeJS));

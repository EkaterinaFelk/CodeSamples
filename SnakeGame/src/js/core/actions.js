window.SnakeJS.Actions = (function (app) {
    const vars = app.Core.var,
        conf = app.Core.config,

        checkCollision = {
            snake() {
                const head = vars.snake.posArray[0];

                return isCoordInBorder(head) || isCoordInSnake(head) || isCoordInObstacle(head);
            },

            gameObject(pos) {
                return isCoordInSnake(pos) || isCoordInObstacle(pos) || isCoordInGameObject(pos);
            }
        };

    function isCoordInSnake(coord) {
        let isInArray = false;
        const arr = vars.snake.posArray.slice(1),
            maxSnake = arr.length;

        for (let i = 0; i < maxSnake; i++) {
            if (app.Helpers.equalCoordinates(coord, arr[i])) {
                isInArray = true;
            }
        }
        return isInArray;
    }

    function isCoordInObstacle(coord) {
        let isInArray = false;
        const maxObstacle = app.Map.config.obstacle.length;

        for (let i = 0; i < maxObstacle; i++) {
            if (app.Helpers.isCoordInObstacle(coord, app.Map.config.obstacle[i])) {
                isInArray = true;
            }
        }
        return isInArray;
    }

    function isCoordInBorder(coord) {
        const snakeX = coord[0],
            snakeY = coord[1],
            minX = 1,
            minY = 1,
            maxX = conf.ceilCount - 1,
            maxY = conf.ceilCount - 1,
            horizontalBorder = snakeX < minX || snakeX >= maxX,
            verticalBorder = snakeY < minY || snakeY >= maxY;

        return horizontalBorder || verticalBorder;
    }

    function isCoordInGameObject(coord) {
        let isInArray = false,
            max = vars.gameObjects.length,
            x = 0,
            y = 0;

        for (let i = 0; i < max; i++) {
            x = vars.gameObjects[i].getX();
            y = vars.gameObjects[i].getY();

            if (app.Helpers.equalCoordinates(coord, [x, y])) {
                isInArray = true;
            }
        }

        return isInArray;
    }

    function isEatGameObject() {
        let x = 0,
            y = 0,
            res = false;

        for (let i = 0; i < vars.gameObjects.length; i++) {
            x = vars.gameObjects[i].getX();
            y = vars.gameObjects[i].getY();

            switch (vars.snake.nextDirection) {
                case 'left':
                    x += 1;
                    break;
                case 'up':
                    y += 1;
                    break;
                case 'right':
                    x -= 1;
                    break;
                case 'down':
                    y -= 1;
                    break;
                default:
                    throw ('Invalid direction');
            }

            if (app.Helpers.equalCoordinates(vars.snake.posArray[0], [x, y])) {
                res = true;
                eatGameObject(i);
            }
        }

        return res;
    }

    function eatGameObject(i) {
        const gameObj = vars.gameObjects[i],
            shrinkCount = gameObj.getShrink(),
            score = gameObj.getScore();

        app.GameLogic.updateParams(score);

        if (gameObj.getDie() === true) {
            vars.gameover = true;
        }

        if (shrinkCount && vars.snake.posArray.length >= shrinkCount + 2) {
            vars.snake.shrink(shrinkCount);
            vars.gameObjects[i] = vars.objectFactory.makeWaste();
        } else if (gameObj.isCreateNextObj()) {
            vars.gameObjects[i] = app.GameLogic.createGameObject();
            vars.snake.grow();
        } else {
            vars.gameObjects.splice(i, 1);
            vars.snake.grow();
        }
    }

    function isGameOver() {
        if (checkCollision.snake()) {
            vars.gameover = true;
        }
    }

    function gameObjectDelay() {
        for (let i = 0; i < vars.gameObjects.length; i++) {
            if (vars.gameObjects[i].delay) {
                vars.gameObjects[i].delay -= vars.timeDelay;

                if (vars.gameObjects[i].delay <= 0) {
                    vars.gameObjects.splice(i, 1);
                }
            }
        }
    }

    return {
        checkCollision,
        isEatGameObject,
        eatGameObject,
        isGameOver,
        gameObjectDelay
    };
}(window.SnakeJS));

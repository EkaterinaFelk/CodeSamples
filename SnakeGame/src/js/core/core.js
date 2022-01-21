window.SnakeJS.Core.game = (function (app) {
    let last = performance.now(),
        dt = 0,
        now,
        canvas,
        gameLoop = null;

    const vars = app.Core.var,
        conf = app.Core.config,
        map = app.Map;

    gameLoop = () => {
        now = performance.now();
        dt = dt + Math.min(1, (now - last) / vars.timeDelay);
        while (dt > 1) {
            dt = dt - 1;
            update();
        }
        last = now;

        if (vars.timer === 0) {
            timeIsUp();
        } else if (vars.gameover) {
            gameOver();
        } else {
            requestAnimationFrame(gameLoop);
        }
    };

    function load() {
        setCanvas();
        bindEvents();
        map.Image.loadImageAll().then(() => {
            loadState();
        });
    }

    function loadState() {
        startState();
        update();
        map.render.startView();
    }

    function setCanvas() {
        canvas = document.getElementById('snakeGame');
        canvas.setAttribute('width', conf.fieldSize);
        canvas.setAttribute('height', conf.fieldSize);
        vars.ctx = canvas.getContext('2d');
    }

    function init() {
        startState();
        vars.gameObjects.push(app.GameLogic.createGameObject());
        requestAnimationFrame(gameLoop);
    }

    function startState() {
        vars.gameover = false;
        vars.totalScore = 0;
        vars.snake = vars.objectFactory.makeSnake();
        vars.timeDelay = conf.defaultDelay;
        vars.timer = conf.gameTimer;
        vars.gameObjects = [];
    }

    function gameOver() {
        vars.gameover = true;
        map.render.gameOver();
    }

    function timeIsUp() {
        vars.gameover = true;
        app.Map.render.timeIsUp();
    }

    function update() {
        vars.timer -= vars.timeDelay;
        app.Actions.gameObjectDelay();
        if (!app.Actions.isEatGameObject()) {
            vars.snake.move();
        }
        app.Actions.isGameOver();
        renderAll();
    }

    function renderAll() {
        vars.ctx.clearRect(0, 0, conf.fieldSize, conf.fieldSize);
        map.render.scene();
        map.render.border();
        map.render.obstacle();
        map.render.snake();
        map.render.gameObject();
        map.render.score();
        map.render.timer();
    }

    function bindEvents() {
        document.onkeydown = function (event) {
            const key = event.which,
                direction = app.Keyboard.keymap[key];

            if (direction) {
                vars.snake.changeDirection(direction);
                event.preventDefault();
            }

            if (key === 32) {
                init();
            }
        };
    }

    return {
        load
    };
}(window.SnakeJS));

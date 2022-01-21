window.SnakeJS.Map.render = (function (app) {
    const vars = app.Core.var,
        conf = app.Core.config,
        mapconf = app.Map.config;

    function scene() {
        vars.ctx.save();
        vars.ctx.fillStyle = vars.ctx.createPattern(vars.sceneImg, 'repeat');
        vars.ctx.fillRect(0, 0, conf.fieldSize, conf.fieldSize);
        vars.ctx.restore();
    }

    function border() {
        vars.ctx.save();
        vars.ctx.strokeStyle = '#008080';
        vars.ctx.lineWidth = conf.ceilSize;
        vars.ctx.lineCap = 'square';

        vars.ctx.beginPath();
        vars.ctx.moveTo(mapconf.border[0][0], mapconf.border[0][1]);

        for (let i = 0; i < mapconf.border.length; i++) {
            vars.ctx.lineTo(mapconf.border[i][0], mapconf.border[i][1]);
        }
        vars.ctx.lineTo(mapconf.border[0][0], mapconf.border[0][1]);

        vars.ctx.stroke();
        vars.ctx.restore();
    }

    function obstacle() {
        vars.ctx.save();
        vars.ctx.strokeStyle = '#008080';
        vars.ctx.lineWidth = conf.ceilSize;
        vars.ctx.lineCap = 'square';

        vars.ctx.beginPath();

        for (let i = 0; i < mapconf.obstacle.length; i++) {
            vars.ctx.moveTo(mapconf.obstacle[i][0], mapconf.obstacle[i][1]);
            vars.ctx.lineTo(mapconf.obstacle[i][2], mapconf.obstacle[i][3]);
        }

        vars.ctx.stroke();
        vars.ctx.restore();
    }

    function timer() {
        const posX = 500,
            posY = 15,
            time = app.Helpers.parseTime();

        vars.ctx.save();
        vars.ctx.font = 'bold 30px sans-serif';
        vars.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        vars.ctx.textAlign = 'center';
        vars.ctx.textBaseline = 'middle';
        vars.ctx.fillText(`Time: ${time.min.toString()}:${time.sec.toString()}`, posX, posY);
        vars.ctx.restore();
    }

    function score() {
        const posX = 90,
            posY = 15;

        vars.ctx.save();
        vars.ctx.font = 'bold 30px sans-serif';
        vars.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        vars.ctx.textAlign = 'center';
        vars.ctx.textBaseline = 'middle';
        vars.ctx.fillText(`Score: ${vars.totalScore.toString()}`, posX, posY);
        vars.ctx.restore();
    }

    function gameOver() {
        vars.ctx.save();
        vars.ctx.font = 'bold 40px sans-serif';
        vars.ctx.fillStyle = '#ff3300';
        vars.ctx.textAlign = 'center';
        vars.ctx.textBaseline = 'middle';
        vars.ctx.strokeStyle = '#000';
        vars.ctx.lineWidth = 5;
        vars.ctx.strokeText('Game Over', conf.fieldCenter, conf.fieldCenter - 20);
        vars.ctx.fillText('Game Over', conf.fieldCenter, conf.fieldCenter - 20);
        vars.ctx.font = 'bold 30px sans-serif';
        vars.ctx.fillStyle = '#f2f2f2';
        vars.ctx.strokeText('Press space to restart', conf.fieldCenter, conf.fieldCenter + 20);
        vars.ctx.fillText('Press space to restart', conf.fieldCenter, conf.fieldCenter + 20);
        vars.ctx.restore();
    }

    function timeIsUp() {
        const message = `Time is up! You get ${vars.totalScore.toString()} score! Great!`;

        vars.ctx.save();
        vars.ctx.font = 'bold 30px sans-serif';
        vars.ctx.fillStyle = '#00cc99';
        vars.ctx.textAlign = 'center';
        vars.ctx.textBaseline = 'middle';
        vars.ctx.strokeStyle = '#000';
        vars.ctx.lineWidth = 5;
        vars.ctx.strokeText(message, conf.fieldCenter, conf.fieldCenter - 20);
        vars.ctx.fillText(message, conf.fieldCenter, conf.fieldCenter - 20);
        vars.ctx.font = 'bold 30px sans-serif';
        vars.ctx.fillStyle = '#f2f2f2';
        vars.ctx.strokeText('Press space to restart', conf.fieldCenter, conf.fieldCenter + 20);
        vars.ctx.fillText('Press space to restart', conf.fieldCenter, conf.fieldCenter + 20);
        vars.ctx.restore();
    }

    function startView() {
        vars.ctx.save();
        vars.ctx.fillStyle = '#e6e600';
        vars.ctx.textAlign = 'center';
        vars.ctx.textBaseline = 'middle';
        vars.ctx.strokeStyle = '#000';
        vars.ctx.lineWidth = 5;
        vars.ctx.font = 'bold 40px sans-serif';
        vars.ctx.strokeText('Press space to start', conf.fieldCenter, conf.fieldCenter);
        vars.ctx.fillText('Press space to start', conf.fieldCenter, conf.fieldCenter);
        vars.ctx.restore();
    }

    function snake() {
        const max = vars.snake.posArray.length,
            ceilSize = conf.ceilSize;
        let segment,
            segx,
            segy,
            tx,
            ty,
            nseg,
            pseg;

        vars.ctx.save();

        for (let i = 0; i < max; i++) {
            segment = vars.snake.posArray[i];
            segx = segment[0];
            segy = segment[1];

            pseg = vars.snake.posArray[i - 1];
            nseg = vars.snake.posArray[i + 1];

            tx = 0;
            ty = 0;

            switch (i) {
                case 0:
                    if (segy < nseg[1]) {
                        tx = 3; ty = 0;
                    } else if (segx > nseg[0]) {
                        tx = 4; ty = 0;
                    } else if (segy > nseg[1]) {
                        tx = 4; ty = 1;
                    } else if (segx < nseg[0]) {
                        tx = 3; ty = 1;
                    }
                    break;
                case (max - 1):
                    if (pseg[1] < segy) {
                        tx = 3; ty = 2;
                    } else if (pseg[0] > segx) {
                        tx = 4; ty = 2;
                    } else if (pseg[1] > segy) {
                        tx = 4; ty = 3;
                    } else if (pseg[0] < segx) {
                        tx = 3; ty = 3;
                    }
                    break;
                default:
                    if (pseg[0] < segx && nseg[0] > segx || nseg[0] < segx && pseg[0] > segx) {
                        tx = 1; ty = 0;
                    } else if (pseg[0] < segx && nseg[1] > segy || nseg[0] < segx && pseg[1] > segy) {
                        tx = 2; ty = 0;
                    } else if (pseg[1] < segy && nseg[1] > segy || nseg[1] < segy && pseg[1] > segy) {
                        tx = 2; ty = 1;
                    } else if (pseg[1] < segy && nseg[0] < segx || nseg[1] < segy && pseg[0] < segx) {
                        tx = 2; ty = 2;
                    } else if (pseg[0] > segx && nseg[1] < segy || nseg[0] > segx && pseg[1] < segy) {
                        tx = 0; ty = 1;
                    } else if (pseg[1] > segy && nseg[0] > segx || nseg[1] > segy && pseg[0] > segx) {
                        tx = 0; ty = 0;
                    }
                    break;
            }

            segx = app.Helpers.ceilToPx(segx);
            segy = app.Helpers.ceilToPx(segy);

            vars.ctx.drawImage(vars.snakeImg, tx * 64, ty * 64, 64, 64, segx, segy, ceilSize, ceilSize);
        }

        vars.ctx.restore();
    }

    function gameObject() {
        const ceilSize = conf.ceilSize;
        let x,
            y,
            gameObj,
            tx,
            ty;

        if (vars.gameObjects.length) {
            vars.ctx.save();
            for (let i = 0; i < vars.gameObjects.length; i++) {
                gameObj = vars.gameObjects[i];
                x = app.Helpers.ceilToPx(gameObj.getX());
                y = app.Helpers.ceilToPx(gameObj.getY());
                tx = gameObj.getImagePos().x;
                ty = gameObj.getImagePos().y;

                vars.ctx.drawImage(vars.gameObjImg, tx * 32, ty * 32, 32, 32, x, y, ceilSize, ceilSize);
            }

            vars.ctx.restore();
        }
    }

    return {
        scene,
        border,
        obstacle,
        score,
        gameOver,
        timeIsUp,
        snake,
        gameObject,
        startView,
        timer
    };
}(window.SnakeJS));

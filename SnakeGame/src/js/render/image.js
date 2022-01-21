window.SnakeJS.Map.Image = (function (app) {
    'use strict';
    const conf = window.SnakeJS.Core.config,
        vars = window.SnakeJS.Core.var,
        loadImage = {
            scene: app.Helpers.loadImg(conf.sceneImgSrc),
            snake: app.Helpers.loadImg(conf.snakeImgSrc),
            gameObj: app.Helpers.loadImg(conf.gameObjImgSrc)
        };

    function loadImageAll() {
        const
            imgMap = [
                ['sceneImg', 'scene'],
                ['snakeImg', 'snake'],
                ['gameObjImg', 'gameObj']
            ];

        let loadedCount = 0,
            promise = null;

        promise = new Promise((resolve) => {
            function counter() {
                loadedCount++;

                if (loadedCount === imgMap.length) {
                    resolve('loaded');
                }
            }

            for (let i = 0; i < imgMap.length; i++) {
                vars[imgMap[i][0]] = loadImage[imgMap[i][1]];
                vars[imgMap[i][0]].onload = counter;
            }
        });

        return promise;
    }

    return {
        loadImageAll
    };
}(window.SnakeJS));

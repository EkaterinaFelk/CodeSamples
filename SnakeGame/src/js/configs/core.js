window.SnakeJS.Core.config = {
    fieldSize: 600,
    ceilCount: 20,
    defaultDelay: 200,
    gameTimer: 300000,
    timeIncrement: 0.99,
    sceneImgSrc: '/assets/grass.jpg',
    snakeImgSrc: '/assets/snake-graphics.png',
    gameObjImgSrc: '/assets/gameObjects.png'
};

window.SnakeJS.Core.config.ceilSize = window.SnakeJS.Core.config.fieldSize / window.SnakeJS.Core.config.ceilCount;
window.SnakeJS.Core.config.fieldCenter = window.SnakeJS.Core.config.fieldSize / 2;
window.SnakeJS.Core.config.ceilCenter = window.SnakeJS.Core.config.ceilSize / 2;

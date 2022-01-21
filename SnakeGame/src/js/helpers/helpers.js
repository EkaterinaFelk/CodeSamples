window.SnakeJS.Helpers = (function (app) {
    const conf = app.Core.config;

    function equalCoordinates(coord1, coord2) {
        return coord1[0] === coord2[0] && coord1[1] === coord2[1];
    }

    function isCoordInObstacle(coord1, coord2) {
        const x = app.Helpers.ceilToPx(coord1[0]),
            y = app.Helpers.ceilToPx(coord1[1]),
            ceilCenter = conf.ceilCenter;

        return (x >= coord2[0] - ceilCenter && y >= coord2[1] - ceilCenter)
            && (x <= coord2[2] - ceilCenter && y <= coord2[3] - ceilCenter);
    }

    function inRangeCoordinates(coord1, coord2) {
        return (coord1[0] >= coord2[0] && coord1[1] >= coord2[1])
            && (coord1[0] <= coord2[2] && coord1[1] <= coord2[3]);
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function ceilToPx(coord) {
        return coord * conf.ceilSize;
    }

    function pxToCeil(coord) {
        return coord / conf.ceilSize;
    }

    function loadImg(imgSrc) {
        let img = new Image();

        img.src = imgSrc;
        return img;
    }

    function parseTime() {
        const time = (app.Core.var.timer / 1000).toFixed(0),
            min = Math.floor(time / 60),
            sec = time - min * 60;

        return { time, min, sec };
    }

    return {
        equalCoordinates,
        isCoordInObstacle,
        inRangeCoordinates,
        random,
        ceilToPx,
        pxToCeil,
        loadImg,
        parseTime
    };
}(window.SnakeJS));

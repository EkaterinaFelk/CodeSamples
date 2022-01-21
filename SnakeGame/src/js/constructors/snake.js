window.SnakeJS.Modules.snake = (function (app) {
    function Snake() {
        this.posArray = [];
        this.direction = 'right';

        this.posArray.push([2, 4]);
        this.posArray.push([1, 4]);

        this.nextDirection = this.direction;

        return this;
    }

    Snake.prototype = {
        constuctor: Snake,

        changeDirection(newDirection) {
            let allowedDirections;

            switch (this.direction) {
                case 'left':
                case 'right':
                    allowedDirections = ['up', 'down'];
                    break;
                case 'up':
                case 'down':
                    allowedDirections = ['left', 'right'];
                    break;
                default:
                    throw ('Invalid direction');
            }
            if (allowedDirections.indexOf(newDirection) > -1) {
                this.nextDirection = newDirection;
            }
        },

        move() {
            this.direction = this.nextDirection;
            addHead(this);
            removeTail(this);
        },

        grow() {
            this.direction = this.nextDirection;
            addHead(this);
        },

        shrink(shrinkCount) {
            app.Core.var.snake.posArray.splice(-shrinkCount, shrinkCount);
        }
    };

    function addHead(obj) {
        const nextStep = obj.posArray[0].slice();

        switch (obj.direction) {
            case 'left':
                nextStep[0] -= 1;
                break;
            case 'up':
                nextStep[1] -= 1;
                break;
            case 'right':
                nextStep[0] += 1;
                break;
            case 'down':
                nextStep[1] += 1;
                break;
            default:
                throw ('Invalid direction');
        }

        obj.posArray.unshift(nextStep);
    }

    function removeTail(obj) {
        obj.posArray.pop();
    }

    return {
        create: Snake
    };
}(window.SnakeJS));

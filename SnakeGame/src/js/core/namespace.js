window.SnakeJS = window.SnakeJS || {};

window.SnakeJS.namespace = function (nstring) {
    let parts = nstring.split('.'),
        parent = window.SnakeJS,
        i;

    if (parts[0] === 'SnakeJS') {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

window.SnakeJS.namespace('SnakeJS.Core');
window.SnakeJS.namespace('SnakeJS.Helpers');
window.SnakeJS.namespace('SnakeJS.Actions');
window.SnakeJS.namespace('SnakeJS.GameLogic');
window.SnakeJS.namespace('SnakeJS.Map');
window.SnakeJS.namespace('SnakeJS.Keyboard');
window.SnakeJS.namespace('SnakeJS.Modules');

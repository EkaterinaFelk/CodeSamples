window.SnakeJS.Map.config = {
    obstacle: [
        [
            window.SnakeJS.Core.config.fieldCenter - window.SnakeJS.Core.config.ceilCenter - window.SnakeJS.Core.config.ceilSize * 3,
            window.SnakeJS.Core.config.fieldCenter - window.SnakeJS.Core.config.ceilCenter,
            window.SnakeJS.Core.config.fieldCenter + window.SnakeJS.Core.config.ceilCenter + window.SnakeJS.Core.config.ceilSize * 3,
            window.SnakeJS.Core.config.fieldCenter - window.SnakeJS.Core.config.ceilCenter
        ]
    ],
    border: [
        [window.SnakeJS.Core.config.ceilCenter, window.SnakeJS.Core.config.ceilCenter],
        [window.SnakeJS.Core.config.fieldSize - window.SnakeJS.Core.config.ceilCenter, window.SnakeJS.Core.config.ceilCenter],
        [window.SnakeJS.Core.config.fieldSize - window.SnakeJS.Core.config.ceilCenter, window.SnakeJS.Core.config.fieldSize - window.SnakeJS.Core.config.ceilCenter],
        [window.SnakeJS.Core.config.ceilCenter, window.SnakeJS.Core.config.fieldSize - window.SnakeJS.Core.config.ceilCenter]
    ]
};

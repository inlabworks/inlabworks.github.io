/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/audios/collision.wav":
/*!*****************************************!*\
  !*** ./src/assets/audios/collision.wav ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "14299de0288b9cb7d76669368bfbfd46.wav");

/***/ }),

/***/ "./src/assets/audios/level-up.wav":
/*!****************************************!*\
  !*** ./src/assets/audios/level-up.wav ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "162d2fa7c9048280794da9dda52e4c78.wav");

/***/ }),

/***/ "./src/assets/audios/movement.wav":
/*!****************************************!*\
  !*** ./src/assets/audios/movement.wav ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0d132ba9ab4744e3fb36261e49d3cd9e.wav");

/***/ }),

/***/ "./src/assets/audios/treasure.wav":
/*!****************************************!*\
  !*** ./src/assets/audios/treasure.wav ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "07e00448ad03a50e0f52a3eee9fe5f2d.wav");

/***/ }),

/***/ "./src/game/AudioPlayer.ts":
/*!*********************************!*\
  !*** ./src/game/AudioPlayer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audios_collision_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audios/collision.wav */ "./src/assets/audios/collision.wav");
/* harmony import */ var _assets_audios_level_up_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/audios/level-up.wav */ "./src/assets/audios/level-up.wav");
/* harmony import */ var _assets_audios_movement_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/audios/movement.wav */ "./src/assets/audios/movement.wav");
/* harmony import */ var _assets_audios_treasure_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/audios/treasure.wav */ "./src/assets/audios/treasure.wav");




var AudioAsset;
(function (AudioAsset) {
    AudioAsset["Collision"] = "collision";
    AudioAsset["LevelUp"] = "level-up";
    AudioAsset["Movement"] = "movement";
    AudioAsset["Treasure"] = "treasure";
})(AudioAsset || (AudioAsset = {}));
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer() {
        this.audioMap = new Map();
    }
    AudioPlayer.prototype.collision = function () {
        this.play(AudioAsset.Collision, _assets_audios_collision_wav__WEBPACK_IMPORTED_MODULE_0__["default"]);
    };
    AudioPlayer.prototype.levelUp = function () {
        this.play(AudioAsset.LevelUp, _assets_audios_level_up_wav__WEBPACK_IMPORTED_MODULE_1__["default"]);
    };
    AudioPlayer.prototype.movement = function () {
        this.play(AudioAsset.Movement, _assets_audios_movement_wav__WEBPACK_IMPORTED_MODULE_2__["default"]);
    };
    AudioPlayer.prototype.treasure = function () {
        this.play(AudioAsset.Treasure, _assets_audios_treasure_wav__WEBPACK_IMPORTED_MODULE_3__["default"]);
    };
    AudioPlayer.prototype.play = function (audioAsset, audioFile) {
        var cachedAudio = this.audioMap.get(audioAsset);
        if (!cachedAudio) {
            this.audioMap.set(audioAsset, new Audio(audioFile));
            cachedAudio = this.audioMap.get(audioAsset);
        }
        cachedAudio.play();
    };
    return AudioPlayer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AudioPlayer());


/***/ }),

/***/ "./src/game/Empty.ts":
/*!***************************!*\
  !*** ./src/game/Empty.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GridElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridElement */ "./src/game/GridElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Empty = /** @class */ (function (_super) {
    __extends(Empty, _super);
    function Empty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Empty.prototype.getType = function () {
        return _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Empty;
    };
    Empty.prototype.draw = function (x, y, width, height) {
        this.ctx.clearRect(x * width, y * height, width, height);
    };
    return Empty;
}(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Empty);


/***/ }),

/***/ "./src/game/Game.ts":
/*!**************************!*\
  !*** ./src/game/Game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./src/game/Grid.ts");
/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score */ "./src/game/Score.ts");
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameOver */ "./src/game/GameOver.ts");
/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instructions */ "./src/game/Instructions.ts");
/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioPlayer */ "./src/game/AudioPlayer.ts");





var INITIAL_REFRESH_RATE = 700;
var ARROW_KEYS = [37, 38, 39, 40];
var Game = /** @class */ (function () {
    function Game(canvas) {
        var _this = this;
        this.isPlaying = false;
        this.isGameOver = false;
        this.score = 0;
        this.scoreAccumulation = 0;
        this.lastTimestamp = 0;
        this.refreshRate = INITIAL_REFRESH_RATE;
        this.ctx = canvas.getContext("2d");
        this.$score = new _Score__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
        this.drawInstructions();
        canvas.addEventListener("click", function () {
            if (!_this.isPlaying) {
                _this.start();
            }
        });
        window.addEventListener("keydown", function (e) {
            if (!_this.isPlaying && ARROW_KEYS.includes(e.keyCode)) {
                _this.start();
            }
        });
    }
    Game.prototype.start = function () {
        this.$grid = new _Grid__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.draw.bind(this), this.onGameOver.bind(this), this.onScoreIncrease.bind(this));
        this.$score = new _Score__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
        this.score = 0;
        this.scoreAccumulation = 0;
        this.refreshRate = INITIAL_REFRESH_RATE;
        this.isGameOver = false;
        this.isPlaying = true;
        this.lastTimestamp = window.performance.now();
        this.draw();
        window.requestAnimationFrame(this.tick.bind(this));
    };
    Game.prototype.update = function () {
        this.$grid.update();
        this.$score.update(this.score);
    };
    Game.prototype.draw = function () {
        this.$grid.draw();
        this.$score.draw();
    };
    Game.prototype.drawInstructions = function () {
        new _Instructions__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, this.$score).draw();
    };
    Game.prototype.onScoreIncrease = function (score) {
        this.score += score;
        this.scoreAccumulation += score;
        if (this.scoreAccumulation >= 10) {
            this.onLevelUp();
        }
        if (this.score > 0 && this.score % 50 === 0) {
            _AudioPlayer__WEBPACK_IMPORTED_MODULE_4__["default"].levelUp();
        }
    };
    Game.prototype.tick = function () {
        if (this.isGameOver) {
            return this.gameOverHandler();
        }
        var prev = this.lastTimestamp;
        var now = window.performance.now();
        var ellapsed = now - prev;
        if (ellapsed >= this.refreshRate) {
            this.update();
            this.draw();
            this.lastTimestamp = now;
            // each surviving tick increases the score by 1
            this.onScoreIncrease(1);
        }
        window.requestAnimationFrame(this.tick.bind(this));
    };
    Game.prototype.onGameOver = function () {
        this.isGameOver = true;
    };
    Game.prototype.onLevelUp = function () {
        this.scoreAccumulation = 0;
        this.refreshRate = Math.max(250, this.refreshRate - this.refreshRate * 0.05);
    };
    Game.prototype.gameOverHandler = function () {
        this.isPlaying = false;
        this.$score.setNewHighScore(this.score);
        new _GameOver__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, this.$score).draw();
        _AudioPlayer__WEBPACK_IMPORTED_MODULE_4__["default"].collision();
    };
    return Game;
}());



/***/ }),

/***/ "./src/game/GameOver.ts":
/*!******************************!*\
  !*** ./src/game/GameOver.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GameOver = /** @class */ (function () {
    function GameOver(ctx, $score) {
        this.ctx = ctx;
        this.$score = $score;
    }
    GameOver.prototype.draw = function () {
        var height = this.ctx.canvas.height;
        var width = this.ctx.canvas.width;
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, width, height);
        this.ctx.font = "2.5rem monospace";
        this.ctx.fillStyle = "#CC0000";
        this.ctx.fillText("GAME", width / 2 - 45, height / 2 - 45);
        this.ctx.fillText("OVER", width / 2 - 44, height / 2 - 10);
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.font = "0.85rem monospace";
        this.ctx.fillText("PUNTUACI\u00D3N: " + this.$score.getScore(), width / 2 - 48, height / 2 + 35);
        this.ctx.font = "0.80rem monospace";
        if (this.$score.isNewHighScore()) {
            this.ctx.fillText("NUEVA MEJOR PUNTUACIÓN!!", width / 2 - 85, height / 2 + 55);
        }
        this.ctx.font = "0.75rem monospace";
        this.ctx.fillText("pulsa las flechas o haz clic para jugar de nuevo", width / 2 - 160, height / 2 + (this.$score.isNewHighScore() ? 120 : 85));
    };
    return GameOver;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOver);


/***/ }),

/***/ "./src/game/Grid.ts":
/*!**************************!*\
  !*** ./src/game/Grid.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GridElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridElement */ "./src/game/GridElement.ts");
/* harmony import */ var _GridElementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridElementFactory */ "./src/game/GridElementFactory.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/game/Player.ts");
/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudioPlayer */ "./src/game/AudioPlayer.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var COLUMNS = 3;
var ROWS = 5;
var TRIGGERING_TICKS = 2;
var Grid = /** @class */ (function () {
    function Grid(ctx, drawHandler, gameOverHandler, scoreIncreaseHandler) {
        this.factory = new _GridElementFactory__WEBPACK_IMPORTED_MODULE_1__.GridElementFactory(ctx);
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, this.onPlayerPositionChange.bind(this));
        this.grid = this.generateGrid();
        this.ticks = 0;
        this.elementHeight = ctx.canvas.height / ROWS;
        this.elementWidth = ctx.canvas.width / COLUMNS;
        this.drawHandler = drawHandler;
        this.gameOverHandler = gameOverHandler;
        this.scoreIncreaseHandler = scoreIncreaseHandler;
    }
    Grid.prototype.update = function () {
        var _this = this;
        this.ticks++;
        this.updateGridElements();
        // every N ticks will a new random element be added to the grid,
        // otherwise, the grid is just updated and drawn with no further changes
        if (this.ticks % TRIGGERING_TICKS !== 0) {
            this.draw();
            return;
        }
        var elementsToAdd = [];
        var n = this.generateRandomNumber();
        var x = n % COLUMNS;
        if (n < 65) {
            // a single obstacle (65% chance)
            elementsToAdd.push([this.factory.create(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Obstacle), x]);
        }
        else if (n >= 65 && n < 80) {
            // treasure (15% chance)
            elementsToAdd.push([this.factory.create(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Treasure), x]);
        }
        else if (n >= 80 && n <= 100) {
            // 2 obstacles at the same time (20% chance)
            var otherObstacleX = this.generateRandomNumber() % COLUMNS;
            while (otherObstacleX === x) {
                otherObstacleX = this.generateRandomNumber() % COLUMNS;
            }
            elementsToAdd.push([this.factory.create(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Obstacle), x]);
            elementsToAdd.push([
                this.factory.create(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Obstacle),
                otherObstacleX,
            ]);
        }
        if (elementsToAdd) {
            elementsToAdd.forEach(function (_a) {
                var el = _a[0], x = _a[1];
                _this.addElementToGrid(el, x);
            });
        }
    };
    Grid.prototype.draw = function () {
        var _this = this;
        this.grid.forEach(function (position, index) {
            var x = index % COLUMNS;
            var y = (index - x) / COLUMNS;
            position.draw(x, y, _this.elementWidth, _this.elementHeight);
        });
    };
    Grid.prototype.generateGrid = function () {
        var _this = this;
        var grid = new Array(COLUMNS * ROWS)
            .fill(0)
            .map(function () { return _this.factory.create(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Empty); });
        grid[grid.length - 2] = this.player;
        return grid;
    };
    Grid.prototype.onPlayerPositionChange = function (delta) {
        // if the player position didn't change (because it's already at its limits),
        // then don't do anything else, so we avoid unnecessary updates to the grid
        if (delta === 0) {
            return;
        }
        var newGrid = __spreadArray([], this.grid, true);
        var playerIndex = newGrid.findIndex(function (position) { return position.getType() === _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Player; });
        var newPos = playerIndex + delta;
        var type = newGrid[newPos].getType();
        if (_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Obstacle === type) {
            return this.onGameOver();
        }
        else if (_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Treasure === type) {
            this.onTreasureCollected();
        }
        newGrid[playerIndex + delta] = this.player;
        newGrid[playerIndex] = this.factory.create(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Empty);
        this.grid = newGrid;
        this.drawHandler();
        _AudioPlayer__WEBPACK_IMPORTED_MODULE_3__["default"].movement();
    };
    Grid.prototype.updateGridElements = function () {
        var length = this.grid.length - 1;
        var newGrid = __spreadArray([], this.grid, true);
        for (var index = length; index >= 0; index--) {
            var newPos = index + COLUMNS;
            var element = this.grid[index];
            var type = element.getType();
            // leave the player where it was
            if (type === _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Player) {
                continue;
            }
            // leave empty spaces where they were
            if (type === _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Empty) {
                newGrid[index] = element;
                continue;
            }
            // resets the moving element position to an empty space
            newGrid[index] = this.factory.create(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Empty);
            // since the position has been reset to an empty space, any elements
            // that exit the grid are ignored, since they have already been reset
            if (newPos > length) {
                continue;
            }
            // if the player didn't avoid the element
            if (this.grid[newPos].getType() === _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Player) {
                // but it was a treasure collected, the game keeps going
                if (type === _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Treasure) {
                    this.onTreasureCollected();
                }
                else {
                    this.onGameOver();
                }
                continue;
            }
            // any non-player, non-empty elements are moved to their new positions
            newGrid[newPos] = element;
        }
        this.grid = newGrid;
    };
    Grid.prototype.generateRandomNumber = function () {
        return Math.round(Math.random() * 100);
    };
    Grid.prototype.addElementToGrid = function (element, x) {
        this.grid.splice(x, 1, element);
    };
    Grid.prototype.onGameOver = function () {
        this.player.onGameOver();
        this.gameOverHandler();
    };
    Grid.prototype.onTreasureCollected = function () {
        this.scoreIncreaseHandler(5);
        _AudioPlayer__WEBPACK_IMPORTED_MODULE_3__["default"].treasure();
    };
    return Grid;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);


/***/ }),

/***/ "./src/game/GridElement.ts":
/*!*********************************!*\
  !*** ./src/game/GridElement.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridElementType": () => (/* binding */ GridElementType),
/* harmony export */   "GridElement": () => (/* binding */ GridElement)
/* harmony export */ });
var GridElementType;
(function (GridElementType) {
    GridElementType[GridElementType["Empty"] = 0] = "Empty";
    GridElementType[GridElementType["Player"] = 1] = "Player";
    GridElementType[GridElementType["Obstacle"] = 2] = "Obstacle";
    GridElementType[GridElementType["Treasure"] = 3] = "Treasure";
})(GridElementType || (GridElementType = {}));
var GridElement = /** @class */ (function () {
    function GridElement(ctx) {
        this.ctx = ctx;
    }
    return GridElement;
}());



/***/ }),

/***/ "./src/game/GridElementFactory.ts":
/*!****************************************!*\
  !*** ./src/game/GridElementFactory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridElementFactory": () => (/* binding */ GridElementFactory)
/* harmony export */ });
/* harmony import */ var _GridElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridElement */ "./src/game/GridElement.ts");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Empty */ "./src/game/Empty.ts");
/* harmony import */ var _Obstacle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Obstacle */ "./src/game/Obstacle.ts");
/* harmony import */ var _Treasure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Treasure */ "./src/game/Treasure.ts");




var GridElementFactory = /** @class */ (function () {
    function GridElementFactory(ctx) {
        this.ctx = ctx;
    }
    GridElementFactory.prototype.create = function (type) {
        switch (type) {
            case _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Obstacle:
                return new _Obstacle__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx);
            case _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Treasure:
                return new _Treasure__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx);
            default:
                return new _Empty__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
        }
    };
    return GridElementFactory;
}());



/***/ }),

/***/ "./src/game/Instructions.ts":
/*!**********************************!*\
  !*** ./src/game/Instructions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Instructions = /** @class */ (function () {
    function Instructions(ctx, $score) {
        this.ctx = ctx;
        this.$score = $score;
    }
    Instructions.prototype.draw = function () {
        var height = this.ctx.canvas.height;
        var width = this.ctx.canvas.width;
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "0.75rem monospace";
        this.ctx.fillText("pulsa las flechas o haz clic para comenzar a jugar", width / 2 - 185, height / 2);
        var highscore = this.$score.getHighScore();
        if (highscore > 0) {
            this.ctx.fillText("MEJOR PUNTUACI\u00D3N: " + highscore, width / 2 - 80, height / 2 + 35);
        }
    };
    return Instructions;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instructions);


/***/ }),

/***/ "./src/game/Obstacle.ts":
/*!******************************!*\
  !*** ./src/game/Obstacle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GridElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridElement */ "./src/game/GridElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Obstacle = /** @class */ (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Obstacle.prototype.getType = function () {
        return _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Obstacle;
    };
    Obstacle.prototype.draw = function (x, y, width, height) {
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(x * width, y * height, width, height);
        this.ctx.fillStyle = "";
    };
    return Obstacle;
}(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Obstacle);


/***/ }),

/***/ "./src/game/Player.ts":
/*!****************************!*\
  !*** ./src/game/Player.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GridElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridElement */ "./src/game/GridElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["ArrowLeft"] = 37] = "ArrowLeft";
    KeyCode[KeyCode["ArrowRight"] = 39] = "ArrowRight";
})(KeyCode || (KeyCode = {}));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(ctx, cb) {
        var _this = _super.call(this, ctx) || this;
        _this.isGameOver = false;
        _this.positionChangeHandler = cb;
        _this.position = 0;
        _this.setup();
        return _this;
    }
    Player.prototype.getType = function () {
        return _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Player;
    };
    Player.prototype.draw = function (x, y, width, height) {
        this.ctx.fillStyle = "#008000";
        this.ctx.fillRect(x * width, y * height, width, height);
        this.ctx.fillStyle = "";
    };
    Player.prototype.onGameOver = function () {
        this.isGameOver = true;
        window.removeEventListener("keydown", this.onKeyDown.bind(this));
    };
    Player.prototype.setup = function () {
        window.removeEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keydown", this.onKeyDown.bind(this));
    };
    Player.prototype.onKeyDown = function (e) {
        if (this.isGameOver) {
            return;
        }
        var delta = 0;
        if (e.keyCode === KeyCode.ArrowLeft) {
            delta = this.position > -1 ? -1 : 0;
        }
        else if (e.keyCode === KeyCode.ArrowRight) {
            delta = this.position < 1 ? 1 : 0;
        }
        this.position = this.position + delta;
        if (this.positionChangeHandler) {
            this.positionChangeHandler(delta);
        }
    };
    return Player;
}(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/game/Score.ts":
/*!***************************!*\
  !*** ./src/game/Score.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LOCAL_STORAGE_KEY = "inlab.minigame.high-score";
var Score = /** @class */ (function () {
    function Score(ctx) {
        this.score = 0;
        this.isHighScore = false;
        this.ctx = ctx;
    }
    Score.prototype.update = function (score) {
        this.score = score;
    };
    Score.prototype.draw = function () {
        var width = this.ctx.canvas.width;
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(0, 0, width, 45);
        this.ctx.font = "13px monospace";
        this.ctx.fillStyle = "#000000";
        this.ctx.fillText("PUNTUACI\u00D3N: " + this.score, width - 125, 30);
        this.ctx.fillStyle = "";
    };
    Score.prototype.getScore = function () {
        return this.score;
    };
    Score.prototype.getHighScore = function () {
        return +(window.localStorage.getItem(LOCAL_STORAGE_KEY) || 0);
    };
    Score.prototype.isNewHighScore = function () {
        return this.isHighScore;
    };
    Score.prototype.setNewHighScore = function (score) {
        if (this.getHighScore() < score) {
            this.isHighScore = true;
            window.localStorage.setItem(LOCAL_STORAGE_KEY, "" + (score - 1));
        }
        else {
            this.isHighScore = false;
        }
    };
    return Score;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);


/***/ }),

/***/ "./src/game/Treasure.ts":
/*!******************************!*\
  !*** ./src/game/Treasure.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GridElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridElement */ "./src/game/GridElement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Treasure = /** @class */ (function (_super) {
    __extends(Treasure, _super);
    function Treasure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Treasure.prototype.getType = function () {
        return _GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElementType.Treasure;
    };
    Treasure.prototype.draw = function (x, y, width, height) {
        this.ctx.fillStyle = "#FF8E00";
        this.ctx.fillRect(x * width, y * height, width, height);
        this.ctx.fillStyle = "";
    };
    return Treasure;
}(_GridElement__WEBPACK_IMPORTED_MODULE_0__.GridElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Treasure);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/Game */ "./src/game/Game.ts");

(function () {
    var gameContainer = document.getElementById("xperience-innovation");
    gameContainer.height = 645;
    gameContainer.width = 800;
    gameContainer.style.border = "1px solid black";
    new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Game(gameContainer);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUM7Ozs7Ozs7VUMvQnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQUk7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc2VkLXdvcmsvLi9zcmMvYXNzZXRzL2F1ZGlvcy9jb2xsaXNpb24ud2F2Iiwid2VicGFjazovL2N1cnNlZC13b3JrLy4vc3JjL2Fzc2V0cy9hdWRpb3MvbGV2ZWwtdXAud2F2Iiwid2VicGFjazovL2N1cnNlZC13b3JrLy4vc3JjL2Fzc2V0cy9hdWRpb3MvbW92ZW1lbnQud2F2Iiwid2VicGFjazovL2N1cnNlZC13b3JrLy4vc3JjL2Fzc2V0cy9hdWRpb3MvdHJlYXN1cmUud2F2Iiwid2VicGFjazovL2N1cnNlZC13b3JrLy4vc3JjL2dhbWUvQXVkaW9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vY3Vyc2VkLXdvcmsvLi9zcmMvZ2FtZS9FbXB0eS50cyIsIndlYnBhY2s6Ly9jdXJzZWQtd29yay8uL3NyYy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vY3Vyc2VkLXdvcmsvLi9zcmMvZ2FtZS9HYW1lT3Zlci50cyIsIndlYnBhY2s6Ly9jdXJzZWQtd29yay8uL3NyYy9nYW1lL0dyaWQudHMiLCJ3ZWJwYWNrOi8vY3Vyc2VkLXdvcmsvLi9zcmMvZ2FtZS9HcmlkRWxlbWVudC50cyIsIndlYnBhY2s6Ly9jdXJzZWQtd29yay8uL3NyYy9nYW1lL0dyaWRFbGVtZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly9jdXJzZWQtd29yay8uL3NyYy9nYW1lL0luc3RydWN0aW9ucy50cyIsIndlYnBhY2s6Ly9jdXJzZWQtd29yay8uL3NyYy9nYW1lL09ic3RhY2xlLnRzIiwid2VicGFjazovL2N1cnNlZC13b3JrLy4vc3JjL2dhbWUvUGxheWVyLnRzIiwid2VicGFjazovL2N1cnNlZC13b3JrLy4vc3JjL2dhbWUvU2NvcmUudHMiLCJ3ZWJwYWNrOi8vY3Vyc2VkLXdvcmsvLi9zcmMvZ2FtZS9UcmVhc3VyZS50cyIsIndlYnBhY2s6Ly9jdXJzZWQtd29yay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jdXJzZWQtd29yay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3Vyc2VkLXdvcmsvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jdXJzZWQtd29yay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2N1cnNlZC13b3JrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3Vyc2VkLXdvcmsvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY3Vyc2VkLXdvcmsvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE0Mjk5ZGUwMjg4YjljYjdkNzY2NjkzNjhiZmJmZDQ2LndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxNjJkMmZhN2M5MDQ4MjgwNzk0ZGE5ZGRhNTJlNGM3OC53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGQxMzJiYTlhYjQ3NDRlM2ZiMzYyNjFlNDlkM2NkOWUud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA3ZTAwNDQ4YWQwM2E1MGUwZjUyYTNlZWU5ZmU1ZjJkLndhdlwiOyIsImltcG9ydCBDb2xsaXNpb25BdWRpbyBmcm9tIFwiLi4vYXNzZXRzL2F1ZGlvcy9jb2xsaXNpb24ud2F2XCI7XG5pbXBvcnQgTGV2ZWxVcEF1ZGlvIGZyb20gXCIuLi9hc3NldHMvYXVkaW9zL2xldmVsLXVwLndhdlwiO1xuaW1wb3J0IE1vdmVtZW50QXVkaW8gZnJvbSBcIi4uL2Fzc2V0cy9hdWRpb3MvbW92ZW1lbnQud2F2XCI7XG5pbXBvcnQgVHJlYXN1cmVBdWRpbyBmcm9tIFwiLi4vYXNzZXRzL2F1ZGlvcy90cmVhc3VyZS53YXZcIjtcbnZhciBBdWRpb0Fzc2V0O1xuKGZ1bmN0aW9uIChBdWRpb0Fzc2V0KSB7XG4gICAgQXVkaW9Bc3NldFtcIkNvbGxpc2lvblwiXSA9IFwiY29sbGlzaW9uXCI7XG4gICAgQXVkaW9Bc3NldFtcIkxldmVsVXBcIl0gPSBcImxldmVsLXVwXCI7XG4gICAgQXVkaW9Bc3NldFtcIk1vdmVtZW50XCJdID0gXCJtb3ZlbWVudFwiO1xuICAgIEF1ZGlvQXNzZXRbXCJUcmVhc3VyZVwiXSA9IFwidHJlYXN1cmVcIjtcbn0pKEF1ZGlvQXNzZXQgfHwgKEF1ZGlvQXNzZXQgPSB7fSkpO1xudmFyIEF1ZGlvUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1ZGlvUGxheWVyKCkge1xuICAgICAgICB0aGlzLmF1ZGlvTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBBdWRpb1BsYXllci5wcm90b3R5cGUuY29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXkoQXVkaW9Bc3NldC5Db2xsaXNpb24sIENvbGxpc2lvbkF1ZGlvKTtcbiAgICB9O1xuICAgIEF1ZGlvUGxheWVyLnByb3RvdHlwZS5sZXZlbFVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXkoQXVkaW9Bc3NldC5MZXZlbFVwLCBMZXZlbFVwQXVkaW8pO1xuICAgIH07XG4gICAgQXVkaW9QbGF5ZXIucHJvdG90eXBlLm1vdmVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXkoQXVkaW9Bc3NldC5Nb3ZlbWVudCwgTW92ZW1lbnRBdWRpbyk7XG4gICAgfTtcbiAgICBBdWRpb1BsYXllci5wcm90b3R5cGUudHJlYXN1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGxheShBdWRpb0Fzc2V0LlRyZWFzdXJlLCBUcmVhc3VyZUF1ZGlvKTtcbiAgICB9O1xuICAgIEF1ZGlvUGxheWVyLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKGF1ZGlvQXNzZXQsIGF1ZGlvRmlsZSkge1xuICAgICAgICB2YXIgY2FjaGVkQXVkaW8gPSB0aGlzLmF1ZGlvTWFwLmdldChhdWRpb0Fzc2V0KTtcbiAgICAgICAgaWYgKCFjYWNoZWRBdWRpbykge1xuICAgICAgICAgICAgdGhpcy5hdWRpb01hcC5zZXQoYXVkaW9Bc3NldCwgbmV3IEF1ZGlvKGF1ZGlvRmlsZSkpO1xuICAgICAgICAgICAgY2FjaGVkQXVkaW8gPSB0aGlzLmF1ZGlvTWFwLmdldChhdWRpb0Fzc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjYWNoZWRBdWRpby5wbGF5KCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXVkaW9QbGF5ZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEF1ZGlvUGxheWVyKCk7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgR3JpZEVsZW1lbnQsIEdyaWRFbGVtZW50VHlwZSB9IGZyb20gXCIuL0dyaWRFbGVtZW50XCI7XG52YXIgRW1wdHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVtcHR5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVtcHR5KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEVtcHR5LnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gR3JpZEVsZW1lbnRUeXBlLkVtcHR5O1xuICAgIH07XG4gICAgRW1wdHkucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoeCAqIHdpZHRoLCB5ICogaGVpZ2h0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuICAgIHJldHVybiBFbXB0eTtcbn0oR3JpZEVsZW1lbnQpKTtcbmV4cG9ydCBkZWZhdWx0IEVtcHR5O1xuIiwiaW1wb3J0IEdyaWQgZnJvbSBcIi4vR3JpZFwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL1Njb3JlXCI7XG5pbXBvcnQgR2FtZU92ZXIgZnJvbSBcIi4vR2FtZU92ZXJcIjtcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSBcIi4vSW5zdHJ1Y3Rpb25zXCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcbnZhciBJTklUSUFMX1JFRlJFU0hfUkFURSA9IDcwMDtcbnZhciBBUlJPV19LRVlTID0gWzM3LCAzOCwgMzksIDQwXTtcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWUoY2FudmFzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zY29yZUFjY3VtdWxhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMubGFzdFRpbWVzdGFtcCA9IDA7XG4gICAgICAgIHRoaXMucmVmcmVzaFJhdGUgPSBJTklUSUFMX1JFRlJFU0hfUkFURTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLiRzY29yZSA9IG5ldyBTY29yZSh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuZHJhd0luc3RydWN0aW9ucygpO1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5pc1BsYXlpbmcgJiYgQVJST1dfS0VZUy5pbmNsdWRlcyhlLmtleUNvZGUpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEdhbWUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRncmlkID0gbmV3IEdyaWQodGhpcy5jdHgsIHRoaXMuZHJhdy5iaW5kKHRoaXMpLCB0aGlzLm9uR2FtZU92ZXIuYmluZCh0aGlzKSwgdGhpcy5vblNjb3JlSW5jcmVhc2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuJHNjb3JlID0gbmV3IFNjb3JlKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmVBY2N1bXVsYXRpb24gPSAwO1xuICAgICAgICB0aGlzLnJlZnJlc2hSYXRlID0gSU5JVElBTF9SRUZSRVNIX1JBVEU7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdFRpbWVzdGFtcCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRncmlkLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLiRzY29yZS51cGRhdGUodGhpcy5zY29yZSk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRncmlkLmRyYXcoKTtcbiAgICAgICAgdGhpcy4kc2NvcmUuZHJhdygpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUuZHJhd0luc3RydWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IEluc3RydWN0aW9ucyh0aGlzLmN0eCwgdGhpcy4kc2NvcmUpLmRyYXcoKTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLm9uU2NvcmVJbmNyZWFzZSA9IGZ1bmN0aW9uIChzY29yZSkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgICAgICB0aGlzLnNjb3JlQWNjdW11bGF0aW9uICs9IHNjb3JlO1xuICAgICAgICBpZiAodGhpcy5zY29yZUFjY3VtdWxhdGlvbiA+PSAxMCkge1xuICAgICAgICAgICAgdGhpcy5vbkxldmVsVXAoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY29yZSA+IDAgJiYgdGhpcy5zY29yZSAlIDUwID09PSAwKSB7XG4gICAgICAgICAgICBBdWRpb1BsYXllci5sZXZlbFVwKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbWVPdmVySGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2ID0gdGhpcy5sYXN0VGltZXN0YW1wO1xuICAgICAgICB2YXIgbm93ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB2YXIgZWxsYXBzZWQgPSBub3cgLSBwcmV2O1xuICAgICAgICBpZiAoZWxsYXBzZWQgPj0gdGhpcy5yZWZyZXNoUmF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZXN0YW1wID0gbm93O1xuICAgICAgICAgICAgLy8gZWFjaCBzdXJ2aXZpbmcgdGljayBpbmNyZWFzZXMgdGhlIHNjb3JlIGJ5IDFcbiAgICAgICAgICAgIHRoaXMub25TY29yZUluY3JlYXNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgR2FtZS5wcm90b3R5cGUub25HYW1lT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9O1xuICAgIEdhbWUucHJvdG90eXBlLm9uTGV2ZWxVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY29yZUFjY3VtdWxhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMucmVmcmVzaFJhdGUgPSBNYXRoLm1heCgyNTAsIHRoaXMucmVmcmVzaFJhdGUgLSB0aGlzLnJlZnJlc2hSYXRlICogMC4wNSk7XG4gICAgfTtcbiAgICBHYW1lLnByb3RvdHlwZS5nYW1lT3ZlckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJHNjb3JlLnNldE5ld0hpZ2hTY29yZSh0aGlzLnNjb3JlKTtcbiAgICAgICAgbmV3IEdhbWVPdmVyKHRoaXMuY3R4LCB0aGlzLiRzY29yZSkuZHJhdygpO1xuICAgICAgICBBdWRpb1BsYXllci5jb2xsaXNpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lO1xufSgpKTtcbmV4cG9ydCB7IEdhbWUgfTtcbiIsInZhciBHYW1lT3ZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHYW1lT3ZlcihjdHgsICRzY29yZSkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy4kc2NvcmUgPSAkc2NvcmU7XG4gICAgfVxuICAgIEdhbWVPdmVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5jdHguY2FudmFzLmhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5jdHguY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIuNXJlbSBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjQ0MwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRVwiLCB3aWR0aCAvIDIgLSA0NSwgaGVpZ2h0IC8gMiAtIDQ1KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJPVkVSXCIsIHdpZHRoIC8gMiAtIDQ0LCBoZWlnaHQgLyAyIC0gMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMC44NXJlbSBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQVU5UVUFDSVxcdTAwRDNOOiBcIiArIHRoaXMuJHNjb3JlLmdldFNjb3JlKCksIHdpZHRoIC8gMiAtIDQ4LCBoZWlnaHQgLyAyICsgMzUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIwLjgwcmVtIG1vbm9zcGFjZVwiO1xuICAgICAgICBpZiAodGhpcy4kc2NvcmUuaXNOZXdIaWdoU2NvcmUoKSkge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJOVUVWQSBNRUpPUiBQVU5UVUFDScOTTiEhXCIsIHdpZHRoIC8gMiAtIDg1LCBoZWlnaHQgLyAyICsgNTUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjAuNzVyZW0gbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwicHVsc2EgbGFzIGZsZWNoYXMgbyBoYXogY2xpYyBwYXJhIGp1Z2FyIGRlIG51ZXZvXCIsIHdpZHRoIC8gMiAtIDE2MCwgaGVpZ2h0IC8gMiArICh0aGlzLiRzY29yZS5pc05ld0hpZ2hTY29yZSgpID8gMTIwIDogODUpKTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lT3Zlcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBHYW1lT3ZlcjtcbiIsInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCB7IEdyaWRFbGVtZW50VHlwZSB9IGZyb20gXCIuL0dyaWRFbGVtZW50XCI7XG5pbXBvcnQgeyBHcmlkRWxlbWVudEZhY3RvcnkgfSBmcm9tIFwiLi9HcmlkRWxlbWVudEZhY3RvcnlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcbnZhciBDT0xVTU5TID0gMztcbnZhciBST1dTID0gNTtcbnZhciBUUklHR0VSSU5HX1RJQ0tTID0gMjtcbnZhciBHcmlkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdyaWQoY3R4LCBkcmF3SGFuZGxlciwgZ2FtZU92ZXJIYW5kbGVyLCBzY29yZUluY3JlYXNlSGFuZGxlcikge1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgR3JpZEVsZW1lbnRGYWN0b3J5KGN0eCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjdHgsIHRoaXMub25QbGF5ZXJQb3NpdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5nZW5lcmF0ZUdyaWQoKTtcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XG4gICAgICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0IC8gUk9XUztcbiAgICAgICAgdGhpcy5lbGVtZW50V2lkdGggPSBjdHguY2FudmFzLndpZHRoIC8gQ09MVU1OUztcbiAgICAgICAgdGhpcy5kcmF3SGFuZGxlciA9IGRyYXdIYW5kbGVyO1xuICAgICAgICB0aGlzLmdhbWVPdmVySGFuZGxlciA9IGdhbWVPdmVySGFuZGxlcjtcbiAgICAgICAgdGhpcy5zY29yZUluY3JlYXNlSGFuZGxlciA9IHNjb3JlSW5jcmVhc2VIYW5kbGVyO1xuICAgIH1cbiAgICBHcmlkLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudGlja3MrKztcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkRWxlbWVudHMoKTtcbiAgICAgICAgLy8gZXZlcnkgTiB0aWNrcyB3aWxsIGEgbmV3IHJhbmRvbSBlbGVtZW50IGJlIGFkZGVkIHRvIHRoZSBncmlkLFxuICAgICAgICAvLyBvdGhlcndpc2UsIHRoZSBncmlkIGlzIGp1c3QgdXBkYXRlZCBhbmQgZHJhd24gd2l0aCBubyBmdXJ0aGVyIGNoYW5nZXNcbiAgICAgICAgaWYgKHRoaXMudGlja3MgJSBUUklHR0VSSU5HX1RJQ0tTICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVudHNUb0FkZCA9IFtdO1xuICAgICAgICB2YXIgbiA9IHRoaXMuZ2VuZXJhdGVSYW5kb21OdW1iZXIoKTtcbiAgICAgICAgdmFyIHggPSBuICUgQ09MVU1OUztcbiAgICAgICAgaWYgKG4gPCA2NSkge1xuICAgICAgICAgICAgLy8gYSBzaW5nbGUgb2JzdGFjbGUgKDY1JSBjaGFuY2UpXG4gICAgICAgICAgICBlbGVtZW50c1RvQWRkLnB1c2goW3RoaXMuZmFjdG9yeS5jcmVhdGUoR3JpZEVsZW1lbnRUeXBlLk9ic3RhY2xlKSwgeF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG4gPj0gNjUgJiYgbiA8IDgwKSB7XG4gICAgICAgICAgICAvLyB0cmVhc3VyZSAoMTUlIGNoYW5jZSlcbiAgICAgICAgICAgIGVsZW1lbnRzVG9BZGQucHVzaChbdGhpcy5mYWN0b3J5LmNyZWF0ZShHcmlkRWxlbWVudFR5cGUuVHJlYXN1cmUpLCB4XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobiA+PSA4MCAmJiBuIDw9IDEwMCkge1xuICAgICAgICAgICAgLy8gMiBvYnN0YWNsZXMgYXQgdGhlIHNhbWUgdGltZSAoMjAlIGNoYW5jZSlcbiAgICAgICAgICAgIHZhciBvdGhlck9ic3RhY2xlWCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSAlIENPTFVNTlM7XG4gICAgICAgICAgICB3aGlsZSAob3RoZXJPYnN0YWNsZVggPT09IHgpIHtcbiAgICAgICAgICAgICAgICBvdGhlck9ic3RhY2xlWCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21OdW1iZXIoKSAlIENPTFVNTlM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50c1RvQWRkLnB1c2goW3RoaXMuZmFjdG9yeS5jcmVhdGUoR3JpZEVsZW1lbnRUeXBlLk9ic3RhY2xlKSwgeF0pO1xuICAgICAgICAgICAgZWxlbWVudHNUb0FkZC5wdXNoKFtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY3RvcnkuY3JlYXRlKEdyaWRFbGVtZW50VHlwZS5PYnN0YWNsZSksXG4gICAgICAgICAgICAgICAgb3RoZXJPYnN0YWNsZVgsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudHNUb0FkZCkge1xuICAgICAgICAgICAgZWxlbWVudHNUb0FkZC5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IF9hWzBdLCB4ID0gX2FbMV07XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkRWxlbWVudFRvR3JpZChlbCwgeCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgR3JpZC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5ncmlkLmZvckVhY2goZnVuY3Rpb24gKHBvc2l0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIHggPSBpbmRleCAlIENPTFVNTlM7XG4gICAgICAgICAgICB2YXIgeSA9IChpbmRleCAtIHgpIC8gQ09MVU1OUztcbiAgICAgICAgICAgIHBvc2l0aW9uLmRyYXcoeCwgeSwgX3RoaXMuZWxlbWVudFdpZHRoLCBfdGhpcy5lbGVtZW50SGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHcmlkLnByb3RvdHlwZS5nZW5lcmF0ZUdyaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBncmlkID0gbmV3IEFycmF5KENPTFVNTlMgKiBST1dTKVxuICAgICAgICAgICAgLmZpbGwoMClcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZmFjdG9yeS5jcmVhdGUoR3JpZEVsZW1lbnRUeXBlLkVtcHR5KTsgfSk7XG4gICAgICAgIGdyaWRbZ3JpZC5sZW5ndGggLSAyXSA9IHRoaXMucGxheWVyO1xuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9O1xuICAgIEdyaWQucHJvdG90eXBlLm9uUGxheWVyUG9zaXRpb25DaGFuZ2UgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgLy8gaWYgdGhlIHBsYXllciBwb3NpdGlvbiBkaWRuJ3QgY2hhbmdlIChiZWNhdXNlIGl0J3MgYWxyZWFkeSBhdCBpdHMgbGltaXRzKSxcbiAgICAgICAgLy8gdGhlbiBkb24ndCBkbyBhbnl0aGluZyBlbHNlLCBzbyB3ZSBhdm9pZCB1bm5lY2Vzc2FyeSB1cGRhdGVzIHRvIHRoZSBncmlkXG4gICAgICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdHcmlkID0gX19zcHJlYWRBcnJheShbXSwgdGhpcy5ncmlkLCB0cnVlKTtcbiAgICAgICAgdmFyIHBsYXllckluZGV4ID0gbmV3R3JpZC5maW5kSW5kZXgoZnVuY3Rpb24gKHBvc2l0aW9uKSB7IHJldHVybiBwb3NpdGlvbi5nZXRUeXBlKCkgPT09IEdyaWRFbGVtZW50VHlwZS5QbGF5ZXI7IH0pO1xuICAgICAgICB2YXIgbmV3UG9zID0gcGxheWVySW5kZXggKyBkZWx0YTtcbiAgICAgICAgdmFyIHR5cGUgPSBuZXdHcmlkW25ld1Bvc10uZ2V0VHlwZSgpO1xuICAgICAgICBpZiAoR3JpZEVsZW1lbnRUeXBlLk9ic3RhY2xlID09PSB0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoR3JpZEVsZW1lbnRUeXBlLlRyZWFzdXJlID09PSB0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVHJlYXN1cmVDb2xsZWN0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdHcmlkW3BsYXllckluZGV4ICsgZGVsdGFdID0gdGhpcy5wbGF5ZXI7XG4gICAgICAgIG5ld0dyaWRbcGxheWVySW5kZXhdID0gdGhpcy5mYWN0b3J5LmNyZWF0ZShHcmlkRWxlbWVudFR5cGUuRW1wdHkpO1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXdHcmlkO1xuICAgICAgICB0aGlzLmRyYXdIYW5kbGVyKCk7XG4gICAgICAgIEF1ZGlvUGxheWVyLm1vdmVtZW50KCk7XG4gICAgfTtcbiAgICBHcmlkLnByb3RvdHlwZS51cGRhdGVHcmlkRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmdyaWQubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIG5ld0dyaWQgPSBfX3NwcmVhZEFycmF5KFtdLCB0aGlzLmdyaWQsIHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IGxlbmd0aDsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgdmFyIG5ld1BvcyA9IGluZGV4ICsgQ09MVU1OUztcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ncmlkW2luZGV4XTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gZWxlbWVudC5nZXRUeXBlKCk7XG4gICAgICAgICAgICAvLyBsZWF2ZSB0aGUgcGxheWVyIHdoZXJlIGl0IHdhc1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IEdyaWRFbGVtZW50VHlwZS5QbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxlYXZlIGVtcHR5IHNwYWNlcyB3aGVyZSB0aGV5IHdlcmVcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBHcmlkRWxlbWVudFR5cGUuRW1wdHkpIHtcbiAgICAgICAgICAgICAgICBuZXdHcmlkW2luZGV4XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXNldHMgdGhlIG1vdmluZyBlbGVtZW50IHBvc2l0aW9uIHRvIGFuIGVtcHR5IHNwYWNlXG4gICAgICAgICAgICBuZXdHcmlkW2luZGV4XSA9IHRoaXMuZmFjdG9yeS5jcmVhdGUoR3JpZEVsZW1lbnRUeXBlLkVtcHR5KTtcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZSBwb3NpdGlvbiBoYXMgYmVlbiByZXNldCB0byBhbiBlbXB0eSBzcGFjZSwgYW55IGVsZW1lbnRzXG4gICAgICAgICAgICAvLyB0aGF0IGV4aXQgdGhlIGdyaWQgYXJlIGlnbm9yZWQsIHNpbmNlIHRoZXkgaGF2ZSBhbHJlYWR5IGJlZW4gcmVzZXRcbiAgICAgICAgICAgIGlmIChuZXdQb3MgPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZSBwbGF5ZXIgZGlkbid0IGF2b2lkIHRoZSBlbGVtZW50XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW25ld1Bvc10uZ2V0VHlwZSgpID09PSBHcmlkRWxlbWVudFR5cGUuUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgLy8gYnV0IGl0IHdhcyBhIHRyZWFzdXJlIGNvbGxlY3RlZCwgdGhlIGdhbWUga2VlcHMgZ29pbmdcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gR3JpZEVsZW1lbnRUeXBlLlRyZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25UcmVhc3VyZUNvbGxlY3RlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYW55IG5vbi1wbGF5ZXIsIG5vbi1lbXB0eSBlbGVtZW50cyBhcmUgbW92ZWQgdG8gdGhlaXIgbmV3IHBvc2l0aW9uc1xuICAgICAgICAgICAgbmV3R3JpZFtuZXdQb3NdID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWQgPSBuZXdHcmlkO1xuICAgIH07XG4gICAgR3JpZC5wcm90b3R5cGUuZ2VuZXJhdGVSYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH07XG4gICAgR3JpZC5wcm90b3R5cGUuYWRkRWxlbWVudFRvR3JpZCA9IGZ1bmN0aW9uIChlbGVtZW50LCB4KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zcGxpY2UoeCwgMSwgZWxlbWVudCk7XG4gICAgfTtcbiAgICBHcmlkLnByb3RvdHlwZS5vbkdhbWVPdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXllci5vbkdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJIYW5kbGVyKCk7XG4gICAgfTtcbiAgICBHcmlkLnByb3RvdHlwZS5vblRyZWFzdXJlQ29sbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjb3JlSW5jcmVhc2VIYW5kbGVyKDUpO1xuICAgICAgICBBdWRpb1BsYXllci50cmVhc3VyZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyaWQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiIsImV4cG9ydCB2YXIgR3JpZEVsZW1lbnRUeXBlO1xuKGZ1bmN0aW9uIChHcmlkRWxlbWVudFR5cGUpIHtcbiAgICBHcmlkRWxlbWVudFR5cGVbR3JpZEVsZW1lbnRUeXBlW1wiRW1wdHlcIl0gPSAwXSA9IFwiRW1wdHlcIjtcbiAgICBHcmlkRWxlbWVudFR5cGVbR3JpZEVsZW1lbnRUeXBlW1wiUGxheWVyXCJdID0gMV0gPSBcIlBsYXllclwiO1xuICAgIEdyaWRFbGVtZW50VHlwZVtHcmlkRWxlbWVudFR5cGVbXCJPYnN0YWNsZVwiXSA9IDJdID0gXCJPYnN0YWNsZVwiO1xuICAgIEdyaWRFbGVtZW50VHlwZVtHcmlkRWxlbWVudFR5cGVbXCJUcmVhc3VyZVwiXSA9IDNdID0gXCJUcmVhc3VyZVwiO1xufSkoR3JpZEVsZW1lbnRUeXBlIHx8IChHcmlkRWxlbWVudFR5cGUgPSB7fSkpO1xudmFyIEdyaWRFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdyaWRFbGVtZW50KGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG4gICAgcmV0dXJuIEdyaWRFbGVtZW50O1xufSgpKTtcbmV4cG9ydCB7IEdyaWRFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBHcmlkRWxlbWVudFR5cGUgfSBmcm9tIFwiLi9HcmlkRWxlbWVudFwiO1xuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XG5pbXBvcnQgT2JzdGFjbGUgZnJvbSBcIi4vT2JzdGFjbGVcIjtcbmltcG9ydCBUcmVhc3VyZSBmcm9tIFwiLi9UcmVhc3VyZVwiO1xudmFyIEdyaWRFbGVtZW50RmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHcmlkRWxlbWVudEZhY3RvcnkoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cbiAgICBHcmlkRWxlbWVudEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBHcmlkRWxlbWVudFR5cGUuT2JzdGFjbGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBPYnN0YWNsZSh0aGlzLmN0eCk7XG4gICAgICAgICAgICBjYXNlIEdyaWRFbGVtZW50VHlwZS5UcmVhc3VyZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRyZWFzdXJlKHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFbXB0eSh0aGlzLmN0eCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBHcmlkRWxlbWVudEZhY3Rvcnk7XG59KCkpO1xuZXhwb3J0IHsgR3JpZEVsZW1lbnRGYWN0b3J5IH07XG4iLCJ2YXIgSW5zdHJ1Y3Rpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluc3RydWN0aW9ucyhjdHgsICRzY29yZSkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy4kc2NvcmUgPSAkc2NvcmU7XG4gICAgfVxuICAgIEluc3RydWN0aW9ucy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuY3R4LmNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjAuNzVyZW0gbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwicHVsc2EgbGFzIGZsZWNoYXMgbyBoYXogY2xpYyBwYXJhIGNvbWVuemFyIGEganVnYXJcIiwgd2lkdGggLyAyIC0gMTg1LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgdmFyIGhpZ2hzY29yZSA9IHRoaXMuJHNjb3JlLmdldEhpZ2hTY29yZSgpO1xuICAgICAgICBpZiAoaGlnaHNjb3JlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNRUpPUiBQVU5UVUFDSVxcdTAwRDNOOiBcIiArIGhpZ2hzY29yZSwgd2lkdGggLyAyIC0gODAsIGhlaWdodCAvIDIgKyAzNSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbnN0cnVjdGlvbnM7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3Rpb25zO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEdyaWRFbGVtZW50LCBHcmlkRWxlbWVudFR5cGUgfSBmcm9tIFwiLi9HcmlkRWxlbWVudFwiO1xudmFyIE9ic3RhY2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnN0YWNsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnN0YWNsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYnN0YWNsZS5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEdyaWRFbGVtZW50VHlwZS5PYnN0YWNsZTtcbiAgICB9O1xuICAgIE9ic3RhY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHggKiB3aWR0aCwgeSAqIGhlaWdodCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiXCI7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzdGFjbGU7XG59KEdyaWRFbGVtZW50KSk7XG5leHBvcnQgZGVmYXVsdCBPYnN0YWNsZTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBHcmlkRWxlbWVudCwgR3JpZEVsZW1lbnRUeXBlIH0gZnJvbSBcIi4vR3JpZEVsZW1lbnRcIjtcbnZhciBLZXlDb2RlO1xuKGZ1bmN0aW9uIChLZXlDb2RlKSB7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiQXJyb3dMZWZ0XCJdID0gMzddID0gXCJBcnJvd0xlZnRcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJBcnJvd1JpZ2h0XCJdID0gMzldID0gXCJBcnJvd1JpZ2h0XCI7XG59KShLZXlDb2RlIHx8IChLZXlDb2RlID0ge30pKTtcbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBsYXllciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQbGF5ZXIoY3R4LCBjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjdHgpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMucG9zaXRpb25DaGFuZ2VIYW5kbGVyID0gY2I7XG4gICAgICAgIF90aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgX3RoaXMuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBQbGF5ZXIucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBHcmlkRWxlbWVudFR5cGUuUGxheWVyO1xuICAgIH07XG4gICAgUGxheWVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDA4MDAwXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHggKiB3aWR0aCwgeSAqIGhlaWdodCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiXCI7XG4gICAgfTtcbiAgICBQbGF5ZXIucHJvdG90eXBlLm9uR2FtZU92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIFBsYXllci5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgUGxheWVyLnByb3RvdHlwZS5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5BcnJvd0xlZnQpIHtcbiAgICAgICAgICAgIGRlbHRhID0gdGhpcy5wb3NpdGlvbiA+IC0xID8gLTEgOiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5BcnJvd1JpZ2h0KSB7XG4gICAgICAgICAgICBkZWx0YSA9IHRoaXMucG9zaXRpb24gPCAxID8gMSA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gKyBkZWx0YTtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25DaGFuZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlSGFuZGxlcihkZWx0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBQbGF5ZXI7XG59KEdyaWRFbGVtZW50KSk7XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJ2YXIgTE9DQUxfU1RPUkFHRV9LRVkgPSBcImlubGFiLm1pbmlnYW1lLmhpZ2gtc2NvcmVcIjtcbnZhciBTY29yZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY29yZShjdHgpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuaXNIaWdoU2NvcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuICAgIFNjb3JlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgIH07XG4gICAgU2NvcmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuY3R4LmNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCA0NSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjEzcHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBVTlRVQUNJXFx1MDBEM046IFwiICsgdGhpcy5zY29yZSwgd2lkdGggLSAxMjUsIDMwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJcIjtcbiAgICB9O1xuICAgIFNjb3JlLnByb3RvdHlwZS5nZXRTY29yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XG4gICAgfTtcbiAgICBTY29yZS5wcm90b3R5cGUuZ2V0SGlnaFNjb3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9LRVkpIHx8IDApO1xuICAgIH07XG4gICAgU2NvcmUucHJvdG90eXBlLmlzTmV3SGlnaFNjb3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hpZ2hTY29yZTtcbiAgICB9O1xuICAgIFNjb3JlLnByb3RvdHlwZS5zZXROZXdIaWdoU2NvcmUgPSBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0SGlnaFNjb3JlKCkgPCBzY29yZSkge1xuICAgICAgICAgICAgdGhpcy5pc0hpZ2hTY29yZSA9IHRydWU7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9LRVksIFwiXCIgKyAoc2NvcmUgLSAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzSGlnaFNjb3JlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTY29yZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTY29yZTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBHcmlkRWxlbWVudCwgR3JpZEVsZW1lbnRUeXBlIH0gZnJvbSBcIi4vR3JpZEVsZW1lbnRcIjtcbnZhciBUcmVhc3VyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJlYXN1cmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVHJlYXN1cmUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVHJlYXN1cmUucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBHcmlkRWxlbWVudFR5cGUuVHJlYXN1cmU7XG4gICAgfTtcbiAgICBUcmVhc3VyZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI0ZGOEUwMFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4ICogd2lkdGgsIHkgKiBoZWlnaHQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIlwiO1xuICAgIH07XG4gICAgcmV0dXJuIFRyZWFzdXJlO1xufShHcmlkRWxlbWVudCkpO1xuZXhwb3J0IGRlZmF1bHQgVHJlYXN1cmU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZS9HYW1lXCI7XG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ4cGVyaWVuY2UtaW5ub3ZhdGlvblwiKTtcbiAgICBnYW1lQ29udGFpbmVyLmhlaWdodCA9IDY0NTtcbiAgICBnYW1lQ29udGFpbmVyLndpZHRoID0gODAwO1xuICAgIGdhbWVDb250YWluZXIuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbiAgICBuZXcgR2FtZShnYW1lQ29udGFpbmVyKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
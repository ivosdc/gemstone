webpackJsonp([1,4],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".titel {\n\tfont-family:sans-serif;\n\tfont-size:2em;\n    font-style:bold;\n\tcolor: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".canvas {\n\tposition:relative;\n}\n\n.arena {\n\tposition:relative;\n\tborder: 3px solid #090909;\n    background-color: #aaaaaa;\n}\n.feld {\n\tposition:absolute;\n}\n.round {\n\tfont-size:0.8em;\n\tcolor: grey;\n}\n.score {\n\tfont-size:1,2em;\n\tfont-style:bold;\n\tcolor: white;\n}\n.highlight{\n  opacity: 0.5;\n  border:solid 1px #fff;\n  background-color:#eef;\n}\n.drophighlight{\n  opacity: 0.5;\n  border:solid 1px #000;\n  background-color:#aaf;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".stone{\n\tposition:absolute;\n\tleft:3px;\n\ttop:3px;\n    border-radius: 30px;\n    -moz-box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);\n    webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\n    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<div class=\"titel\">\n  {{title}}\n</div>\n<app-arena></app-arena>\n"

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"canvas\">\n<div class=\"score\">{{score}}</div>\n<div id=\"{{title}}\" class=\"arena\" [ngStyle]=\"{'width':this.arenawidth  + 'px',\n                                              'height':this.arenaheight + 'px'}\">\n       <stone #gemstone *ngFor=\"let stone of stones\" [model]=\"stone\" dragDirective dropDirective\n       (releaseDrop)=\"releaseDrop($event, stone)\"\n       (dropEvent)=\"addDropItem($event, stone)\"\n       [dropHighlight]=\"'drophighlight'\"\n       (dragenterEvent)=\"dragenterEvent($event, stone)\"\n       (dragleaveEvent)=\"dragleaveEvent($event, stone)\"\n       (dragoverMouseEvent)=\"dragoverMouse($event, stone)\"\n       (startDrag)=\"startDrag($event, stone)\"\n       [id]=\"stone.x + '-' + stone.y\"\n        [ngStyle]=\"{'left':(stone.x) * stone.width + 'px',\n                   'top':(stone.y)  * stone.height + 'px',\n                   'width':stone.width + 'px',\n                   'height':stone.height + 'px'}\"\n         class='feld'>\n         </stone>\n</div>\n<div class=\"round\">Round:{{round}}</div>\n</div>\n"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div class=\"stone\"\n  (@stoneState.start)=\"animationStarted($event)\"\n  (@stoneState.done)=\"animationDone($event)\"\n  [@stoneState]=\"model.state\"\n  [ngStyle]=\"getStyles()\"\n  (mouseover)=\"model.state = 'inactive';\"\n  (mouseout)=\"model.state = 'active';\">\n</div>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stone; });
/**
 * New typescript file
 */
var Stone = (function () {
    function Stone(picture, color, x, y) {
        this.picture = picture;
        this.color = color;
        this.x = x;
        this.y = y;
        this.state = 'active';
        this.inSerie = [];
        this.width = 60;
        this.height = 60;
        this.score = 1;
        this.text = '';
    }
    return Stone;
}());

//# sourceMappingURL=stone.js.map

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Gemstone';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(138)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_drag_drop__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arena_arena_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stone_stone_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__arena_arena_component__["a" /* ArenaComponent */],
            __WEBPACK_IMPORTED_MODULE_6__stone_stone_component__["a" /* StoneComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular4_drag_drop__["a" /* DragDropDirectiveModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arena_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArenaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArenaComponent = (function () {
    function ArenaComponent(_arenaService) {
        this._arenaService = _arenaService;
        this.title = "Arena";
        this.stones = [];
        this.arenawidth = 0;
        this.arenaheight = 0;
        this.score = 0;
        this.round = 0;
        this.seriePattern = { x: [['x=x+1'], ['x=x+2']],
            y: [['y=y+1'], ['y=y+2']],
            cube: [['x=x+1'], ['y=y+1'], ['x=x+1', 'y=y+1']] };
    }
    ArenaComponent.prototype.ngOnInit = function () {
        this.stones = this._arenaService.createRandomArena();
        this.arenawidth = this.stones[0].width * this._arenaService.maxX;
        this.arenaheight = this.stones[0].height * this._arenaService.maxY;
    };
    //DragDrop
    // starts dragging the item
    ArenaComponent.prototype.startDrag = function (event, item) {
        this.dragStone = item;
        for (var i in this.stones) {
            this.stones[i].state = 'active';
            this.stones[i].inSerie = [];
            this.stones[i].text = '';
        }
        this.dragStone.state = 'inactive';
    };
    // passes the dropped item when an item is dropped into the drop element
    ArenaComponent.prototype.addDropItem = function (event, item) {
        if (this._arenaService.isValidNeighbour(this.dragStone, item)) {
            this._arenaService.switchOptions(item, this.dragStone);
            this.round++;
            while (this.checkSeriePattern()) {
                this.clearStones();
            }
        }
    };
    //act on the dragged item once it is dropped into the drop area    
    ArenaComponent.prototype.releaseDrop = function (event, item) {
    };
    //passes the dragged item when an item is dragged into the drop element
    ArenaComponent.prototype.dragenterEvent = function (event, item) {
        if (this._arenaService.isValidNeighbour(this.dragStone, item)) {
            item.state = 'inactive';
        }
    };
    // passes the dragged item when the item is dragged out of the drop element.
    ArenaComponent.prototype.dragleaveEvent = function (event, item) {
        if (this._arenaService.isValidNeighbour(this.dragStone, item)) {
            item.state = 'active';
        }
    };
    // This fires ever 350 millieseconds when an object is being dragged over the droppable box.
    // It passes the dragover event
    ArenaComponent.prototype.dragoverMouse = function (event, item) {
        if (this._arenaService.isValidNeighbour(this.dragStone, item)) {
            item.state = 'inactive';
        }
    };
    // Game - Series
    ArenaComponent.prototype.clearStones = function () {
        var log = '';
        var color = '';
        var picture = '';
        var rand = 0;
        var item;
        for (var y = 0; y < this._arenaService.maxY; y++) {
            for (var x = 0; x < this._arenaService.maxX; x++) {
                if (this.getStone(x, y).inSerie.length > 0) {
                    log = log + x + ':' + y + '; ';
                    this.getStone(x, y).inSerie = [];
                    this.getStone(x, y).state = 'serie';
                    for (var serie = y; serie > 0; serie--) {
                        color = this.getStone(x, serie - 1).color;
                        picture = this.getStone(x, serie - 1).picture;
                        item = this.getStone(x, serie);
                        if (item.state != 'serie') {
                            item.state = 'movedown';
                        }
                        item.color = color;
                        item.picture = picture;
                    }
                    rand = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_1__arena_service__["a" /* ArenaService */].STONES.length);
                    color = __WEBPACK_IMPORTED_MODULE_1__arena_service__["a" /* ArenaService */].STONES[rand].color;
                    picture = __WEBPACK_IMPORTED_MODULE_1__arena_service__["a" /* ArenaService */].STONES[rand].picture;
                    item = this.getStone(x, 0);
                    if (item.state != 'serie') {
                        item.state = 'movedown';
                    }
                    item.color = color;
                    item.picture = picture;
                }
            }
        }
    };
    ArenaComponent.prototype.checkSeriePattern = function () {
        var serie = false;
        var check = false;
        var key = '';
        for (var y = 0; y < this._arenaService.maxY; y++) {
            for (var x = 0; x < this._arenaService.maxX; x++) {
                for (key in this.seriePattern) {
                    check = this.checkPattern(key, x, y);
                    serie = serie || check;
                }
            }
        }
        return serie;
    };
    // sets the name parameter in Stone-object.inSerie if it is in a serie
    ArenaComponent.prototype.checkPattern = function (name, x, y) {
        var matches = this.seriePattern[name];
        var color = this.getStone(x, y).color;
        var check = true;
        var initX = x;
        var initY = y;
        for (var pattern = 0; pattern < matches.length; pattern++) {
            x = initX;
            y = initY;
            eval(matches[pattern][0]);
            if (matches[pattern][1] !== undefined) {
                eval(matches[pattern][1]);
            }
            if (x < this._arenaService.maxX && y < this._arenaService.maxY) {
                if (this.getStone(x, y).color != color) {
                    check = false;
                }
            }
            else {
                check = false;
            }
        }
        if (check) {
            if (this.getStone(initX, initY).inSerie.indexOf(name) === -1) {
                this.getStone(initX, initY).inSerie.push(name);
                this.score = this.score + this.getStone(initX, initY).score;
            }
            for (var pattern = 0; pattern < matches.length; pattern++) {
                x = initX;
                y = initY;
                eval(matches[pattern][0]);
                if (matches[pattern][1] !== undefined) {
                    eval(matches[pattern][1]);
                }
                if (this.getStone(x, y).inSerie.indexOf(name) === -1) {
                    this.getStone(x, y).inSerie.push(name);
                    this.score = this.score + this.getStone(x, y).score;
                }
            }
        }
        return check;
    };
    ArenaComponent.prototype.getStone = function (x, y) {
        return this.stones[x + (this._arenaService.maxX * y)];
    };
    return ArenaComponent;
}());
ArenaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-arena',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__arena_service__["a" /* ArenaService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__arena_service__["a" /* ArenaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__arena_service__["a" /* ArenaService */]) === "function" && _a || Object])
], ArenaComponent);

var _a;
//# sourceMappingURL=arena.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stone_stone__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArenaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArenaService = ArenaService_1 = (function () {
    function ArenaService() {
        this.maxX = 8;
        this.maxY = 8;
    }
    ArenaService.prototype.switchOptions = function (stone1, stone2) {
        var picture = stone1.picture;
        var color = stone1.color;
        stone1.picture = stone2.picture;
        stone1.color = stone2.color;
        stone2.picture = picture;
        stone2.color = color;
    };
    ArenaService.prototype.isValidNeighbour = function (stone1, stone2) {
        var valid = false;
        if ((((stone1.x == stone2.x + 1) || (stone1.x == stone2.x - 1)) && (stone1.y == stone2.y))
            || (((stone1.y == stone2.y + 1) || (stone1.y == stone2.y - 1)) && (stone1.x == stone2.x))) {
            valid = true;
        }
        if ((stone1.x == stone2.x)
            && (stone1.y == stone2.y)) {
            valid = false;
        }
        return valid;
    };
    ArenaService.prototype.createRandomArena = function () {
        var rand;
        var arena = [];
        arena.push(new __WEBPACK_IMPORTED_MODULE_1__stone_stone__["a" /* Stone */]('1.png', '#0000FF', 1, 1));
        var _loop_1 = function (y) {
            var _loop_2 = function (x) {
                rand = Math.floor(Math.random() * ArenaService_1.STONES.length);
                // check left
                if (arena[arena.length - 1].color === ArenaService_1.STONES[rand].color) {
                    rand === ArenaService_1.STONES.length - 1 ? rand = 1 : rand++;
                }
                // check upper
                arena.forEach(function (gemstone) {
                    if (x === gemstone.x &&
                        y - 1 === gemstone.y &&
                        ArenaService_1.STONES[rand].color === gemstone.color) {
                        rand === ArenaService_1.STONES.length - 1 ? rand = 1 : rand++;
                    }
                });
                // check left again
                if (arena[arena.length - 1].color === ArenaService_1.STONES[rand].color) {
                    rand === ArenaService_1.STONES.length - 1 ? rand = 1 : rand++;
                }
                arena.push(new __WEBPACK_IMPORTED_MODULE_1__stone_stone__["a" /* Stone */](ArenaService_1.STONES[rand].picture, ArenaService_1.STONES[rand].color, x, y));
            };
            for (var x = 0; x < this_1.maxX; x++) {
                _loop_2(x);
            }
        };
        var this_1 = this;
        for (var y = 0; y < this.maxY; y++) {
            _loop_1(y);
        }
        arena.shift();
        return arena;
    };
    ;
    return ArenaService;
}());
ArenaService.STONES = [new __WEBPACK_IMPORTED_MODULE_1__stone_stone__["a" /* Stone */]('1.png', '#000000', 1, 1),
    new __WEBPACK_IMPORTED_MODULE_1__stone_stone__["a" /* Stone */]('', '#0000FF', 1, 1),
    new __WEBPACK_IMPORTED_MODULE_1__stone_stone__["a" /* Stone */]('', '#00FF00', 1, 1),
    new __WEBPACK_IMPORTED_MODULE_1__stone_stone__["a" /* Stone */]('', '#FF0000', 1, 1),
    new __WEBPACK_IMPORTED_MODULE_1__stone_stone__["a" /* Stone */]('', '#FFAA00', 1, 1),
    new __WEBPACK_IMPORTED_MODULE_1__stone_stone__["a" /* Stone */]('', '#FFFF00', 1, 1)];
ArenaService = ArenaService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ArenaService);

var ArenaService_1;
//# sourceMappingURL=arena.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stone__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoneComponent = (function () {
    function StoneComponent() {
    }
    StoneComponent.prototype.ngOnInit = function () {
    };
    StoneComponent.prototype.animationStarted = function (event) {
    };
    StoneComponent.prototype.animationDone = function (event) {
        if ((this.model.state !== event.toState) && (this.model.state === "inactive")) {
            this.model.state = event.toState;
        }
        if ((this.model.state === 'serie') && (event.toState === "movedown")) {
            event.toState = 'serie';
        }
        if ((this.model.state === 'movedown') && (event.toState === "serie")) {
            this.model.state = 'serie';
        }
    };
    StoneComponent.prototype.getStyles = function () {
        var styles = { 'background-color': this.model.color,
            'width': (this.model.width - 6) + "px",
            'height': (this.model.height - 6) + "px" };
        if (this.model.picture != "") {
            styles['background-image'] = "url(\'/assets/images/" + this.model.picture + "\')";
            styles['background-size'] = "cover";
        }
        return styles;
    };
    return StoneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stone__["a" /* Stone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stone__["a" /* Stone */]) === "function" && _a || Object)
], StoneComponent.prototype, "model", void 0);
StoneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'stone',
        template: __webpack_require__(143),
        styles: [__webpack_require__(140)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('stoneState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    transform: 'scale(0.8)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    transform: 'scale(1)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('100ms ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* => movedown', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(200)]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('* => serie', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'scale(2)', backgroundColor: 'white' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(300)])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], StoneComponent);

var _a;
//# sourceMappingURL=stone.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[171]);
//# sourceMappingURL=main.bundle.js.map
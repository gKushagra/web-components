/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });
class Sidebar {

    el;

    constructor(_ = { id: null, height: 100, heightUnit: 'vh', width: 25, widthUnit: 'vw' }) {

        this.el = document.getElementById(_.id);
        this.el.height = '100vh';
        this.el.width = '100vw';
        this.el.style.display = 'none';
        this.el.setAttribute('isopen', false);

        const sidebarContent = this.el.querySelector('SidebarContent');
        sidebarContent.id = `${_.id}&content`;
        sidebarContent.style.height = `${_.height}${_.heightUnit}`;
        sidebarContent.style.width = `${_.width}${_.widthUnit}`;

        const sidebarBody = this.el.querySelector('SidebarBody');
        sidebarBody.id = `${_.id}&body`;
        sidebarBody.style.height = `${_.height}${_.heightUnit}`;
        sidebarBody.style.width = `${100 - _.width}${_.widthUnit}`;

        const sidebarContentResize = this.el.querySelector('SidebarContentResize');
        sidebarContentResize.id = `${_.id}&content_resize`;

        sidebarContentResize.addEventListener('click', function dividerClickEvent(e) {
            // const sidebarBodyId = e.target.id;
            const sidebarBodyId = e.target.id?.split('&')[0];
            document.body.style.cursor = 'col-resize';
            if (sidebarBodyId) {
                const sidebarId = sidebarBodyId.split('&')[0];
                const sidebarEl = document.getElementById(sidebarId);
                sidebarEl.addEventListener('mouseup', function mouseupEvent(e) {
                    console.log(e.clientX);
                    const pixelToViewWidth = (100 * e.clientX / window.innerWidth);
                    sidebarContent.style.width = `${pixelToViewWidth}${_.widthUnit}`;
                    sidebarBody.style.width = `${100 - pixelToViewWidth}${_.widthUnit}`;
                    const sidebarBodyId = e.target.id;
                    if (sidebarBodyId) {
                        const sidebarId = sidebarBodyId.split('&')[0];
                        const sidebarEl = document.getElementById(sidebarId);
                        document.body.style.cursor = 'default';
                        sidebarEl.removeEventListener('mouseup', mouseupEvent);
                    }
                });
            }
            setTimeout(() => {
                document.body.style.cursor = 'default';
            }, 5000);
        });

        // this.el.addEventListener('mousedown', function mousedownEvent(e) {
        //     console.log(e.clientX);
        //     const sidebarBodyId = e.target.id;
        //     if (sidebarBodyId) {
        //         const sidebarId = sidebarBodyId.split('&')[0];
        //         const sidebarEl = document.getElementById(sidebarId);
        //         sidebarEl.addEventListener('mouseup', function mouseupEvent(e) {
        //             console.log(e.clientX);
        //             const pixelToViewWidth = (100 * e.clientX / window.innerWidth);
        //             sidebarContent.style.width = `${pixelToViewWidth}${_.widthUnit}`;
        //             sidebarBody.style.width = `${100 - pixelToViewWidth}${_.widthUnit}`;
        //             const sidebarBodyId = e.target.id;
        //             if (sidebarBodyId) {
        //                 const sidebarId = sidebarBodyId.split('&')[0];
        //                 const sidebarEl = document.getElementById(sidebarId);
        //                 sidebarEl.removeEventListener('mouseup', mouseupEvent);
        //             }
        //         });
        //     }
        // });

        // sidebarBody.addEventListener('click', function (e) {
        //     const sidebarBodyId = e.target.id;
        //     if (sidebarBodyId) {
        //         const sidebarId = sidebarBodyId.split('&')[0];
        //         const sidebarEl = document.getElementById(sidebarId);
        //         sidebarEl.style.display = 'none';
        //         sidebarEl.setAttribute('isopen', false);
        //     }
        // });
    }

    open() {
        this.el.style.display = 'flex';
        this.el.style.flexDirection = 'row';
        this.el.setAttribute('isopen', true);
    }

    close() {
        this.el.style.display = 'none';
        this.el.setAttribute('isopen', false);
    }

    isOpen() {
        return this.el.getAttribute('isopen') === 'true' ? true : false;
    }
}

/***/ })
/******/ 	]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* reexport safe */ _sidebar_js__WEBPACK_IMPORTED_MODULE_0__.Sidebar)
/* harmony export */ });
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);



})();

/******/ })()
;
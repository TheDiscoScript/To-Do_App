/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _holdersForDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holdersForDom */ \"./src/holdersForDom.js\");\n\r\n\r\nfunction create(arg) {\r\n  arg.forEach((project) => {\r\n    const projectDiv = document.createElement(\"div\");\r\n    // přidání ID k tomuhle div z database - credit stackoverflow\r\n    projectDiv.dataset.projectid = project.id;\r\n    const image1 = document.createElement(\"img\");\r\n    image1.src = \"images/editPic.jpg\";\r\n    image1.dataset.edit = project.id;\r\n    const image2 = document.createElement(\"img\");\r\n    image2.src = \"images/deletePic.jpg\";\r\n    image2.dataset.delete = project.id;\r\n    image2.classList.add(\"delBut\");\r\n    const title = document.createElement(\"p\");\r\n    title.textContent = project.title;\r\n    const description = document.createElement(\"p\");\r\n    description.textContent = project.description;\r\n\r\n    _holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.projectContainer.appendChild(projectDiv);\r\n    projectDiv.appendChild(image1);\r\n    projectDiv.appendChild(image2);\r\n    projectDiv.appendChild(title);\r\n    projectDiv.appendChild(description);\r\n  });\r\n}\r\n\r\nconst createHolder = { create };\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHolder);\r\n\n\n//# sourceURL=webpack://odinproject_todolist/./src/create.js?");

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _holdersForDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holdersForDom */ \"./src/holdersForDom.js\");\n/* harmony import */ var _formRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formRender */ \"./src/formRender.js\");\n\r\n\r\n\r\nlet database = [\r\n  {\r\n    id: 0,\r\n    title: \"test0\",\r\n    description: \"peniz0\",\r\n    //todo:{}\r\n  },\r\n  {\r\n    id: 1,\r\n    title: \"test1\",\r\n    description: \"penízek1\",\r\n    //todo:{}\r\n  },\r\n  {\r\n    id: 2,\r\n    title: \"test2\",\r\n    description: \"penízek2\",\r\n    //todo:{}\r\n  },\r\n];\r\n\r\nfunction createID() {\r\n  let increment = database[database.length - 1];\r\n  let incrementId = increment.id;\r\n  let newId = incrementId + 1;\r\n  return newId;\r\n}\r\n\r\nfunction updateID() {\r\n  let counter = 0;\r\n  for (let i = 0; i < database.length; i++) {\r\n    database[i].id = counter;\r\n    counter++;\r\n  }\r\n  return database;\r\n}\r\n\r\nfunction pushIntoDatabase() {\r\n  let object = {\r\n    id: createID(),\r\n    title: _holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.formProjectName.value,\r\n    description: _holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.formProjectDescription.value,\r\n  };\r\n  database.push(object);\r\n  return database;\r\n}\r\nfunction removeProject() {\r\n  // const index = database.indexOf(event.target);\r\n  // if (index > -1) {\r\n  //  database.splice(index, 1);\r\n  //}\r\n  database.splice(event.target.getAttribute(\"data-delete\"), 1);\r\n  updateID();\r\n  _formRender__WEBPACK_IMPORTED_MODULE_1__.default.render();\r\n}\r\n\r\nconst databaseHolder = {\r\n  database,\r\n  createID,\r\n  pushIntoDatabase,\r\n  removeProject,\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (databaseHolder);\r\n\n\n//# sourceURL=webpack://odinproject_todolist/./src/database.js?");

/***/ }),

/***/ "./src/formRender.js":
/*!***************************!*\
  !*** ./src/formRender.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _holdersForDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holdersForDom */ \"./src/holdersForDom.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ \"./src/database.js\");\n\r\n\r\n\r\n\r\nfunction clearContainer(arg) {\r\n  arg.innerHTML = \"\";\r\n}\r\nfunction resetForm() {\r\n  _holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.formProjectWrap.setAttribute(\"id\", \"formProjectWholeNone\");\r\n  _holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.formProjectName.value = \"\";\r\n  _holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.formProjectDescription.value = \"\";\r\n}\r\n\r\nfunction render() {\r\n  clearContainer(_holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.projectContainer);\r\n  _create__WEBPACK_IMPORTED_MODULE_1__.default.create(_database__WEBPACK_IMPORTED_MODULE_2__.default.database);\r\n  //fuck\r\n  document.querySelectorAll(\"[data-delete]\").forEach((button) => {\r\n    button.addEventListener(\"click\", (event) => {\r\n      _database__WEBPACK_IMPORTED_MODULE_2__.default.removeProject();\r\n    });\r\n  });\r\n}\r\n\r\nconst renderHolder = { render, resetForm };\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHolder);\r\n\n\n//# sourceURL=webpack://odinproject_todolist/./src/formRender.js?");

/***/ }),

/***/ "./src/holdersForDom.js":
/*!******************************!*\
  !*** ./src/holdersForDom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction abot1() {\r\n  const projectContainer = document.getElementById(\"fkingProjectContainer\");\r\n  const formProjectWrap = document.getElementById(\"formProjectWhole\");\r\n  const addProjectButton = document.getElementById(\"addProject\");\r\n  const cancelProjectButton = document.getElementById(\r\n    \"formProjectCancelAction\"\r\n  );\r\n  const formProjectName = document.getElementById(\"formProjectName\");\r\n  const formProjectDescription = document.getElementById(\r\n    \"formProjectDescription\"\r\n  );\r\n  const createProjectButton = document.getElementById(\r\n    \"formProjectCreateProject\"\r\n  );\r\n\r\n  return {\r\n    projectContainer,\r\n    formProjectWrap,\r\n    addProjectButton,\r\n    cancelProjectButton,\r\n    formProjectName,\r\n    formProjectDescription,\r\n    createProjectButton,\r\n  };\r\n}\r\nconst holderDom = abot1();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (holderDom);\r\n\n\n//# sourceURL=webpack://odinproject_todolist/./src/holdersForDom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _holdersForDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holdersForDom */ \"./src/holdersForDom.js\");\n/* harmony import */ var _formRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formRender */ \"./src/formRender.js\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ \"./src/database.js\");\n\r\n\r\n\r\n\r\n//removeProject\r\n\r\n//toDo items functions inc\r\n\r\n//editProject\r\n\r\n//add project => shows form\r\n_holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.addProjectButton.addEventListener(\"click\", (e) => {\r\n  _holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.formProjectWrap.setAttribute(\"id\", \"formProjectWholeAbsolute\");\r\n});\r\n//cancel form\r\n_holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.cancelProjectButton.addEventListener(\"click\", (e) => {\r\n  _formRender__WEBPACK_IMPORTED_MODULE_1__.default.resetForm();\r\n});\r\n\r\n//create button in form\r\n_holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.createProjectButton.addEventListener(\"click\", (e) => {\r\n  if (_holdersForDom__WEBPACK_IMPORTED_MODULE_0__.default.formProjectName.value == \"\") return;\r\n  //let currentDate = Date.now(); --> app can do X\r\n  //number of actions in 1 ms, so probably not worth longrun\r\n  _database__WEBPACK_IMPORTED_MODULE_2__.default.pushIntoDatabase();\r\n  _formRender__WEBPACK_IMPORTED_MODULE_1__.default.render();\r\n  _formRender__WEBPACK_IMPORTED_MODULE_1__.default.resetForm();\r\n});\r\n\r\nfunction initialize() {\r\n  _formRender__WEBPACK_IMPORTED_MODULE_1__.default.render();\r\n}\r\n\r\n//for now\r\ninitialize();\r\n\r\n//\r\n\n\n//# sourceURL=webpack://odinproject_todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
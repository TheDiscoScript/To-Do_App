/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let database = [\r\n  {\r\n    id: 1,\r\n    title: \"test23\",\r\n    description: \"peniz1\",\r\n    //todo:{}\r\n  },\r\n  {\r\n    id: 2,\r\n    title: \"test2\",\r\n    description: \"penízek2\",\r\n    //todo:{}\r\n  },\r\n];\r\n\r\nconst projectContainer = document.getElementById(\"fkingProjectContainer\");\r\nconst formProjectWrap = document.getElementById(\"formProjectWhole\");\r\nconst addProjectButton = document.getElementById(\"addProject\");\r\n\r\naddProjectButton.addEventListener(\"click\", (e) => {\r\n  formProjectWrap.setAttribute(\"id\", \"formProjectWholeAbsolute\");\r\n});\r\n\r\nconst cancelProjectButton = document.getElementById(\"formProjectCancelAction\");\r\nconst formProjectName = document.getElementById(\"formProjectName\");\r\nconst formProjectDescription = document.getElementById(\r\n  \"formProjectDescription\"\r\n);\r\ncancelProjectButton.addEventListener(\"click\", (e) => {\r\n  resetForm();\r\n});\r\n\r\nconst createProjectButton = document.getElementById(\"formProjectCreateProject\");\r\ncreateProjectButton.addEventListener(\"click\", (e) => {\r\n  if (formProjectName.value == \"\") return;\r\n  //let currentDate = Date.now(); --> app can do X number of actions in 1 ms, so probably not worth longrun\r\n  pushIntoDatabase();\r\n  render();\r\n  resetForm();\r\n});\r\n\r\nfunction render() {\r\n  clearContainer(projectContainer);\r\n  create(database);\r\n}\r\nfunction initialize() {\r\n  render();\r\n}\r\n\r\n//helpfunctions\r\nfunction clearContainer(arg) {\r\n  arg.innerHTML = \"\";\r\n}\r\nfunction create(arg) {\r\n  arg.forEach((project) => {\r\n    const projectDiv = document.createElement(\"div\");\r\n    // přidání ID k tomuhle div z database - credit stackoverflow\r\n    projectDiv.dataset.projectid = project.id;\r\n    const image1 = document.createElement(\"img\");\r\n    image1.src = \"images/editPic.jpg\";\r\n    image1.dataset.edit = project.id;\r\n    const image2 = document.createElement(\"img\");\r\n    image2.src = \"images/deletePic.jpg\";\r\n    image2.dataset.delete = project.id;\r\n    const title = document.createElement(\"p\");\r\n    title.textContent = project.title;\r\n    const description = document.createElement(\"p\");\r\n    description.textContent = project.description;\r\n\r\n    projectContainer.appendChild(projectDiv);\r\n    projectDiv.appendChild(image1);\r\n    projectDiv.appendChild(image2);\r\n    projectDiv.appendChild(title);\r\n    projectDiv.appendChild(description);\r\n  });\r\n}\r\n\r\nfunction createID() {\r\n  let increment = database[database.length - 1];\r\n  let incrementId = increment.id;\r\n  let newId = incrementId + 1;\r\n  return newId;\r\n}\r\n\r\nfunction pushIntoDatabase() {\r\n  let object = {\r\n    id: createID(),\r\n    title: formProjectName.value,\r\n    description: formProjectDescription.value,\r\n  };\r\n  database.push(object);\r\n  return database;\r\n}\r\nfunction resetForm() {\r\n  formProjectWrap.setAttribute(\"id\", \"formProjectWholeNone\");\r\n  formProjectName.value = \"\";\r\n  formProjectDescription.value = \"\";\r\n}\r\n//for now\r\ninitialize();\r\n\n\n//# sourceURL=webpack://odinproject_todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
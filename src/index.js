import holderDom from "./holdersForDom";
import renderHolder from "./formRender";
import databaseHolder from "./database";

//removeProject

//toDo items functions inc

//editProject

//add project => shows form
holderDom.addProjectButton.addEventListener("click", (e) => {
  holderDom.formProjectWrap.setAttribute("id", "formProjectWholeAbsolute");
});
//cancel form
holderDom.cancelProjectButton.addEventListener("click", (e) => {
  renderHolder.resetForm();
});

//create button in form
holderDom.createProjectButton.addEventListener("click", (e) => {
  if (holderDom.formProjectName.value == "") return;
  //let currentDate = Date.now(); --> app can do X
  //number of actions in 1 ms, so probably not worth longrun
  databaseHolder.pushIntoDatabase();
  renderHolder.render();
  renderHolder.resetForm();
});

function initialize() {
  renderHolder.render();
}

//for now
initialize();

//

import holderDom from "./holdersForDom";
import renderHolder from "./formRender";
import databaseHolder from "./database";

//toDo items functions inc

//editProject cancel
holderDom.cancelEditFormButton.addEventListener("click", (e) => {
  renderHolder.resetFormEdit();
  holderDom.formProjectWrapEdit.setAttribute("id", "formProjectWholeNoneEdit");
});
//editProject update
holderDom.updateFormButton.addEventListener("click", (e) => {
  databaseHolder.updateProject();
  renderHolder.render();
  holderDom.formProjectWrapEdit.setAttribute("id", "formProjectWholeNoneEdit");
});
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
//selected project event listener
holderDom.projectContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.tagName.toLowerCase() === "div") {
    //e.target.parentNode.classList.add("selectedProject");

    databaseHolder.selectedProjectID = e.target.parentNode.dataset.projectid;
    databaseHolder.saveToLocalStorage();

    renderHolder.render();
  }
});
function initialize() {
  renderHolder.render();
}

//for now
initialize();

//

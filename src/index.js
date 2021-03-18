import holderDom from "./holdersForDom";
import renderHolder from "./formRender";
import renderToDoHolder from "./toDoRender";
import databaseHolder from "./database";

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
    renderToDoHolder.renderToDo();
  }
});
//toDo items functions inc
holderDom.addToDoButton.addEventListener("click", (e) => {
  holderDom.formToDoDate.value = renderToDoHolder.getTodayDate();
  holderDom.toDoWrapWhole.setAttribute("id", "formToDoWholeAbsolute");
});
holderDom.formToDoCancelToDo.addEventListener("click", (e) => {
  renderToDoHolder.resetToDo();
});
//render todoitems?
holderDom.formToDoCreateTodo.addEventListener("click", (e) => {
  if (holderDom.formToDoName.value == "") return;
  databaseHolder.pushToDoIntoProject();
  renderToDoHolder.renderToDo();
  renderToDoHolder.resetToDo();
});

function initialize() {
  renderHolder.render();
  console.log(databaseHolder.database);
  console.log(databaseHolder.database[0]);
  console.log(databaseHolder.database[0].todo[0]);
  console.log(databaseHolder.database[0].todo[1]);
}

//for now
initialize();

//

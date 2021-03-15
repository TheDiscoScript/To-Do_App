import holderDom from "./holdersForDom";
import createHolder from "./create";
import databaseHolder from "./database";

function clearContainer(arg) {
  arg.innerHTML = "";
}
function resetForm() {
  holderDom.formProjectWrap.setAttribute("id", "formProjectWholeNone");
  holderDom.formProjectName.value = "";
  holderDom.formProjectDescription.value = "";
}
function resetFormEdit() {
  holderDom.formProjectWrapEdit.setAttribute("id", "formProjectWholeNoneEdit");
  holderDom.formProjectNameEdit.value = "";
  holderDom.formProjectDescriptionEdit.value = "";
}
function render() {
  clearContainer(holderDom.projectContainer);
  createHolder.create(databaseHolder.database);
  //delete listener
  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", (event) => {
      databaseHolder.removeProject();
    });
  });
  // edit listener
  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", (event) => {
      databaseHolder.editProject();
    });
  });
}

const renderHolder = { render, resetForm, resetFormEdit };
export default renderHolder;

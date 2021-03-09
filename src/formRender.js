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

function render() {
  clearContainer(holderDom.projectContainer);
  createHolder.create(databaseHolder.database);
  //fuck
  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", (event) => {
      databaseHolder.removeProject();
    });
  });
}

const renderHolder = { render, resetForm };
export default renderHolder;

import holderDom from "./holdersForDom";
import moment from "moment";
import createHolder from "./create";
import databaseHolder from "./database";

function getTodayDate() {
  let thisDay = moment().format("YYYY-MM-DD");
  return thisDay;
}

function resetToDo() {
  holderDom.toDoWrapWhole.setAttribute("id", "formToDoWhole");
  holderDom.formToDoName.value = "";
  holderDom.formToDoDescription.value = "";
  holderDom.formToDoDate.value = getTodayDate();
  holderDom.formToDoPriority.value = "emptyPriority";
  holderDom.formToDoStatus.value = "emptyStatus";
}
function clearContainer(arg) {
  arg.innerHTML = "";
}

function renderToDo() {
  const selectedForShow = document.querySelector(".selectedProject");
  const pickedDat =
    databaseHolder.database[selectedForShow.dataset.projectid].todo;
  clearContainer(holderDom.toDoItemsWrap);

  //data-projectid="0"

  createHolder.createToDo(pickedDat);
}

const renderToDoHolder = { resetToDo, getTodayDate, renderToDo };
export default renderToDoHolder;

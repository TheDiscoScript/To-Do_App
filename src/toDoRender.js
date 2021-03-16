import holderDom from "./holdersForDom";
import moment from "moment";

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

const renderToDoHolder = { resetToDo, getTodayDate };
export default renderToDoHolder;

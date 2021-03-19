import holderDom from "./holdersForDom";
import renderHolder from "./formRender";
import renderToDoHolder from "./toDoRender";
import { v4 as uuidv4 } from "uuid";

//LOCAL STORAGE
const LOCAL_STORAGE_DATABASE_KEY = "task.wholeDatabase";
let database = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATABASE_KEY)) || [
  {
    id: 0,
    title: "This is the name of project",
    description:
      "Each project has a name and a description. You can either delete or edit them",
    todo: [
      {
        id: "0",
        title: "To-Do Name",
        description: "You can put your description here!",
        date: "",
        priority: "",
        status: "",
      },
      {
        id: "1",
        title: "You can create projects without description!",
        description: "To-Do Description1",
        date: renderToDoHolder.getTodayDate(),
        priority: "",
        status: "",
      },
    ],
  },
];
const LOCAL_STORAGE_SELECTED_DATABASE_KEY = "task.selectedProject";
let selectedProjectID = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_DATABASE_KEY
);

function saveToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_DATABASE_KEY, JSON.stringify(database));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_DATABASE_KEY, selectedProjectID);
}
//LOCAL STORAGE

//0 items in database array
function createDummy() {
  let object = {
    id: 0,
    title: "Base project",
    description: "Your project list will never be empty!",
    todo: [
      {
        id: "0",
        title: "To-Do Name",
        description: "You can put your description here!",
        date: "",
        priority: "",
        status: "",
      },
      {
        id: "1",
        title: "You can create projects without description!",
        description: "",
        date: renderToDoHolder.getTodayDate(),
        priority: "",
        status: "",
      },
    ],
  };
  database.push(object);
  return database;
}
//ID
function createID() {
  let increment = database[database.length - 1];
  let incrementId = increment.id;
  let newId = incrementId + 1;
  return newId;
}

function updateID() {
  let counter = 0;
  for (let i = 0; i < database.length; i++) {
    database[i].id = counter;
    counter++;
  }
  return database;
}

//movementindatabase
function pushIntoDatabase() {
  let object = {
    id: createID(),
    title: holderDom.formProjectName.value,
    description: holderDom.formProjectDescription.value,
    todo: [],
  };
  database.push(object);
  saveToLocalStorage();
  return database;
}
function removeProject() {
  database.splice(event.target.getAttribute("data-delete"), 1);
  if (!database.length) {
    createDummy();
    renderHolder.render();
  }
  updateID();
  saveToLocalStorage();
  holderDom.toDoItemsWrap.innerHTML = "";
  renderHolder.render();
}
function editProject() {
  holderDom.formProjectWrapEdit.setAttribute(
    "id",
    "formProjectWholeAbsoluteEdit"
  );
  holderDom.formProjectNameEdit.value =
    event.target.parentNode.childNodes[2].textContent;
  holderDom.formProjectDescriptionEdit.value =
    event.target.parentNode.childNodes[3].textContent;
  let indexOfProject = event.target.parentNode.getAttribute("data-projectid");
  holderDom.updateFormButton.setAttribute("data-databaseindex", indexOfProject);
}
function updateProject() {
  let indexInDatabase = holderDom.updateFormButton.getAttribute(
    "data-databaseindex"
  );
  let selectedProject = database[indexInDatabase];
  if (holderDom.formProjectNameEdit.value == "") {
    alert("Your project needs a name. It cannot be saved without a name.");
  } else {
    selectedProject.title = holderDom.formProjectNameEdit.value;
    selectedProject.description = holderDom.formProjectDescriptionEdit.value;
  }
  saveToLocalStorage();
}
function editToDo() {
  holderDom.formToDoWholeEdit.setAttribute("id", "formToDoWholeAbsoluteEdit");
  holderDom.formToDoNameEdit.value =
    event.target.parentNode.childNodes[2].textContent;
  holderDom.formToDoDescriptionEdit.value =
    event.target.parentNode.childNodes[7].textContent;
  holderDom.formToDoDateEdit.value =
    event.target.parentNode.childNodes[3].textContent;
  holderDom.formToDoPriorityEdit.value =
    event.target.parentNode.childNodes[4].textContent;
  holderDom.formToDoStatusEdit.value =
    event.target.parentNode.childNodes[5].textContent;
  let idOfToDo = event.target.parentNode.getAttribute("data-todoid");
  holderDom.formToDoUpdateEdit.setAttribute("data-idoftodo", idOfToDo);
}
function updateToDo() {
  const selectedProjectSelector = document.querySelector(".selectedProject");
  let selectedProjectTodos =
    database[selectedProjectSelector.dataset.projectid].todo;

  for (let i = 0; i < selectedProjectTodos.length; i++) {
    if (event.target.dataset.idoftodo == selectedProjectTodos[i].id) {
      selectedProjectTodos[i].title = holderDom.formToDoNameEdit.value;
      selectedProjectTodos[i].description =
        holderDom.formToDoDescriptionEdit.value;
      selectedProjectTodos[i].date = holderDom.formToDoDateEdit.value;
      selectedProjectTodos[i].priority = holderDom.formToDoPriorityEdit.value;
      selectedProjectTodos[i].status = holderDom.formToDoStatusEdit.value;
      if (selectedProjectTodos[i].status.value == "Done") {
        event.target.parentNode.className.add("good job!");
      }
    }
  }
  saveToLocalStorage();
}
//credit for next function
//https://stackoverflow.com/questions/16491758/remove-objects-from-array-by-object-property
function removeToDo() {
  //get Project
  const selectedProjectSelector = document.querySelector(".selectedProject");
  let selectedProjectTodos =
    database[selectedProjectSelector.dataset.projectid].todo;
  //get ID that will go in indexof() = this will get us index
  let idVar = event.target.dataset.tododelete;
  // varriable that will be actuall index
  let removeIndex = selectedProjectTodos.map((item) => item.id).indexOf(idVar);
  selectedProjectTodos.splice(removeIndex, 1);
  saveToLocalStorage();
  holderDom.toDoItemsWrap.innerHTML = "";
  renderToDoHolder.renderToDo();
}
//TODO functionality
function pushToDoIntoProject() {
  const selectedProjectForPush = document.querySelector(".selectedProject");
  let objectToDo = {
    id: uuidv4(),
    title: holderDom.formToDoName.value,
    description: holderDom.formToDoDescription.value,
    date: holderDom.formToDoDate.value,
    priority: holderDom.formToDoPriority.value,
    status: holderDom.formToDoStatus.value,
  };
  database[selectedProjectForPush.dataset.projectid].todo.push(objectToDo);
  saveToLocalStorage();
  return database;
}

const databaseHolder = {
  database,
  createID,
  pushIntoDatabase,
  removeProject,
  editProject,
  updateProject,
  saveToLocalStorage,
  selectedProjectID,
  //updateToDoId,
  pushToDoIntoProject,
  editToDo,
  updateToDo,
  removeToDo,
};
export default databaseHolder;

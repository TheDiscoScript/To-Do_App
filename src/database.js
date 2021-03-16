import holderDom from "./holdersForDom";
import renderHolder from "./formRender";

//LOCAL STORAGE
const LOCAL_STORAGE_DATABASE_KEY = "task.wholeDatabase";
let database = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATABASE_KEY)) || [
  {
    id: 0,
    title: "This is the name of project",
    description:
      "Each project has a name and a description. You can either delete or edit them",
    //todo:{}
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

/*let database = [
  {
    id: 0,
    title: "test0",
    description: "peniz0",
    //todo:{}
  },
  {
    id: 1,
    title: "test1",
    description: "penízek1",
    //todo:{}
  },
  {
    id: 2,
    title: "test2",
    description: "penízek2",
    //todo:{}
  },
];*/
//0 items in database array
function createDummy() {
  let object = {
    id: 0,
    title: "Base project",
    description: "Your project list will never be empty!",
  };
  database.push(object);
  return database;
}
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

function pushIntoDatabase() {
  let object = {
    id: createID(),
    title: holderDom.formProjectName.value,
    description: holderDom.formProjectDescription.value,
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

const databaseHolder = {
  database,
  createID,
  pushIntoDatabase,
  removeProject,
  editProject,
  updateProject,
  saveToLocalStorage,
  selectedProjectID,
};
export default databaseHolder;

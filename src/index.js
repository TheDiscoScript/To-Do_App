let database = [
  {
    id: 1,
    title: "test23",
    description: "peniz1",
    //todo:{}
  },
  {
    id: 2,
    title: "test2",
    description: "penízek2",
    //todo:{}
  },
];

const projectContainer = document.getElementById("fkingProjectContainer");
const formProjectWrap = document.getElementById("formProjectWhole");
const addProjectButton = document.getElementById("addProject");

addProjectButton.addEventListener("click", (e) => {
  formProjectWrap.setAttribute("id", "formProjectWholeAbsolute");
});

const cancelProjectButton = document.getElementById("formProjectCancelAction");
const formProjectName = document.getElementById("formProjectName");
const formProjectDescription = document.getElementById(
  "formProjectDescription"
);
cancelProjectButton.addEventListener("click", (e) => {
  resetForm();
});

const createProjectButton = document.getElementById("formProjectCreateProject");
createProjectButton.addEventListener("click", (e) => {
  if (formProjectName.value == "") return;
  //let currentDate = Date.now(); --> app can do X number of actions in 1 ms, so probably not worth longrun
  pushIntoDatabase();
  render();
  resetForm();
});

function render() {
  clearContainer(projectContainer);
  create(database);
}
function initialize() {
  render();
}

//helpfunctions
function clearContainer(arg) {
  arg.innerHTML = "";
}
function create(arg) {
  arg.forEach((project) => {
    const projectDiv = document.createElement("div");
    // přidání ID k tomuhle div z database - credit stackoverflow
    projectDiv.dataset.projectid = project.id;
    const image1 = document.createElement("img");
    image1.src = "images/editPic.jpg";
    image1.dataset.edit = project.id;
    const image2 = document.createElement("img");
    image2.src = "images/deletePic.jpg";
    image2.dataset.delete = project.id;
    const title = document.createElement("p");
    title.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;

    projectContainer.appendChild(projectDiv);
    projectDiv.appendChild(image1);
    projectDiv.appendChild(image2);
    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
  });
}

function createID() {
  let increment = database[database.length - 1];
  let incrementId = increment.id;
  let newId = incrementId + 1;
  return newId;
}

function pushIntoDatabase() {
  let object = {
    id: createID(),
    title: formProjectName.value,
    description: formProjectDescription.value,
  };
  database.push(object);
  return database;
}
function resetForm() {
  formProjectWrap.setAttribute("id", "formProjectWholeNone");
  formProjectName.value = "";
  formProjectDescription.value = "";
}
//for now
initialize();

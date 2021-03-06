let database = [
  {
    id: 1,
    title: "test1",
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
  formProjectWrap.setAttribute("id", "formProjectWholeNone");
  formProjectName.value = "";
  formProjectDescription.value = "";
});

const createProjectButton = document.getElementById("formProjectCreateProject");
createProjectButton.addEventListener("click", (e) => {
  //function to push input into database - but how as an object?
  let object = {
    title: formProjectName.value,
    description: formProjectDescription.value,
  };
  database.push(object);
  render();
  formProjectName.value = "";
  formProjectDescription.value = "";
  formProjectWrap.setAttribute("id", "formProjectWholeNone");
});

function render() {
  clearContainer(projectContainer);
  //later database-description.text = create function
  database.forEach((project) => {
    const projectDiv = document.createElement("div");
    // přidání ID k tomuhle div z database - credit stackoverflow
    projectDiv.dataset.projectId = project.id;
    const image1 = document.createElement("img");
    image1.src = "images/editPic.jpg";
    const image2 = document.createElement("img");
    image2.src = "images/deletePic.jpg";
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
function clearContainer(arg) {
  arg.innerHTML = "";
}
render();

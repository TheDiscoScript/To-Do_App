import holderDom from "./holdersForDom";

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
    image2.classList.add("delBut");
    const title = document.createElement("p");
    title.classList.add("titleOfProject");
    title.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;

    holderDom.projectContainer.appendChild(projectDiv);
    projectDiv.appendChild(image1);
    projectDiv.appendChild(image2);
    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
  });
}

const createHolder = { create };
export default createHolder;

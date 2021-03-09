function abot1() {
  const projectContainer = document.getElementById("fkingProjectContainer");
  const formProjectWrap = document.getElementById("formProjectWhole");
  const addProjectButton = document.getElementById("addProject");
  const cancelProjectButton = document.getElementById(
    "formProjectCancelAction"
  );
  const formProjectName = document.getElementById("formProjectName");
  const formProjectDescription = document.getElementById(
    "formProjectDescription"
  );
  const createProjectButton = document.getElementById(
    "formProjectCreateProject"
  );

  return {
    projectContainer,
    formProjectWrap,
    addProjectButton,
    cancelProjectButton,
    formProjectName,
    formProjectDescription,
    createProjectButton,
  };
}
const holderDom = abot1();

export default holderDom;

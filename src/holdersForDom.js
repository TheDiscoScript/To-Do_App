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

  const formProjectWrapEdit = document.getElementById("formProjectWholeEdit");
  const updateFormButton = document.getElementById("formProjectUpdateProject");
  const cancelEditFormButton = document.getElementById(
    "formProjectCancelActionEdit"
  );
  const formProjectNameEdit = document.getElementById("formProjectNameEdit");
  const formProjectDescriptionEdit = document.getElementById(
    "formProjectDescriptionEdit"
  );

  return {
    projectContainer,
    formProjectWrap,
    addProjectButton,
    cancelProjectButton,
    formProjectName,
    formProjectDescription,
    createProjectButton,
    updateFormButton,
    cancelEditFormButton,
    formProjectNameEdit,
    formProjectDescriptionEdit,
    formProjectWrapEdit,
  };
}
const holderDom = abot1();

export default holderDom;

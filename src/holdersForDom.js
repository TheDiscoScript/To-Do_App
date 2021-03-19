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
  // TODOs
  const toDoWrapWhole = document.getElementById("formToDoWhole");
  const toDoItemsWrap = document.getElementById("toDoItemWrap");
  const addToDoButton = document.getElementById("addToDo");
  //TODOs form
  const formToDoWrap = document.getElementById("formToDoWrap");
  const formToDoName = document.getElementById("formToDoName");
  const formToDoDescription = document.getElementById("formToDoDescription");
  const formToDoDate = document.getElementById("formToDoDate");
  const formToDoPriority = document.getElementById("formToDoPriority");
  const formToDoStatus = document.getElementById("formToDoStatus");
  const formToDoCreateTodo = document.getElementById("formToDoCreateTodo");
  const formToDoCancelToDo = document.getElementById("formToDoCancelToDo");
  //todos edit
  const formToDoWholeEdit = document.getElementById("formToDoWholeEdit");
  const formToDoWrapEdit = document.getElementById("formToDoWrapEdit");
  const formToDoNameEdit = document.getElementById("formToDoNameEdit");
  const formToDoDescriptionEdit = document.getElementById(
    "formToDoDescriptionEdit"
  );
  const formToDoDateEdit = document.getElementById("formToDoDateEdit");
  const formToDoPriorityEdit = document.getElementById("formToDoPriorityEdit");
  const formToDoStatusEdit = document.getElementById("formToDoStatusEdit");
  const formToDoUpdateEdit = document.getElementById("formToDoCreateTodoEdit");
  const formToDoCancelToDoEdit = document.getElementById(
    "formToDoCancelToDoEdit"
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
    //TODOS
    toDoWrapWhole,
    toDoItemsWrap,
    addToDoButton,
    formToDoWrap,
    formToDoName,
    formToDoDescription,
    formToDoDate,
    formToDoPriority,
    formToDoStatus,
    formToDoCreateTodo,
    formToDoCancelToDo,
    //TODOS edit
    formToDoWholeEdit,
    formToDoWrapEdit,
    formToDoNameEdit,
    formToDoDescriptionEdit,
    formToDoDateEdit,
    formToDoPriorityEdit,
    formToDoStatusEdit,
    formToDoUpdateEdit,
    formToDoCancelToDoEdit,
  };
}
const holderDom = abot1();

export default holderDom;

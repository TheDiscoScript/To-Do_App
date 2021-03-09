import holderDom from "./holdersForDom";
import renderHolder from "./formRender";

let database = [
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
];

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
  return database;
}
function removeProject() {
  // const index = database.indexOf(event.target);
  // if (index > -1) {
  //  database.splice(index, 1);
  //}
  database.splice(event.target.getAttribute("data-delete"), 1);
  updateID();
  renderHolder.render();
}

const databaseHolder = {
  database,
  createID,
  pushIntoDatabase,
  removeProject,
};
export default databaseHolder;

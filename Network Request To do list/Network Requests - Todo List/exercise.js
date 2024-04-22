async function recoverToDos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const toDos = await data.json();
  const list = toDos.filter((toDo) => {
    return toDo.completed == false;
  });

  return list;
}

recoverToDos()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("The process is not finished");
  });

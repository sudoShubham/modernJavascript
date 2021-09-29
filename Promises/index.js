const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Couldn't complete request.");
      }
    });

    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.open("GET", resource);
    request.send();
  });
};

getTodos("../AsyncJS/one.json")
  .then((data) => {
    console.log("Promise 1 resolves", data);
    return getTodos("../AsyncJS/two.json");
  })
  .then((data) => {
    console.log("Promise 2 resolves", data);
    return getTodos("../AsyncJS/three.json");
  })
  .then((data) => {
    console.log("Promise 3 resolves", data);
  })
  .catch((err) => {
    console.log(err);
  });

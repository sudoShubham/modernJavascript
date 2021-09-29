const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });

  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", resource);
  request.send();
};

getTodos("./one.json", (err, data) => {
  console.log(data);
  getTodos("./two.json", (err, data) => {
    console.log(data);
    getTodos("./three.json", (err, data) => {
      console.log(data);
    });
  });
});

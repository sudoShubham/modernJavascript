const getToDos = async () => {
  const response = await fetch("../AsyncJS/one.json");
  if (response.status !== 200) {
    throw new Error("Cannot fetch data");
  }
  const data = await response.json();
  return data;
};

getToDos()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

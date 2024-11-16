let empList = [];
const htmlList = document.getElementById("objectList");
const renderData = async () => {
  const res = await fetch("http://localhost:4000/api/v1/emp");
  empList = await res.json();
  empList.forEach((obj) => {
    const listItem = document.createElement("li");
    listItem.innerText = `ID: ${obj.emp_id}, Name: ${obj.name}, Category: ${obj.company}`;
    htmlList.appendChild(listItem);
  });
};
renderData();

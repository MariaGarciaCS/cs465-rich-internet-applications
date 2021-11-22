export function getData(){
  var results = document.getElementById('results');
  var table = document.createElement("table");
  results.appendChild(table);
  

  //add header
  var headerRow = document.createElement('tr');
  table.appendChild(headerRow)
  var headerID = document.createElement('th');
  headerID.innerHTML = "ID";
  headerRow.appendChild(headerID);
  var headerName = document.createElement('th');
  headerName.innerHTML = "Name";
  headerRow.appendChild(headerName);
  var headerUserName = document.createElement('th');
  headerUserName.innerHTML = "User Name";
  headerRow.appendChild(headerUserName);
  var headerEmail = document.createElement('th');
  headerEmail.innerHTML = "Email";
  headerRow.appendChild(headerEmail);
  var headerPhone = document.createElement('th');
  headerPhone.innerHTML = "Phone";
  headerRow.appendChild(headerPhone);

  
  

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < data.length; i++) {
        let newRow = document.createElement('tr');
        let newID = document.createElement('td');
        let newName = document.createElement('td');
        let newUserName = document.createElement('td');
        let newEmail = document.createElement('td');
        let newPhone = document.createElement('td');
        
        
        newID.innerHTML = `${data[i].id}`;
        newRow.appendChild(newID);
        newName.innerHTML = `${data[i].name}`;
        newRow.appendChild(newName);
        newUserName.innerHTML = `${data[i].username}`;
        newRow.appendChild(newUserName);
        newEmail.innerHTML = `${data[i].email}`;
        newRow.appendChild(newEmail);
        newPhone.innerHTML = `${data[i].phone}`;
        newRow.appendChild(newPhone);

        table.appendChild(newRow);
      }
    })
    .catch(console.error);

    document.getElementById('getData').disabled = true;
  

}
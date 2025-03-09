//THIS FUNCTION SERVES A PARTICULAR DISH TO A PARTICULAR TABLE
function serveDish(dishNumber, tableName) {
  console.log("Serving the dish", dishNumber, "to table", tableName);
}

//this function serves a particular number of dishes to a particular table
function serveTable(numOfDishes, tableName) {
  for (let i = 1; i <= numOfDishes; i++) {
    serveDish(i, tableName);
  }
}
//this function serves a particular number of dishes to all tables
function serveRestaurent(numOfDishes, numOfTables) {
  for (let i = 1; i <= numOfTables; i++) {
    serveTable(numOfDishes, i);
  }
}

serveRestaurent(3, 5);

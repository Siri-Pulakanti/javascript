//this function serves a particular number of dishes to all tables
function serveRestaurent(numOfDishes, numOfTables) {
  for (let i = 1; i <= numOfTables; i++) {
    for (let j = 1; j <= numOfDishes; j++) {
      console.log("Serving the dish", j, "to table", i);
    }
  }
}

serveRestaurent(3, 5);

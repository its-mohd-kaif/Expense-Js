// Array For Income Data
let incomeArr = [];
// Array For Expense Data
let expenseArr = [];
// Add Income Function
function addIncome() {
  // Get Value Of Input Fields
  let incomeId = document.getElementById("insource").value;
  let incomeAmount = document.getElementById("inamount").value;

  if (incomeId === "") {
    alert("Please Fill Income Source Field !!");
    document.getElementById("insource").focus();
  } else if (incomeAmount === "") {
    alert("Please Fill Income Amount Field !!");
    document.getElementById("inamount").focus();
  } else {
    // Make Object and Push into income array
    obj = {
      id: Math.floor(Math.random() * 10000),
      incomeId: incomeId,
      incomeAmount: incomeAmount,
    };
    incomeArr.push(obj);
    //   Call Display Income Table Function
    displayIncome(incomeArr);
    //   Make Input Value Blanks After add into table
    document.getElementById("insource").value = "";
    document.getElementById("inamount").value = "";
    //   Call Total Income Function
    totalIncome(incomeArr);
    //   Call Total Balance Function
    totalBalace(incomeArr, expenseArr);
  }
}
// Add Expense Function
function addExpense() {
  // Get Value Of Input Fields
  let expenseId = document.getElementById("exselect").value;
  let expenseAmount = document.getElementById("examount").value;

  if (expenseId === "") {
    alert("Please Fill Expense Source Field !!");
    document.getElementById("exselect").focus();
  } else if (expenseAmount === "") {
    alert("Please Fill Expense Amount Field !!");
    document.getElementById("examount").focus();
  } else {
    // Make Object and Push into income array
    obj = {
      id: Math.floor(Math.random() * 10000),
      expenseId: expenseId,
      expenseAmount: expenseAmount,
    };
    expenseArr.push(obj);
    //   Call Display Expense Table Function
    displayExpense(expenseArr);
    //   Make Input Value Blanks After add into table
    document.getElementById("exselect").value = "";
    document.getElementById("examount").value = "";
    //   Call Total Income Function
    totalExpense(expenseArr);
    //   Call Total Balance Function
    totalBalace(incomeArr, expenseArr);
  }
}
// Total Income Function
function totalIncome(incomeArr) {
  let totalIncome = 0;
  for (let i = 0; i < incomeArr.length; i++) {
    totalIncome += Number(incomeArr[i].incomeAmount);
  }
  document.getElementById("totalIncome").innerHTML = totalIncome + "₹";
  return totalIncome;
}
// Total Expense Function
function totalExpense(expenseArr) {
  let totalExpense = 0;
  for (let i = 0; i < expenseArr.length; i++) {
    totalExpense += Number(expenseArr[i].expenseAmount);
  }
  document.getElementById("totalExpense").innerHTML = totalExpense + "₹";
  return totalExpense;
}
// Total Balance Function
function totalBalace(incomeArr, expenseArr) {
  let income = totalIncome(incomeArr);
  let expense = totalExpense(expenseArr);

  let totalBalace = income - expense;

  document.getElementById("totalBalance").innerHTML = totalBalace + "₹";
}
// Display Income Table
function displayIncome(incomeArr) {
  let table =
    "<table><tr><th>Source</th><th>Amount</th><th>Delete</th><th>Edit</th></tr>";
  incomeArr.forEach((element) => {
    table +=
      "<tr><td>" +
      element.incomeId +
      "</td><td>" +
      element.incomeAmount +
      "</td><td><button class='deleteBtn' onclick=\"delIncome('" +
      element.id +
      "')\">Delete</button></td><td><button class='editIncome' onclick=\"editIncome('" +
      element.id +
      "')\">Edit</button></td>";
  });
  table += "</table>";
  document.getElementById("tableIncome").innerHTML = table;
}
// Function For Delete Income Details
function delIncome(val) {
  for (let i = 0; i < incomeArr.length; i++) {
    if (val == incomeArr[i].id) {
      incomeArr.splice(i, 1);
    }
  }
  displayIncome(incomeArr);
  totalIncome(incomeArr);
  totalBalace(incomeArr, expenseArr);
}
// Function For Edit Income Details
function editIncome(val) {
  for (let i = 0; i < incomeArr.length; i++) {
    if (val == incomeArr[i].id) {
      document.getElementById("insource").value = incomeArr[i].incomeId;
      document.getElementById("inamount").value = incomeArr[i].incomeAmount;
      incomeArr.splice(i, 1);
    }
  }
  displayIncome(incomeArr);
  totalIncome(incomeArr);
  totalBalace(incomeArr, expenseArr);
  let dis = document.getElementsByClassName("editIncome");
  for (let i = 0; i < dis.length; i++) {
    dis[i].disabled = true;
  }
}
// Display Expense Table
function displayExpense(expenseArr) {
  let table =
    "<table><tr><th>Source</th><th>Amount</th><th>Delete</th><th>Edit</th></tr>";
  expenseArr.forEach((element) => {
    table +=
      "<tr><td>" +
      element.expenseId +
      "</td><td>" +
      element.expenseAmount +
      "</td><td><button class='deleteBtn' onclick=\"delExpense('" +
      element.id +
      "')\">Delete</button></td><td><button class='editExpense'  onclick=\"editExpense('" +
      element.id +
      "')\">Edit</button></td>";
  });
  table += "</table>";
  document.getElementById("tableExpense").innerHTML = table;
}
// Function For Delete Expense Details
function delExpense(val) {
  for (let i = 0; i < expenseArr.length; i++) {
    if (val == expenseArr[i].id) {
      expenseArr.splice(i, 1);
    }
  }
  displayExpense(expenseArr);
  totalExpense(expenseArr);
  totalBalace(incomeArr, expenseArr);
}
// Function For Edit Expense Details
function editExpense(val) {
  for (let i = 0; i < expenseArr.length; i++) {
    if (val == expenseArr[i].id) {
      document.getElementById("exselect").value = expenseArr[i].expenseId;
      document.getElementById("examount").value = expenseArr[i].expenseAmount;
      expenseArr.splice(i, 1);
    }
  }
  displayExpense(expenseArr);
  totalExpense(expenseArr);
  totalBalace(incomeArr, expenseArr);
  let dis = document.getElementsByClassName("editExpense");
  for (let i = 0; i < dis.length; i++) {
    dis[i].disabled = true;
  }
}

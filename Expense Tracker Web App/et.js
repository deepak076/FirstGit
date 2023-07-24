const appContainer = document.getElementById("expenseList");
const expenseForm = document.getElementById("expenseForm");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let editIndex = null;

function renderExpenses() {
    appContainer.innerHTML = "";

    if (expenses.length === 0) {
        appContainer.innerHTML = '<li class="list-group-item text-center">No expenses found</li>';
    } else {
        expenses.forEach((expense, index) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = `<b>Amount:</b> Rs.${expense.amount.toFixed(2)}   <b>Description:</b> ${expense.description}`;
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "btn btn-danger";
            deleteButton.addEventListener("click", () => handleDeleteExpense(index));

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.className = "btn btn-primary";
            editButton.addEventListener("click", () => handleEditExpense(index));

            li.appendChild(deleteButton);
            li.appendChild(editButton);

            appContainer.appendChild(li);
        });
    }
}

function addExpense(amount, description) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

function handleDeleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

function handleEditExpense(index) {
    const expense = expenses[index];

    amountInput.value = expense.amount;
    descriptionInput.value = expense.description;

    editIndex = index;
}

function handleForm(event) {
    event.preventDefault();
    const amount = parseFloat(amountInput.value);
    const description = descriptionInput.value.trim();

    if (isNaN(amount) || amount <= 0 || description === "") {
        alert("Please enter a valid input.");
        return;
    }

    if (editIndex !== null) {
        const updatedExpense = { amount, description };
        expenses.splice(editIndex, 1, updatedExpense); // Replace the existing expense with the updated one
        localStorage.setItem("expenses", JSON.stringify(expenses)); // Update the local storage
        editIndex = null; // Reset the editIndex after editing
    } else {
        addExpense(amount, description);
    }

    amountInput.value = "";
    descriptionInput.value = "";
    renderExpenses();
}

expenseForm.addEventListener("submit", handleForm);
document.getElementById("cancelBtn").addEventListener("click", () => {
    editIndex = null;
    amountInput.value = "";
    descriptionInput.value = "";
});

renderExpenses();

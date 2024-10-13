   const TitleInput = document.getElementById('expense-title-inp');
        const AmountInput = document.getElementById('expense-amount-inp');
        const DescriptionInput = document.getElementById('expense-desc-inp');
        const expenseForm = document.getElementById('expense-form');
        const expenseTableBody = document.getElementById('expense-table-body');
        
        // Load existing data from localStorage on page load
        document.addEventListener('DOMContentLoaded', loadExpenses);

        expenseForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const expense = {
                title: TitleInput.value,
                amount: AmountInput.value,
                description: DescriptionInput.value
            };

            // Save expense to localStorage
            saveExpenseToLocal(expense);

            // Add expense to the table
            addExpenseToTable(expense);

            // Clear inputs
            clearInputs();
        });

        function saveExpenseToLocal(expense) {
            const expenses = getExpensesFromLocal();
            expenses.push(expense);
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }

        function getExpensesFromLocal() {
            const expenses = localStorage.getItem('expenses');
            return expenses ? JSON.parse(expenses) : [];
        }

        function loadExpenses() {
            const expenses = getExpensesFromLocal();
            expenses.forEach(expense => addExpenseToTable(expense));
        }

        function addExpenseToTable(expense) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.title}</td>
                <td>${expense.amount}</td>
                <td>${expense.description}</td>
                <td><button class="edit-btn"><i class='bx bx-edit'></i></button></td>
                <td><button class="delete-btn"><i class='bx bxs-trash-alt'></i></button></td>
            `;
            expenseTableBody.appendChild(row);

            const deleteButton = row.querySelector('.delete-btn');
            deleteButton.addEventListener('click', function() {
                row.remove();
                deleteExpenseFromLocal(expense);
            });

            const editButton = row.querySelector('.edit-btn');
            editButton.addEventListener('click', function() {
                const title = row.cells[0].textContent;
                const amount = row.cells[1].textContent;
                const description = row.cells[2].textContent;

                const newTitle = prompt("Edit Title:", title);
                const newAmount = prompt("Edit Amount:", amount);
                const newDescription = prompt("Edit Description:", description);

                if (newTitle !== null) row.cells[0].textContent = newTitle;
                if (newAmount !== null) row.cells[1].textContent = newAmount;
                if (newDescription !== null) row.cells[2].textContent = newDescription;

                updateExpenseInLocal(title, newTitle, newAmount, newDescription);
            });
        }

        function deleteExpenseFromLocal(expense) {
            let expenses = getExpensesFromLocal();
            expenses = expenses.filter(e => e.title !== expense.title);
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }

        function updateExpenseInLocal(oldTitle, newTitle, newAmount, newDescription) {
            const expenses = getExpensesFromLocal();
            const expenseIndex = expenses.findIndex(e => e.title === oldTitle);
            if (expenseIndex !== -1) {
                expenses[expenseIndex].title = newTitle;
                expenses[expenseIndex].amount = newAmount;
                expenses[expenseIndex].description = newDescription;
                localStorage.setItem('expenses', JSON.stringify(expenses));
            }
        }

        function clearInputs() {
            TitleInput.value = '';
            AmountInput.value = '';
            DescriptionInput.value = '';
        }

        // Typing effect
        const text ="Your Expenses";
        const typingElement = document.getElementById("typing");
        let index = 0;
        function typeText() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }
        typeText();

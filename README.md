# Expense-Tracker
The Expense Tracker is a web application designed to help users record and manage their daily expenses. The application features a simple and intuitive interface where users can add, view, edit, and delete expenses, making it a practical tool for personal budgeting and expense management.

Project Title: Expense Tracker

The Expense Tracker is a web application designed to help users record and manage their daily expenses. The application features a simple and intuitive interface where users can add, view, edit, and delete expenses, making it a practical tool for personal budgeting and expense management.

Key Features:
Expense Input Section:

The user can input three fields: the expense title (what the expense was for), the amount spent, and a brief description of the expense.
A button labeled "Add" is provided to submit the expense details. This action saves the expense to the list and the local storage of the browser.
Responsive Design:

The application is fully responsive, meaning it adjusts to various screen sizes, ensuring a smooth experience on both desktops and mobile devices.
The layout of the inputs and table is optimized for different screen sizes. For example, on smaller devices, the form inputs stack vertically instead of horizontally, and the table adapts into a more mobile-friendly layout.
Expense Table:

After adding expenses, they are displayed in a structured table format. Each row represents an expense with columns for the title, amount, description, as well as buttons to edit or delete that entry.
Users can edit or delete individual expenses. The edits update the information in both the table and the local storage.
Edit and Delete Functionality:

When a user clicks the "Edit" button, a prompt allows them to update the details of the expense (title, amount, and description). These changes are reflected in the table and local storage.
Clicking the "Delete" button removes the corresponding expense from both the table and the local storage.
Local Storage Persistence:

The app uses localStorage, a built-in feature of modern browsers, to save the expense data. This ensures that even if the user refreshes the page or closes the browser, their expenses will remain available the next time they visit.
When the page loads, it automatically fetches and displays any previously stored expenses.
Interactive User Experience:

The project leverages ScrollReveal.js to animate the appearance of the input fields for a smoother and more visually engaging experience.
A typing animation is included, giving a dynamic introduction to the expense table with the phrase "Your Expenses," creating an engaging experience for the user.
Technologies Used:
HTML: For structuring the content of the web application.
CSS: For styling and making the design responsive across different devices.
JavaScript: For handling interactivity, form submissions, local storage operations, and dynamic updates to the expense table.
ScrollReveal.js: For smooth animation effects when input fields are revealed.
Boxicons: For icons used in the edit and delete buttons, adding a modern and visual touch to the application.
How It Works:
The user enters an expense (title, amount, description) and submits it using the "Add" button.
The expense is added to the table and stored in the browser’s local storage.
Users can edit or delete an expense using the corresponding buttons. Edits update the information in real-time, while deletions remove the data from both the table and storage.
This project is ideal for learning how to build interactive web applications with dynamic data handling and also demonstrates practical usage of JavaScript and web storage solutions.

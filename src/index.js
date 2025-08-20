document.addEventListener("DOMContentLoaded", () => {
    // Select the form element by its ID
    const form = document.getElementById('create-task-form');

    // Add a submit event listener to the form
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior (e.g., page reload)
        event.preventDefault();

        // 1. Get the target element with the name "new-task-description"
        // using document.querySelector based on the name attribute.
        const taskInput = document.querySelector('[name="new-task-description"]');
        const task = taskInput ? taskInput.value : '';

        // If the task input is empty, do nothing
        if (!task.trim()) { // .trim() removes whitespace from both ends of a string
            return;
        }

        // Create a new li element
        const newLi = document.createElement('li');
        newLi.textContent = task;

        const taskList = document.getElementById('tasks');
        if (taskList) {
            // Ensure the taskList element exists before appending
            taskList.appendChild(newLi);
        } else {
            console.error("Element with ID 'task' not found.");
        }

        // Clear the input field after adding the task
        if (taskInput) {
            taskInput.value = '';
        }

        console.log('Form submitted, default behavior prevented!');
    });
});
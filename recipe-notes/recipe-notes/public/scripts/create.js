document.getElementById('createForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('ingredients', document.getElementById('ingredients').value);
    formData.append('instructions', document.getElementById('instructions').value);
    formData.append('photo', document.getElementById('photo').files[0]);

    const response = await fetch('/recipes', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('Recipe created successfully!');
        document.getElementById('createForm').reset();
    } else {
        alert('Failed to create recipe');
    }
});

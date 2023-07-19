
// Create web server application
const express = require('express');
const app = express();

// Import the 'comments' module
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getAll());
});

// Get comments by ID
app.get('/comments/:id', (req, res) => {
    res.json(comments.getById(req.params.id));
});

// Create comment
app.post('/comments', (req, res) => {
    const newComment = comments.create(req.body.username, req.body.message);
    res.json(newComment);
});

// Update comment
app.put('/comments/:id', (req, res) => {
    const updatedComment = comments.update(req.params.id, req.body.username, req.body.message);
    res.json(updatedComment);
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
    comments.delete(req.params.id);
    res.sendStatus(204);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

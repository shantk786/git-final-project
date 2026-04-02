const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get all books
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/books');
        return res.status(200).json(response.data);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching books" });
    }
});

// Get book by ISBN
router.get('/isbn/:isbn', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/books/${req.params.isbn}`);
        return res.status(200).json(response.data);
    } catch (err) {
        return res.status(404).json({ message: "Book not found" });
    }
});

// Get books by author
router.get('/author/:author', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/books/author/${req.params.author}`);
        return res.status(200).json(response.data);
    } catch (err) {
        return res.status(404).json({ message: "Author not found" });
    }
});

// Get books by title
router.get('/title/:title', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/books/title/${req.params.title}`);
        return res.status(200).json(response.data);
    } catch (err) {
        return res.status(404).json({ message: "Title not found" });
    }
});

module.exports = router;
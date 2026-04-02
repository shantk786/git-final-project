const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * GET ALL BOOKS
 * Uses Promises (.then)
 */
router.get('/', (req, res) => {
    axios.get('http://localhost:5000/books')
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            res.status(500).json({ message: "Error fetching books" });
        });
});

/**
 * GET BOOK BY ISBN
 * Uses async/await
 */
router.get('/isbn/:isbn', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/books/${req.params.isbn}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(404).json({ message: "Book not found" });
    }
});

/**
 * GET BOOKS BY AUTHOR
 * Uses Promises (.then)
 */
router.get('/author/:author', (req, res) => {
    axios.get(`http://localhost:5000/books/author/${req.params.author}`)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            res.status(404).json({ message: "Author not found" });
        });
});

/**
 * GET BOOKS BY TITLE
 * Uses async/await
 */
router.get('/title/:title', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/books/title/${req.params.title}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(404).json({ message: "Title not found" });
    }
});

module.exports = router;

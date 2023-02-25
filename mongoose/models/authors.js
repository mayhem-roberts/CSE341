const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
        {
            author: {
                type: String,
                required: true,
            },
            birthday: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
            bookCount: {
                type: Number,
                required: true,
            }
        }
    )

module.exports = mongoose.model("author", authorSchema, "authors");
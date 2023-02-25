const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
            {
                author: {
                    type: String,
                    required: true,
                },
                country: {
                    type: String,
                    required: true,
                },
                imageLink: {
                    type: String,
                },
                language: {
                    type: String,
                    required: true,
                },
                link: {
                    type: String,
                },
                pages: {
                    type: Number,
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
                year: {
                    type: Number,
                    required: true,
                }  
            }
        )
module.exports = mongoose.model("book", bookSchema, "books");
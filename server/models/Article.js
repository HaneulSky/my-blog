const {Schema, model} = require("mongoose");

const schema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
        },
    },
    {
        timestamps: {createdAt: "created_at"},
    }
);

module.exports = model("Article", schema);

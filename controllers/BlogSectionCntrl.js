const Blog = require("../models/BlogSection");

const getSpecificBlog = async (req, res) => {
    try {
        const blog = await Blog.find({ displayOnPage: true}).limit(2);
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getBlog = async (req, res) => {
    try{
        const blog = await Blog.find();
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.status(201).json({ message: "Blog Section Data Add.", data: newBlog});
    } catch (error) {
        console.error("Error Creating Blog Section Data", error);
        res.status(500).json({ error: "Failed to Create Blog Section Data" });
    }
};

const putBlogById = async (req, res) => {
    let result = await Blog.updateOne(
        { _id: req.params.id },
        {
            $set: req.body,
        }
    );
    res.send(result);
};

const getBlogById = async (req, res) => {
    let result = await Blog.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "No Record Found." });
    }
};

const deleteBlogById = async (req, res) => {
    const result = await Blog.deleteOne({ _id: req.params.id });
    res.send(result);
};

module.exports = {
    getBlog,
    getBlogById,
    getSpecificBlog,
    postBlog,
    putBlogById,
    deleteBlogById,
}
const Testimonial = require("../models/TestimonialSection");

const getSpecificTestimonial = async (req, res) => {
    try{
        const testimonial = await Testimonial.find({ displayOnPage: true }).limit(3);
        res.json(testimonial);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTestimonial = async (req, res) => {
    try{
        const testimonial = await Testimonial.find();
        res.json(testimonial);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postTestimonial = async (req, res) => {
    try{
        const newTestimonial = await Testimonial.create(req.body);
        res.status(201).json({ message: "Testimonial Section Data Add.", data: newTestimonial});
    } catch (error) {
        console.error("Error Creating Testimonial Section Data", error);
        res.status(500).json({ error: "Failed to Testimonial Section Data"});
    }
};

const putTestimonialById = async (req, res) => {
    let result = await Testimonial.updateOne(
        { _id: req.params.id},
        {
            $set: req.body,
        }
    );
    res.send(result);
};

const getTestimonialById = async (req, res) => {
    let result = await Testimonial.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "No Record Found."})
    }
};

const deleteTestimonialById = async (req, res) => {
    const result = await Testimonial.deleteOne({ _id: req.params.id });
    res.send(result);
};

module.exports = {
    getSpecificTestimonial,
    getTestimonial,
    getTestimonialById,
    postTestimonial,
    putTestimonialById,
    deleteTestimonialById
}
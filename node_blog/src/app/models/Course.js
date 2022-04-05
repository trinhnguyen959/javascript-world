const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const autoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: String, require: true },
        description: { type: String },
        videoId: { type: String, require: true },
        level: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        deletedAt: { type: Date },
    },
    {
        _id: false,
        timestamps: true,
    },
);

// 2 cách add plugin -> add mongoose, add schema trực tiếp
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
Course.plugin(autoIncrement);

module.exports = mongoose.model('Course', Course);

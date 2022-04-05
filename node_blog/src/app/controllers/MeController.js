const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQueried = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            courseQueried = courseQueried.sort({
                [req.query.column]: req.query.type,
            });
        }

        Promise.all([courseQueried, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // Course.countDocumentsDeleted()
        // 	.then(deletedCount => {
        // phải promise all vì bất đồng bộ
        // 	})
        // 	.catch(() => { });

        // Course.find({})
        // 	.then((courses) =>
        // 		res.render('me/stored-courses', {
        // 			courses: multipleMongooseToObject(courses),
        // 		}),
        // 	)
        // 	.catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();

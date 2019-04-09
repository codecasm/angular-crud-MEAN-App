var studentModel = require('../models/students');

var students = {
    getAll: function (req, res) {
        studentModel.find(function (err, docs) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'DB error' + err, docs: "" });
            } else {
                res.status(200).json({ status: 'success', message: 'DB success', docs: docs });
            }
        });
    },

    getOne: function (req, res) {
        studentModel.findById(req.params.id, function (err, docs) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'DB error' + err, docs: "" });
            } else {
                res.status(200).json({ status: 'success', message: 'DB success', docs: docs });
            }
        });
    },

    create: function (req, res) {

        var student = new studentModel();

        student.name = req.body.name;
        student.contact = req.body.contact;
        student.gender = req.body.gender;
        student.email = req.body.email;
        student.course = req.body.course;
        student.address = req.body.address;


        student.save(function (err, docs) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'DB error' + err, docs: "" });
            } else {
                res.status(200).json({ status: 'success', message: 'DB added success', docs: docs });
            }
        });
    },

    update: function (req, res) {
        studentModel.findById(req.params.id, function (err, docs) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'DB error' + err, docs: "" });
            } 
            
            docs.name=req.body.name;
            docs.contact=req.body.contact;
            docs.gender=req.body.gender;
            docs.email=req.body.email;
            docs.course=req.body.course;
            docs.address=req.body.address;
            
            docs.save(function(err){
                if (err) {
                    res.status(500).json({ status: 'error', message: 'DB error' + err, docs: "" });
                }
                else {
                    res.status(200).json({ status: 'success', message: 'DB update success', docs: docs });
                }
            });
            
        });
    },

    delete: function (req, res) {
        studentModel.remove({
            _id: req.params.id
        }, function (err, docs) {
            if (err) {
                res.status(500).json({ status: 'error', message: 'DB error' + err, docs: docs });
            } else {
                res.status(200).json({ status: 'success', message: 'DB delete success', docs: docs });
            }
        });
    }
};

module.exports = students;
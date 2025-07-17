const express = require('express');
const { body, validationResult } = require('express-validator');
const Student = require('../models/student');

const router = express.Router();

// retrieve all (/students)
router.get('/', async (req, res) => {
    const students = await Student.findAll();
    res.json(students);
});

// retrieve by id (/students/{id})
router.get('/:id', async (req, res) => {
    const student = await Student.findByPk(req.params.id)
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
});

// create student (/students)
router.post(
    '/',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email required'),
        body('program').notEmpty().withMessage('Program is required')
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log("errors:" + errors);
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const student = await Student.create(req.body);
            res.status(201).json(student);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
);


// update student (/students/{id})
router.put(
    '/:id',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email required'),
        body('program').notEmpty().withMessage('Program is required')
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log("errors:" + errors);
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const student = await Student.findByPk(req.params.id);
            if (!student) return res.status(404).json({ error: 'Student not found' });

            await student.update(req.body);
            res.status(200).json(student);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
);

// Delete student (/students/:id)
router.delete('/:id', async (req, res) => {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    await student.destroy();
    res.json({ message: 'Student deleted successfully' });
});

module.exports = router;
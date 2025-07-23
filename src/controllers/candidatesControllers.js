const Candidates = require('../models/candidatesModel');

exports.createCandidates = async(req, res) => {
    try {
        const {name, email, course, position} = req.body;
        const candidates = await Candidates.fileCOC(name, email, course, position);
        res.status(201).json(candidates);
    } catch (error) {
        res.status(500).json({error: error.message});
        console.log(error);
        
    }
}

exports.updateFiledCoC = async(req, res) => {
    try {
        const {id, status, approved_by} = req.body;
        const update_coc = await Candidates.updateCoC(id, status, approved_by);
        res.json(update_coc)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidates.findAllCandidates();
        res.json(candidates);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getCandidatesById = async (req, res) => {
    try {
        const candidate = await Candidates.getCandidatesById(req.params.id);
        res.json(candidate);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
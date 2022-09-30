//controllers/skills.js

const Skill = require('../models/skill')

module.exports = {
    index, 
    show, 
    new: newSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Express Dev-Skills'
    })
}

function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Express Dev-Skills Show'
    });
  }

  function newSkill(req, res) {
    res.render('skills/new')
  }
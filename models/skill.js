const skills = [
    {id: 123456, skill: 'Learn Javacript', done: true},
    {id: 234567, skill: 'Learn For Loops', done: true}, 
    {id: 345678, skill: 'Learn Routes', done: false}
]

module.exports = {
    getAll, 
    getOne, 
    create,
    deleteOne,
    updateOne,
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create (skill) {
    skill.id= Date.now() % 1000000
    skill.done = false
    skills.push(skill)
} 

function deleteOne (id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill =>skill.id === id)
    skills.splice(idx, 1)
}

function updateOne (id, skill) {
    skillToUpdate = getOne(id)
    skillToUpdate.skill = skill
}
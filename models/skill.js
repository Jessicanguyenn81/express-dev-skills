const skills = [
    {id: 123456, skill: 'Learn Javacript', done: true},
    {id: 234567, skill: 'Learn For Loops', done: true}, 
    {id: 345678, skill: 'Learn Routes', done: false}
]

module.exports = {
    getAll, 
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}
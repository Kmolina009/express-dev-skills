module.exports = {
    getAll,
    getOne
};



const skills = [
    {id: "1", desc: "JavaScript"},
    {id: "2", desc: "HTML5"},
    {id: "3", desc: "CSS3"},
];


function getAll() {
    return skills
}

function getOne(id) {
    return skills.filter(skill => skill.id === id)[0]
}
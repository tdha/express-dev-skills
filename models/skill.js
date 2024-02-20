const skills = [
    {id: 100, skill: 'HTML', acquired: true},
    {id: 101, skill: 'CSS', acquired: true},
    {id: 102, skill: 'Javascript', acquired: true},
    {id: 103, skill: 'GitHub', acquired: true},
    {id: 104, skill: 'NodeJS', acquired: true},
    {id: 105, skill: 'Express', acquired: true},
    {id: 106, skill: 'MongoDB', acquired: false},
    {id: 200, skill: 'React', acquired: false},
    {id: 201, skill: 'AJAX', acquired: false},
    {id: 202, skill: 'API', acquired: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }
const skills = [
    {id: 100, skill: 'HTML', acquired: true},
    {id: 101, skill: 'CSS', acquired: true},
    {id: 102, skill: 'Javascript', acquired: true},
    {id: 103, skill: 'GitHub', acquired: true},
    {id: 202, skill: 'NodeJS', acquired: true},
    {id: 204, skill: 'Express', acquired: true},
    {id: 205, skill: 'MongoDB', acquired: false},
    {id: 302, skill: 'React', acquired: false},
    {id: 304, skill: 'AJAX', acquired: false},
    {id: 306, skill: 'API', acquired: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  };
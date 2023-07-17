const students = [
    {
      id: 1,
      name: 'John Doe',
      age: 18,
      grade: 'A'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 17,
      grade: 'B'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      age: 19,
      grade: 'A+'
    },
];

module.exports = {
    getAll: function() {
        return students;   
    }
};
var students = [ {
    name : 'Bipin Gurung', college : 'snc', phone : 9819041679,faculty : 'Engineering',address : 'Ktm',age : 20,gender : 'male',
   },
   {
   name : 'Rahool Chy', college : 'snc', phone : 9802768912,faculty : 'Graphics',address : 'siraha',age : 21,gender : 'male',
   },
   {
   name : 'Rojan stha', college : 'isslington', phone : 9833004167,faculty : 'Netwroking',address : 'Ktm',age : 20,gender : 'male',
   },
   {
   name : 'Sanjiv chy', college : 'Ismt', phone : 9897122270,faculty : 'Graphics',address : 'siraha',age : 21,gender : 'male',
   },
   {
   name : 'Yuvraj Saud', college : 'isslingtone', phone : 9838218822,faculty : 'Designer',address : 'pokhara',age : 22,gender : 'male',
   },
   {
   name : 'Ajay limbu', college : 'Ismt', phone : 9845761244,faculty : 'Designer',address : 'Jhapa',age : 21,gender : 'male',
   },
   {
   name : 'Sujan stha', college : 'Isslingtone', phone : 9812877733,faculty : 'Networking',address : 'Ktm',age : 22,gender : 'male',
   },
   {
   name : 'Bipwasi tuladhar', college : 'Ismt', phone : 98127655,faculty : 'Engineering',address : 'Ktm',age : 20,gender : 'male',
   },
   {
   name : 'Sunny Bomjan', college : 'Isslingtone', phone : 9812342132,faculty : 'Networking',address : 'Jhapa',age : 22,gender : 'male',
   }
]
const id = ['12','22','15','46','30','20','25','11','30','28','17','19','21','24','13']
   
//create array of students name

// const nameOfStudents = students.map(function (names) {
//     return names.name
// })
// console.log(nameOfStudents);

// var studentList = students.map((stdname)=> {
//     return `${stdname.name} ${stdname.college} - ${stdname.address}`
// })
// console.log(studentList);

// // var newId = id.map((ids) => {
// //     return Math.sqrt(ids)
// // })
// // var idTimeTwo = id.map((ids) => {
// //     return ids * 2;
// // })
// var newId = id.map(ids => Math.sqrt(ids))
// var idTimesTwo = id.map(ids => ids * 2)

// console.log(newId);
// console.log(idTimesTwo);

// var idMaps = id.map((ids)=> Math.sqrt(ids)).map((newId)=> newId * 2) 
// console.log(idMaps);

var nameMaping = students.map((names) => {
    return `Students name : ${names.name}`
})
console.log(nameMaping);


var details = students.map((detailsStd) => {
    return `${detailsStd.name} -- Addres -- ${detailsStd.address} -- college -- ${detailsStd.college}`
});


// console.log(details);
const studentsList =  students.map((student) => {
    if(student.college == 'ismt'){
        return{
            ...student,
            number: student.number/ 2
        }
    }
    return student;
})

console.log(studentsList);
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

//Filter arreys method

var filterId = id.filter(function (newId) {
    return newId >= '20' && newId <= '30'
}).sort((a,b) => (a > b ? 1 : -1))
console.log(filterId);

//Isslingtone college filter // and students name maping

var isslingtoneCollege = students.filter((isslingtone) => {
    return isslingtone.college === 'Isslingtone' 
}).map((isslingtoneStudents) => {
    return isslingtoneStudents.name
}).toString()
console.log(isslingtoneCollege);


var facultyEngi = students.filter((facultys) => facultys.faculty === 'Engineering')

console.log(facultyEngi);
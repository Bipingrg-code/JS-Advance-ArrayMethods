const id = ['12','22','15','46','30','20','25','11','30','28','17','19','21','24','13']

var combainId = id.map((ids) => ids).filter(filterid => filterid >= 20).sort((a,b) => a-b).reduce((a,b) => a+b,0)

// console.log(combainId);
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
   name : 'Ajay limbu', college : 'Ismt', phone : 9845761244,faculty : 'Designer',address : 'Jhapa',age : 27,gender : 'male',
   },
   {
   name : 'Sujan stha', college : 'Isslingtone', phone : 9812877733,faculty : 'Networking',address : 'Ktm',age : 225,gender : 'male',
   },
   {
   name : 'Bipwasi tuladhar', college : 'Ismt', phone : 98127655,faculty : 'Engineering',address : 'Ktm',age : 23,gender : 'male',
   },
   {
   name : 'Sunny Bomjan', college : 'Isslingtone', phone : 9812342132,faculty : 'Networking',address : 'Jhapa',age : 24,gender : 'male',
   }
   ]

//    var deatailsStd = students.filter((engineering) => {
//        return engineering.faculty === 'Engineering'
//    }).map((namesAndColleges) => {
//        return `Engineering Students name : ${namesAndColleges.name} and Enineering Students colleges : ${namesAndColleges.college}`
//    })


//    console.log(deatailsStd);

var ageMaping = students.filter((ageFilter) => ageFilter.age >= 22 && ageFilter.age <= 25).map((nameMap) => {
    return `'Name of normalAgeStudents -- ${nameMap.name} and age is ${nameMap.age} -- address -- ${nameMap.address}`
}).sort((a,b)=> {
  if (a.age > b.age) {
      return 1
  }else {
      return -1
  }
})
console.log(ageMaping);

var numAndAdd = students.filter((add) => add.address === 'Ktm').map((addMaping) => {
    return `Address is : ${addMaping.address} name is : ${addMaping.name} cont num ${addMaping.phone}`
}).sort((a,b) => (a.phone > b.phone ? 1 : -1));
console.log(numAndAdd);
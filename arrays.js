var colleges = [{
    name : 'Colleges name1',
    faculty : 'Engineering',
    admissionIntek : 'JAN/feb',
    start : 2012,
},
{
    name : 'Colleges name2',
    faculty : 'Medical',
    admissionIntek : 'march/april',
    start : 2010,
},
{
    name : 'Colleges name3',
    faculty : 'Engineering',
    admissionIntek : 'jun/july',
    start : 2015,
},{
    name : 'Colleges name4',
    faculty : 'Law',
    admissionIntek : 'JAN/feb',
    start : 2008,
},{
    name : 'Colleges name5',
    faculty : 'Sceince&technology',
    admissionIntek : 'Sep/oct',
    start : 2006,
},
{
    name : 'Colleges name6',
    faculty : 'Arts',
    admissionIntek : 'JAN/feb',
    start : 2002,
},{
    name : 'Colleges name7',
    faculty : 'Medical',
    admissionIntek : 'oct/nov',
    start : 2010,
}]

//forEach
// colleges.forEach(function(college){
// console.log(college);
// })

//  colleges.forEach(function(college) {
//     console.log(college);
// })

var ages = ['21','20','23','16','18','21','18','19','16','21','18','20','25','28','30']

// let canAdmin = [];
// let canSuperAdmin = [];

// for( let i = 0;  i< age.length; i++){
//     if(age[i] >= 20 ){
//         canAdmin.push(age[i]);
//     }
// }

// for ( let i = 0; i < canAdmin.length; i++){
//     if(canAdmin[i] >= 25){
//         canSuperAdmin.push(canAdmin[i]);
//     }
// }
// var superAdmin = ages.filter((age) => {
//     return age >= 20 && age <= 25
// })
// console.log(superAdmin);
// console.log(`this is admin${canAdmin}`);
// console.log(`this is superadmin ${canSuperAdmin}`);


//ARRAY FILTER


// var canAdmin = age.filter(function (admins) {
//     if(admins >= 20){
//         return true;
//     }
// })
// console.log(canAdmin);

// var admin = age.filter(canadmin => {
//     return canadmin >= 20
// })
// console.log(admin);

// const oldClz = colleges.filter(function (college) {
//     if(college.start >= 2010){
//         return true
//     }    
// })
// console.log(oldClz);

// var oldCollege =  colleges.filter((college)=> {
//      return college.start >= 2010 && college.faculty === 'Engineering'
// })
// console.log(oldCollege);

// var engineeringCollege = colleges.filter(function (ecollege) {
//     return ecollege.faculty === 'Engineering'
// })
// console.log(engineeringCollege);

// var engCollege =  colleges.filter(ecollege => ecollege.faculty === 'Engineering')
// console.log(engCollege);


//ARRAYS MAPS

//create array of college name

// var collegeName = colleges.map(function (collegenames) {
//     return collegenames.name
    
// })
// console.log(collegeName);
const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };


let mat = ({teachers, students})=>{

  let obj = {
    mathTeachersCount :  teachers,
    mathStudentsCount :  students
  }
  return obj 
 }
let hist = ({teachers, students})=>{

  let obj = {
    historyTeachersCount :  teachers,
    historyStudentsCount :  students
  }
  return obj 
 }


 let pattern = ({mathTeachersCount,historyTeachersCount, mathStudentsCount, historyStudentsCount })=>{
  
  let obj ={mathTeachersCount,historyTeachersCount, mathStudentsCount, historyStudentsCount}
  return obj

 }

let dept = ({math, history})=>{

  let math1 = mat(math)
  let hist1 = hist(history)
  let obj ={...math1, ...hist1}
  let  patt = pattern(obj) 
  let lastObj = {...patt}
  return lastObj

}  

let countCalculation = ({departments})=>{  

  let dept1 = dept(departments)
  return dept1

}

console.log(countCalculation(school))

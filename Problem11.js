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





let finsh = ({name, className, scores})=>{
    let ar12 = {name, className, scores}
    return ar12
}

let solution = (arr1)=>{

    let ar = arr1.map(function(ele, i){
        let  obj = ele.scores;
        
        let sum = obj.math+obj.english+obj.history+obj.science
        ele["total"]=sum;
        return ele
    }).sort(function(a,b){
        return b.total-a.total
    })

    let ar2 = finsh(ar[0])



    return ar2
}

let findTopStudent = ({students})=>{
    let arr = students
    let solu = solution(arr)
    return solu
}


console.log( findTopStudent(school, 'math'))


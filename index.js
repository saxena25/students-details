
function Students(name,rollno, clas, section,marks){
    this.name = name;
    this.rollno = rollno;
    this.class = clas;
    this.section = section;
    this.marks = marks;

    this.printreportcard = function(){
        console.log(`
        +--------------------+
        |     REPORT CARD    |
        +--------------------+
        | Name     - ${student1.name} |
        | Roll no. - ${student1.rollno}      |
        | Class  - ${student1.class}       |
        | Section  - ${student1.section}       |
        | Science  - ${s1.science}      |
        | S.Sc     - ${s1.social_science}      |
        | Maths    - ${s1.maths}      |
        | English  - ${s1.english}      |     
        | Hindi    - ${s1.hindi}      |
        | Prectage - 74.8 %  |
        +--------------------+`);
    }
}

function marks(science, maths, social_science,english,hindi){
    this.science = science;
    this.maths = maths;
    this.social_science = social_science;
    this.english = english;
    this.hindi = hindi;

    // this.top3subjects = function(){
    //     let high = 0;
    //     let arr = [];
    //     for(let i = 0; i < allmarks.length; i++){

    //         if(allmarks[i] > high){
    //             arr += allmarks[i];
    //             alldata[i] = high
    //         }
    //         else{

    //         }
            
    //     }
    //     console.log(arr)
    // }
}


let s1 = new marks(80,70,60,50,40);
let s2 = new marks(50,60,70,80,90);
let s3 = new marks(40,30,60,70,80);
let allmarks = [];
allmarks.push(s1,s2,s3);

top3subjects();


let student1 = new Students('Hrithik',12,'XII','A',s1);
let student2 = new Students('abhishek',15,'XI','B',s2);
let student3 = new Students('Sachin',20,'IX','C',s3);

let alldata = [];
alldata.push(student1,student2,student3);

student1.printreportcard();

// console.log(alldata);
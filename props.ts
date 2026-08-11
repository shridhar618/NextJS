interface studentProps{
  name:String;
  age:number;
  marks:number;
}

function displayStudent(props: studentProps): void{
  console.log("Name", props.name);
  console.log("Age",props.age);
  console.log("Marks",props.marks);
}
const student={
  name:"Shrishti",
  age:22,
  marks:90
};
displayStudent(student);
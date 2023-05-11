
import './App.css';
import React from 'react';
import Student from './components/Student';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      students:[
        {
          name: "Do van thang",
          mark: 7,
          telephone:["102983012983","98123791"]
        },
        {
          name: "nguyen van a",
          mark: 9,
          telephone:["102983012983","98123791"]
        },
      ],
      className: "T2203E",
      new_student:{
        name:"",
        mark:0,
        telephone:""
      }
    }
    this.changeClassName = this.changeClassName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitStudent = this.submitStudent.bind(this);
  }
  changeClassName(event){
      const v = event.target.value;
      this.setState({
        className:v
      })
  }

  handleInput(event){
    const input = event.target;
    const new_student = this.state.new_student;
    new_student[input.name] = input.value;
  
    this.setState({
      new_student: new_student
    })
  }
  submitStudent(event){
    event.preventDefault();
    const new_student = this.state.new_student;
    new_student.telephone = [new_student.telephone];
    const students = this.state.students;
    students.push(new_student);
    this.setState({students:students});
  }
  render(){ 
    const students = this.state.students;
    const className = this.state.className;
    const new_student = this.state.new_student;
      return (
        <div className="App">
          <h1>Danh sach sinh vien lop {className}</h1>
          {
          students.map((v,k)=>{
            return <Student key = {k} name = {v.name} mark = {v.mark} telephone = {v.telephone}></Student>
          })
         }
           <hr/>
           <input type='text' onChange={this.changeClassName} value={className} placeholder='Enter class name'></input>
           <hr/>
           <h2>them sinh vien</h2>
           <form method='post' onSubmit={this.submitStudent}> 
            <input name='name' onChange={this.handleInput} value={new_student.name} type='text' placeholder='name'/>
            <input name='mark' onChange={this.handleInput} value={new_student.mark} type='number' placeholder='mark'/>
            <input name='telephone' onChange={this.handleInput} value={new_student.telephone} type='text' placeholder='telephone'/>
            <button type='submit'>submit</button>
           </form>
           <hr/>
        </div>
      );
  }
}
// function App() {
//   const tels = ["102983012983","98123791"];
//   return (
//     <div className="App">
//         <Student name = "Do van thang" mark = "7" telephone = {tels}/>
//         <Student name = "nguyen van a" mark = "9" telephone = {tels}/>
//     </div>
//   );
// }

export default App;

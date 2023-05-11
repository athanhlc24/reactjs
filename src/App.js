
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
      className: "T2203E"
    }
    this.changeClassName = this.changeClassName.bind(this);
  }
  changeClassName(event){
      const v = event.target.value;
      this.setState({
        className:v
      })
  }
  render(){ 
    const students = this.state.students;
    const className = this.state.className;
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

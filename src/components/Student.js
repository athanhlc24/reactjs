import React from "react";
export default class Student extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age:18
        }
        this.incrementAge = this.incrementAge.bind(this);
        this.incrementAgeDown = this.incrementAgeDown.bind(this);
    }
    incrementAge(){
        const age = this.state.age;
        this.setState({
            age: age + 1
        })
    }
    incrementAgeDown(){
        const age = this.state.age;
        this.setState({
            age: age - 1
        })
    }
    render(){
        const student_name = this.props.name;
        const mark = this.props.mark;
        const telephone = this.props.telephone?this.props.telephone:[];// array
        const age = this.state.age;
        return(
            <div>
                <h1>{student_name}</h1>
                <h2>Mark: {mark}</h2>
                <h3><button onClick={this.incrementAgeDown}>-</button>Age:{age}<button onClick={this.incrementAge}>+</button></h3>
                <h3>telephone list</h3>
                <ul>
                    {
                        telephone.map((v,k)=>{
                            return (<li key={k}> {v} </li>)
                        })
                    }
                </ul>
            </div>
            
        );
    }
}
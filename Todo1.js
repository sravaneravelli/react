import React from 'react'
class Todo1 extends React.Component {
    constructor() {
        super()
        this.state = {
            Name: "name",
            Surname: "surname",
            sum: "",
            list: []
        }
    }
    handleName = (event) => {
        this.setState({
            Name: event.target.value
        })
        console.log(this.state.Name)
    }
    handleSurName = (event) => {
        this.setState({
            Surname: event.target.value
        })
        console.log(this.state.Surname)

    }

    handleSum = () => {
        let Sum = this.state.Name + this.state.Surname
        const updatedlist = [...this.state.list]
        updatedlist.push(this.state.sum)
        this.setState({
            sum: Sum,
            list: updatedlist
        })
        console.log(this.state.list)

    }
    handleDelete = (item) => {
        const updatedlist = this.state.list.filter(todo => todo != item)
        this.setState({
            list: updatedlist

        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleName}></input>
                <input type="text" onChange={this.handleSurName}></input>

                <button onClick={this.handleSum}>Concentanate</button>
                <div>{this.state.list.length}</div>
                <div>
                    {
                        this.state.list.length > 0 && <div>{this.state.list.map(item => {
                            return (
                                <li key={item}>{item}
                                    <button onClick={() => this.handleDelete(item)}>delete</button></li>
                            )
                        })
                        }</div>
                    }
                    





                </div>
            </div>
        )
    }
    renderToDoList = () => {
        return this.state.list.map(item => {
            return (
                <li key={item}>{item}
                    <button onClick={() => this.handleDelete(item)}>delete</button></li>
            )
        })
    }
}

export default Todo1;


import React from 'react';

class AddUser extends React.Component{
    
    state = {
        name : "",
        username : "",
    }

    add = (e) =>{
        e.preventDefault();
        if (this.state.name === "" || this.state.username === ""){
            alert ("Mandatory!");
            return
        };
        this.props.addContactHandler(this.state);
        this.setState({name:"",username:""});
        this.props.history.push("/");
    }

    render(){
        return (
            <div className="ui main">
                <h2>Add User</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} 
                        onChange={ (e) => this.setState({ name:e.target.value})} />
                    </div>
                    <div className="field">
                        <label>UserName</label>
                        <input type="text" name="username" placeholder="username" value={this.state.username} 
                        onChange={ (e) => this.setState({ username:e.target.value})} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddUser;
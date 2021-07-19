import React from 'react';

class EditUser extends React.Component{
    
    constructor(props){
        super(props)
        const {id,name,username}  = props.location.state.contact;
        this.state={
            id,
            name,
            username
        };
    }

    state = {
        name : "",
        username : "",
    }

    update = (e) =>{
        e.preventDefault();
        if (this.state.name === "" || this.state.username === ""){
            alert ("Mandatory!");
            return
        };
        this.props.updateContactHandler(this.state);
        this.setState({name:"",username:""});
        this.props.history.push("/");
    }

    render(){
        return (
            <div className="ui main">
                <h2>Edit User</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} 
                        onChange={ (e) => this.setState({ name:e.target.value})} />
                    </div>
                    <div className="field">
                        <label>UserName</label>
                        <input type="text" name="username" placeholder="UserNAme" value={this.state.username} 
                        onChange={ (e) => this.setState({ username:e.target.value})} />
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        );
    }
}

export default EditUser;
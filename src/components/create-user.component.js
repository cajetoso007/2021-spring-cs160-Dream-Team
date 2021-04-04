import React, {Component } from 'react';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullName: '',
        }
    }

    onChangeHandle = (e) => {
        const {name, value} = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        
    }

    render (){
        return (
            <div>
                <p>
                    You are on the Create Users List component!
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            name="email"
                            type="email"
                            className="form-control" 
                            value={this.state.email}
                            onChange={this.onChangeHandle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input 
                            type="password"
                            name="password"
                            className="form-control" 
                            value={this.state.password}
                            onChange={this.onChangeHandle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Full Name</label>
                        <input 
                            type="text"
                            name="fullName"
                            className="form-control" 
                            value={this.state.fullName}
                            onChange={this.onChangeHandle}
                        />
                    </div>
                    <div className = "form-group">
                        <input type = "submit" value = "Create Account" className = "btn btn-primary" 
                        />
                    </div>  
                </form>

            </div>
        )
    }
}
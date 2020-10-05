import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
           <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Manage User Information</h1>
                    <p className="lead">With Data Local</p>
                    <hr className="my-2" />
                </div>
            </div>
        )
    }
}

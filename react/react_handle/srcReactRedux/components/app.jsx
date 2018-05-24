import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"

export default class  extends Component {
    render() {
        return (
            <div>
                <Link to="/a">a项目</Link>
                <Link to="/b">b项目</Link>
                {this.props.children}
            </div>
        )
    }
}


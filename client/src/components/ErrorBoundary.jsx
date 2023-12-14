import { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Path from "../paths";

export default class ErrorBoundary extends Component {
    constructor(){
        super()

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(err, errInfo) {
        //todo
    }
    

    render() {

        if (this.state.hasError) {

            return (
                <div style={{textAlign: "center", marginTop: "150px"}}>
                    <h1 style={{padding: "50px"}}>Something went wrong !</h1>
                    <img className="img-fluid" style={{width: "500px"}} src="/img/404.png" alt="" />
                    <h2 style={{padding: "40px"}}>Page not found!</h2>
                </div>
                )
        }

        return this.props.children
    }
}
import { Component } from "react";


class ErrorBoundary extends Component{
    
    constructor(){
        super(); 
        this.state = {hasError : false}; 
    }

    componentDidCatch(error){
        console.log(error)
        this.setState({hasError : true}); 
    }

    render(){

        if(this.state.hasError){
            return <p>Something went wrong !!</p>
        }

        return this.props.children; 
        // i am wrapping error boundary component with the code which throws an error.
    }
}

export default ErrorBoundary;
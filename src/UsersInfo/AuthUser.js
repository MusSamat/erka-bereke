import React from "react";

class AuthUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: true,
        }

    }

    setIsLogged(bool){
        this.setState({
            isLogged: bool
        })
    }


    render() {
        return(
            <>
            </>
        )
    }

}

export default AuthUser
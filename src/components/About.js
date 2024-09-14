import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"
import UserContext from "../utils/UserContext"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    { (data) => console.log(data)  }
                </UserContext.Consumer>
            </div>
            <UserClass name={"Abhinav"} location={"Jaisalmer"} />
        </div>
    )
}

export default About
import React from "react"

class UserClass extends React.PureComponent {
    
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            userInfo: {
                name: "Abhishek",
                location: "Default",
                company: "Default"
            }            
        }
    }

    async componentDidMount() {
        //API Calls this method
        const data = await fetch("https://api.github.com/users/abhishekrjkhandelwal");
        const json = await data.json();

        this.setState({
            userInfo: json
        });        
    }

    componentDidUpdate() {
        console.log("Component Did Update.");
    }

    componentWillUnmount() {
        console.log("Component will unmount.");
    }

    render() {
        const { name, location, company } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Company: {company}</h4>
            </div>
        )
    }
}

export default UserClass;

/**
 * 
 * -------Mounting--------
 * Constructor
 * Render (Dummy)
 *    <HTML Dummy>
 * Component Did Mount
 *    <API Call>
 *    <this.setState>
 *    
 * ------UPDATE-----------
 *  render(API Data)
 *  <HTML (new API data)
 *  component did update
 * 
 */
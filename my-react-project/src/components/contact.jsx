import { Component } from "react";
import './styles.css'

class Contact extends Component {
    render() {
        const email = "batmanGotham@yahoo.com"

        return (
            <div className="contact-text">
                <h2>Contact:</h2>
                <p>Email: {email}</p>
            </div>
        )
    }
}

export default Contact
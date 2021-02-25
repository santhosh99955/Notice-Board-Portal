import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class CreateNotice extends React.Component {
    constructor() {
        super();
        this.state = {
            "notice_poster": "",
            "notice_text": "",
            "expiry_date": "",
            "hostel_name": ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const url = "http://localhost:3002/notices";
        const res = await axios.post(url, this.state);

        if (res.status === 200) {
            alert("Successfully created the Notice");
        } else {
            alert("Error Occurred! Notice not created");
        }
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                Create a New Notice
              </header>
              <main>
                <form>
                    <label>Notice Poster: </label>
                    <input type="text" name="notice_poster" onChange={this.handleInputChange}/><br /><br />
                    <label>Notice Text: </label>
                    <textarea name="notice_text" rows="4" cols="50" onChange={this.handleInputChange}/><br /><br />
                    <label>Expiry Date: </label>
                    <input type="date" name="expiry_date" onChange={this.handleInputChange}/><br /><br />
                    <label>Hostel Name: </label>
                    <select name="hostel_name" onChange={this.handleInputChange}>
                        <option>H1</option>
                        <option>H2</option>
                        <option>H3</option>
                        <option>H4</option>
                    </select>
                    <br /><br />
                    <button onClick={this.handleSubmit}>Create Poster</button>
                </form>
                <div>
                    <Link to="/view-notices">View Notices</Link>
                </div>
              </main>
            </div>
          );
    }
}

export default CreateNotice;
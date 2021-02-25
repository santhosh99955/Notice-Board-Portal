import React from 'react';
import './App.css';
import './ViewNotices.css';
import axios from 'axios';

class ViewNotices extends React.Component {

    constructor() {
        super();
        this.state = {
            "expiry_date": "2020-09-09",
            "notices": [{
                "id": 0,
                "notice_poster": "EMPTY",
                "notice_text": "EMPTY",
                "expiry_date": "EMPTY",
                "hostel_name": "EMPTY"
            }]
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFind = async () => {
        const url = "http://localhost:3002/notices"
        const config = {
            params: {
                expiry_date: this.state.expiry_date
            }
        }
        console.log(url);
        console.log(config);
        try {
            const res = await axios.get(url, config);
            this.setState({
                notices: res.data
            });
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    View Notices
                </header>
                <main>
                    <div>
                        <label>Select Expiry Date of Notice: </label>
                        <input type="date" name="expiry_date" onChange={this.handleInputChange}/>
                        <br /><br />
                        <button onClick={this.handleFind}>Find</button>
                    </div>
                    <div className="notice-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>notice_poster</th>
                                    <th>notice_text</th>
                                    <th>expiry_date</th>
                                    <th>hostel_name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {}
                                {this.state.notices.map(notice => (
                                    <tr key={notice.id}>
                                        <td>{notice.id}</td>
                                        <td>{notice.notice_poster}</td>
                                        <td>{notice.notice_text}</td>
                                        <td>{notice.expiry_date}</td>
                                        <td>{notice.hostel_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        );
    }
}

export default ViewNotices;
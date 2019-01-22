import React from 'react';
import './App.css';

class Landing extends React.Component {



    render() {
        return (
            <header className="App-header">
                <nav className="nav-bar">
                    <h3>Body Workz</h3>
                    <div>
                        <ul>
                            <li>About Us</li>
                            <li>Schedule</li>
                            <li>Trainers</li>
                            <li>Rates</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </nav>
                <div className="header-hook">
                    <p>Helping You become your</p>
                    <div>
                        <p className="emphasis">Best</p>
                        <p className="emphasis">Self</p>
                    </div>
                </div>
                <div></div>
                <div className="header-bottom">
                    <p>Orange and Bridge City</p>
                </div>
            </header>
        );
    }

}

export default Landing;
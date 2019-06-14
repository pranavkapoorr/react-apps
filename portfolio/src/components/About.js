import React, { Component } from 'react'

const cardShadow = {boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"};
export default class About extends Component {
  render() {
    return (
		<section id="about" className="about bg-light" >
            <div className="container text-center pt-5">
                <h2>About me</h2>
                <p>I'm a technology lover who loves to try out new technologies. By profession I'm a developer/engineer with a bachelor's degree in Computer Science.</p>
                <p>Apart from love for technologies I am a musician who loves to sing and play piano.</p>

                <div className="card-deck">
                    <div className="card " style={cardShadow}>
                        <div className="card-body text-center">
                        <h3 className="card-title">Web Development</h3>
                        <p className="card-text">Some text inside the first card</p>
                        </div>
                    </div>
                    <div className="card " style={cardShadow}>
                        <div className="card-body text-center">
                        <h3 className="card-title">Data Structures & Algorithms</h3>
                        <p className="card-text">Some text inside the first card</p>
                        </div>
                    </div>
                    <div className="card" style={cardShadow}>
                        <div className="card-body text-center">
                        <h3 className="card-title">DevOps</h3>
                        <p className="card-text">Some text inside the first card</p>
                        </div>
                    </div>
                    
                </div>
            
            </div>
        </section>
    )
  }
}
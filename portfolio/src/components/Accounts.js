import React, { Component } from 'react';

const iframeStyle = {
    width:"100%",border:"none",height:"100%"
};
export default class Accounts extends Component {

    render() {
        return (
            <section id="accounts">
                <div className="container">
                    <div className="row">
                        <div className="smartphone">
                            <div className="content">
                                <iframe title="foodiebells" src="https://foodiebells.com" style={iframeStyle} />
                            </div>
                        </div>
                        <div className="iphone">
                            <div className="iphone-top">
                            <span className="camera"></span>
                            <span className="sensor"></span>
                            <span className="speaker"></span>
                            </div>
                            <div className="top-bar"></div>
                            <div className="iphone-screen">
                            <iframe title="foodiebells" src="https://foodiebells.com" style={iframeStyle} />
                            </div>
                            <div className="buttons">
                            <span className="on-off"></span>
                            <span className="sleep"></span>
                            <span className="up"></span>
                            <span className="down"></span>
                            </div>
                            <div className="bottom-bar"></div>
                            <div className="iphone-bottom">
                            <span></span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                

        )
    }
}

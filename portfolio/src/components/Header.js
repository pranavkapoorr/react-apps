import React, { Component } from 'react'

const activeLink = "nav-link active";
const inactiveLink = "nav-link";
const navItems = [
    {
        title:"About",
        class:"nav-link active"
    },{
        title:"Timeline",
        class:"nav-link"
    },{
        title:"Accounts",
        class:"nav-link"
    }
];

export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          navItems:navItems,
          message:'intro'
        };
        this.handleScroll = this.handleScroll.bind(this);
      }
    
      handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = html.clientHeight;//Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight*3) {
            this.setState({
              message:'introxxx'
            });
          }
         else if (windowBottom >= docHeight*2) {
            this.setState({
              message:'timeline'
            });
          } else if (windowBottom > docHeight) {
            this.setState({
              message:'about'
            });
          }else{
            this.setState({
                message:'intro'
              });
          }
      }
    
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
    
      handleClick(title,e) {
        navItems.map(item => item.title === title ? item.class = activeLink: item.class = inactiveLink);
        this.setState(state => ({navItems:navItems}));
      }


    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <a className="navbar-brand" href="#intro">
                    <img className="rounded-circle" style={{width:"40px"}} src="https://raw.githubusercontent.com/pranavkapoorr/angular-apps/master/portfolio/src/assets/img/pranav_kapoor.jpg" alt="pk"/>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    
                    {
                        this.state.navItems.map(item =>
                            <li className="nav-item" key={item.title}>
                                <a  href={"#"+item.title.toLowerCase()} className={item.class} onClick={(e) => this.handleClick(item.title,e)} >{item.title}</a>
                            </li>
                        )
                    }
                    <li className="nav-item" >
                                <a href="/" className="nav-link active">{this.state.message}</a>
                            </li>
                    
                    </ul>
                </div> 
                </nav>
            </header>
        )
    }
}

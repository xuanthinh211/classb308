import React from "react";

class Home extends React.Component {
    render(){
        return (
            <main>
                <div className="container">
                    <div className="left-side">
                        <div className="profile-text">
                            <div className="imgbox">
                                <img src="./img/avata.jpg" alt="Logo"/>
                             </div>
                            <h2>Nguyen Xuan Thinh</h2>
                        </div>
                        <div className="contact">
                            <h3 className="title">Contact</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                    <p className="text"> 08-11-2002</p>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                    <a className="text" href="tel:+84945034118">0866825340</a>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                    <a className="text" href="mailto:khuongtai789@gmail.com">nguyenxuanthinh345@gmail.com</a>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
                                    <a className="text" href="fb.com/thinhNXT">Facebook</a>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                    <p className="text">KTX Khu A, Dai Hoc quoc gia TP Ho Chi Minh</p>
                                </li>
                            </ul>
                        </div>
                        <div className="education">
                            <h3 className="title">Education</h3>
                            <h5>2020 - 2025</h5>
                            <h4>Information System</h4>
                            <h4 className="end-infor">University of Information Technology</h4>
                        </div>

                        <div className="contact language">
                            <h3 className="title">Language</h3>
                            <ul>
                                <li>
                                    <span className="text">English</span>
                                    <span className="percent">
                                        <div style= {{width: '50%'}}></div>
                                    </span>
                                </li>
                                <li>
                                    <span className="text">China</span>
                                    <span className="percent">
                                        <div style= {{width: '20%'}}></div>
                                    </span>
                                </li>
                                <li>
                                    <span className="text">Japan</span>
                                    <span className="percent">
                                        <div style= {{width: '40%'}}></div>
                                    </span>
                                </li>
                               
                            </ul>
                        </div>
                    </div>    
                    <div className="right--side">
                        <div className="about">
                            <h2 className="title2">Profile</h2>
                            <p> I have great experience in both front-end and back-end development. Up front, I'm proficient in languages like HTML, CSS, JavaScript, and frameworks like React and Angular. This helps me create beautiful, interactive, and user-friendly user interfaces.<br/> 
                             <br/>With back-end skills, I have worked with many languages such as Node.js, Python, and used frameworks such as Express, Django. This allows me to build a system that is robust, stable, and scalable.</p>
                        </div>
                        <div className="about">
                            <h2 className="title2">Experience</h2>
                            <p>I have been involved in many successful projects, from building e-commerce websites to complex content management systems. My work is not limited to coding, but also includes consulting, planning and performance optimization. <br/> <br/>
                            </p>
                        </div>
                        <div className="about skill">
                            <h2 className="title2">Skill</h2>
                            <div className="box">
                                <h4>Html</h4>
                                <div className="percent">
                                    <div style={{width: '85%'}}></div>
                                </div>
                            </div>
                            <div className="box">
                                <h4>Css</h4>
                                <div className="percent">
                                    <div style={{width: '95%'}}></div>
                                </div>
                            </div>
                            <div className="box">
                                <h4>Javascript</h4>
                                <div className="percent">
                                    <div style={{width: '75%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>                
            </main>
        );
    }
}

export default Home;
import React from "react";

export default class About extends React.Component {

    constructor() {
        super();
    }

    render() {
        const profileStyle = {
            "backgroundImage": 'url(./img/myphoto.jpg)',
            "opacity": 1
        };
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center">
                        <h2 class="title">About</h2>
                        <h5 class="description">Know more about me and what I do</h5>
                    </div>
                </div>

                <br/><br/>

                <div class="row">

                    <div class="col-md-6 col-md-offset-3">
                        <div class="card card-profile card-plain">
                            <div class="col-md-5">
                                <div class="card-image">
                                    <a href="https://play.google.com/store/apps/dev?id=6631186001868474976">
                                        <img class="img" src="./img/myphoto.jpg" />
                                    </a>
                                <div class="colored-shadow" style={profileStyle}></div><div class="ripple-container"></div></div>
                            </div>
                            <div class="col-md-7">
                                <div class="card-content">
                                    <h4 class="card-title">Maxwell Mapako</h4>
                                    <h6 class="category text-muted">Software Engineer / Freelancer</h6>

                                    <p class="card-description">
                                        Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it. 🎸
                                    </p>

                                    <div class="footer">
                                        <a href="https://plus.google.com/u/1/+MaxwellMapakot" class="btn btn-just-icon btn-simple btn-google"><i class="fa fa-google"></i><div class="ripple-container"></div></a>
                                        <a href="https://za.linkedin.com/in/maxwell-mapako-32866b5b" class="btn btn-just-icon btn-simple btn-linkedin"><i class="fa fa-linkedin"></i><div class="ripple-container"></div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

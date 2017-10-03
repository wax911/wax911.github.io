import React from "react";

export default class Header extends React.Component {
    render() {

        return (
            <nav class="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-main">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand">wax911</a>
                    </div>

                    <div class="collapse navbar-collapse" id="navigation-main">
                        <ul class="nav navbar-nav">
                            <li className="active">
                                <a data-scroll href="#home">
                                    <i class="fa fa-home" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a data-scroll href="#applications">
                                    <i class="fa fa-android" />
                                    Applications
                                </a>
                            </li>
                            <li>
                                <a data-scroll href="#screenshots">
                                    <i class="fa fa-tv" />
                                    Screenshots
                                </a>
                            </li>
                            <li>
                                <a data-scroll href="#about">
                                    <i class="fa fa-question-circle-o" />
                                    About
                                </a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="https://github.com/wax911" class="btn btn-simple btn-white btn-just-icon">
                                    <i class="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://za.linkedin.com/in/maxwell-mapako-32866b5b" class="btn btn-simple btn-white btn-just-icon">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.quora.com/profile/Maxwell-Mapako" class="btn btn-simple btn-white btn-just-icon">
                                    <i class="fa fa-quora"></i>
                                </a>
                            </li>
                            <li>
                                <a href="http://stackoverflow.com/users/1725347/wax911" class="btn btn-simple btn-white btn-just-icon">
                                    <i class="fa fa-stack-overflow"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

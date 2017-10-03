import React from "react";
import Applications from "../sections/applications.jsx";
import Featured from "../sections/featured.jsx";
import Screenshots from "../sections/screenshots.jsx";
import About from "../sections/about.jsx";

export default class Index extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
        <div class="main main-raised">
            <div class="section section-basic">

                <div class="container-fluid" id="applications">
                    <Applications />

                    <br /><br />
                    <Featured />
                </div>

                <div class="container-fluid" id="screenshots">
                    <Screenshots />
                </div>

                <div class="container-fluid" id="about">
                    <About />
                </div>

            </div>
        </div>
        );
    }
}

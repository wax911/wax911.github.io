import React from "react";
import Store from "../stores/store.jsx";

export default class Screenshots extends React.Component {

    constructor() {
        super();
        this.state = {
            screenshots: Store.getAllScreenShots()
        }
    }

    render() {
        return(
            <div class="container">

                <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center">
                        <h2 class="title">Screenshots</h2>
                        <h5 class="description">Some screenshots of my popular creations</h5>
                    </div>
                </div>

                <br/><br/>

                <div class="row">
                    {this.state.screenshots}
                </div>

            </div>
        );
    }
}

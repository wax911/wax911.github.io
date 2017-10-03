import React from "react";
import Store from "../stores/store.jsx";

export default class Featured extends React.Component {

    constructor() {
        super();
        this.state = {
            featuredApps: Store.getAllFeaturedApplications()
        }
    }

    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center">
                        <h2 class="title">Featured</h2>
                        <h5 class="description">Some of my featured applications</h5>
                    </div>
                </div>

                {this.state.featuredApps}
            </div>
        );
    }
}

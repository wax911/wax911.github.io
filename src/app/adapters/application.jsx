import React from "react";

export default class Feature extends React.Component {

    constructor() {
        super();
        //reserved for extra initialization
    }

    render() {
        const {data} = this.props;
        return (
            <div class="col-md-6 col-sm-6">
                <span class="fa-stack fa-lg fa-5x">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-android fa-stack-1x"></i>
            </span>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
        );
    }

}

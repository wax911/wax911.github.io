import React from "react";

export default class Feature extends React.Component {

    constructor() {
        super();
        //reserved for extra initialization
    }

    render() {
        const {data} = this.props;
        return (
            <div class="features-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="phone-container">
                            <img src={data.image} />
                        </div>
                    </div>
                    <div class="col-md-6">

                        <br/><br/>

                        <h2 class="title">{data.title}</h2>

                        <div class="info info-horizontal">
                            <div class="icon icon-info">
                                <i class="material-icons">{data.icon}</i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">{data.infoTitle}</h4>
                                <p>{data.details}</p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-default">
                                <i class="material-icons">link</i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Get {data.infoTitle} Now</h4>
                                <p>Click <a href={data.url}>here</a> to view or download this application</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

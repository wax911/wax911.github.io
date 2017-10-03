import React from "react";

export default class Screenshot extends React.Component {

    constructor() {
        super();
        //reserved for extra initialization
    }

    render() {
        const custom = { "width": "100%" };
        const {data} = this.props;
        return (
            <div class="portfolio-item col-xs-12 col-sm-6 col-md-4">
				<div class="portfolio-bg">
					<div class="portfolio">
						<div class="tt-overlay"></div>
						<div class="links">
							<a class="image-link" href={data.image}><i class="fa fa-search-plus"></i></a>
							<a href={data.url}><i class="fa fa-link"></i></a>
						</div>

						<img src={data.image} alt={data.title} style={custom}/>
						<div class="portfolio-info">
							<h3>{data.title}</h3>
						</div>
					</div>
				</div>
			</div>
        );
    }

}

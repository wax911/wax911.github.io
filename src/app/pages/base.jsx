import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Index from "../pages/index.jsx";

export default class Base extends React.Component {
    render() {
        const background = { "backgroundImage": 'url(./src/public/img/markus-spiske-148030.jpg)' };
        return(
            <div>
                <div>
                    <div class="wrapper">
                        <Header />

                        <div id="home" class="page-header header-filter clear-filter" data-parallax="disabled" style={background}>
                    		<div class="container">
                    			<div class="row">
                    				<div class="col-md-8 col-md-offset-2">
                    					<div class="brand">
                    						<h1>io<div class="pro-badge">Hub</div></h1>
                    						<h3 class="title">Welcome to my projects hub, check out some of my projects &amp; contributions</h3>
                    					</div>
                    				</div>
                    			</div>
                    		</div>
                    	</div>

                        <Index />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

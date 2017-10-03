import React from "react";

export default class Applications extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center">
    				<h2 class="title">Applications</h2>
    				<h5 class="description">Check out some of my projects below</h5>
    			</div>
            </div>

            <br /><br />

            <div class="row text-center">
                <div class="col-md-6 col-sm-6">
                    <span class="fa-stack fa-lg fa-5x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-android fa-stack-1x"></i>
                </span>
                    <h2>LP Solver</h2>
                    <p>Android application to solve general linear programming (LP) models. Linear Programming is a mathematical modelling technique useful for allocation of limited resources such as material, machines etc to several competing activities such as projects, services etc.</p>
                </div>

                <div class="col-md-6 col-sm-6">
                    <span class="fa-stack fa-lg fa-5x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-android fa-stack-1x"></i>
                </span>
                    <h2>Aegis Nav</h2>
                    <p>Indoor Navigation Project that was completed by a team of university students, myself included.
                    This is will not be available in the play store unfortunately but it's definitely worth checking out in my gihub link that will be provided later in the page.</p>
                </div>

                <div class="col-md-6 col-sm-6">
                    <span class="fa-stack fa-lg fa-5x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-android fa-stack-1x"></i>
                </span>
                    <h2>AniTrend</h2>
                    <p>Track all your favorite anime &amp; manga with AniTrend! AniTrend is a free anime or manga lookup, tracking and reference application!</p>
                </div>

                <div class="col-md-6 col-sm-6">
                    <span class="fa-stack fa-lg fa-5x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-windows fa-stack-1x"></i>
                </span>
                    <h2>Asset Generator</h2>
                    <p>Initially created to generate assets for eclipse android development for various screen dpi sizes, and now deprecated.</p>
                </div>

                <div class="col-md-6 col-sm-6">
                    <span class="fa-stack fa-lg fa-5x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-android fa-stack-1x"></i>
                </span>
                    <h2>Manga Slayer</h2>
                    <p>A manga reading application that I made for a client targeting the arabic market that features some awesome material design features.</p>
                </div>

                <div class="col-md-6 col-sm-6">
                    <span class="fa-stack fa-lg fa-5x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-android fa-stack-1x"></i>
                </span>
                    <h2>Multicode QR Scanner</h2>
                    <p>This project is based on the <a href="https://github.com/googlesamples/android-vision">Google Vision Barcode API</a>. The Barcode Scanner API detects barcodes in real time in any orientation. You can also detect and parse several barcodes in different formats at the same time.</p>
                </div>

                <div class="col-md-6 col-sm-6">
                    <span class="fa-stack fa-lg fa-5x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-chrome fa-stack-1x"></i>
                </span>
                    <h2>45th Media</h2>
                    <p>Linking People &amp; Brands, a company landing page</p>
                </div>

                <div class="col-md-6 col-sm-6">
                    <span class="fa-stack fa-lg fa-5x">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-chrome fa-stack-1x"></i>
                </span>
                    <h2>Berry Elegance</h2>
                    <p>Ecommerce solution powered by shopify</p>
                </div>
            </div>
        </div>
        );
    }
}

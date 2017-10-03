import React from "react";

export default class Footer extends React.Component {
    render() {

        return (
            <footer class="footer">
                <div class="container">
                    <a class="copyright pull-left" href="https://reactjs.org/">Made With React</a>
                    <div class="copyright pull-right">
                        Photo by <a href="https://unsplash.com/@markusspiske">Markus</a> on Unsplash
                    </div>
                </div>
            </footer>
        );
    }
}

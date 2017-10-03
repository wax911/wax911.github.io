import React from "react";

import Applications from "./applications.json";
import FeaturedApps from "./featured.json";
import Screenshots from "./screenshots.json";

import AppTemplate from "../adapters/application.jsx";
import FeatureTemplate from "../adapters/feature.jsx";
import ScreenshotTemplate from "../adapters/screenshot.jsx";

var _ = require("lodash");

class Store {

    constructor() {
        this.collection = {
            apps: Applications,
            featured: FeaturedApps,
            screeshots: Screenshots
        };
    }

    getAllFeaturedApplications() {
        const result = _.sortBy(this.collection.featured, ["title"], ["asc"]).map((data, i) => <FeatureTemplate key={data.title} data={data} />);
        return result;
    }

    getAllApplications() {
        //todo: get applications data from Applications
    }

    getAllScreenShots() {
        const result = _.sortBy(this.collection.screeshots, ["title"], ["asc"]).map((data, i) => <ScreenshotTemplate key={data.image} data={data} />);
        return result;
    }
}

const store = new Store();
export default store;

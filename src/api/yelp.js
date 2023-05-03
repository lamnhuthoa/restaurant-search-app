import axios from "axios";

const API_KEY = "FDz3cd7B-QiWsYvb_wvhYMLtSrbwlRt8ZlhL_8uzmKyvVDjob8-7QYPoKF0svrsOWYlyHcZFNtN5x4u_Y7sX0InaVLSAdFs3BDFyl0owbW1uA7L9rWJI7qvXLkxSZHYx";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": 'application/json'
    }
});


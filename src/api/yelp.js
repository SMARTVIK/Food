import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer mwrpSTIY4tRGfpw4nLYoRcZahCpdRYf0ddLSL9eCC-Rroj5vldeE87wD3aNymnFKPbDJeg4GHvA-2PCpTh7EAZRCTk4pdUbb-XraEBmo8jWr8v5cov2lCp-cMRH8YXYx'
    }
});
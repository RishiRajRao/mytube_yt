import axios from 'axios';

const KEY = 'AIzaSyA7Zp_YrLeyhLm05VMO6-jvHno8axo7RBk'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
}

)
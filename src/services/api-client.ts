import axios from "axios";

export default axios.create({
    params:{
        baseURL: 'https://api.rawg.io/api',
        key: 'c21179a292c74ab2b0df19e255450787'
    }
})
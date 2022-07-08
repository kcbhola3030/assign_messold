require('dotenv').config();
const axios = require('axios')
const data=axios({
        method: 'get',
        url: process.env.LINK,
        auth:{
            username:process.env.API_KEY,
            password:process.env.API_SECRET
        },
        headers:{'X-Shopify-Access-Token':process.env.API_ACCESS_TOKEN }
    
    })
    .then(data=>{
    const titles = data.data.products.map(title)
    console.log(titles);
    })

    .catch(error=>console.log(error))
    function title(item){
        return item;
    }
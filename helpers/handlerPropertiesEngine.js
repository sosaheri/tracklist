const ENGINE_DB = process.env.ENGINE_DB;
const get_properties = () => {
    const data ={
        nosql:{
            id:'_id'
        },
        mysql:{
            id:'id'
        }
    }
    return data[ENGINE_DB];
}

module.exports = get_properties
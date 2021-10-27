import axios from 'axios'
const request = (url , type) => {
    let config = {};
    //目前这个是get请求
    if(type.toLowerCase() === 'get'){
        config = {
            method : type.toLowerCase(),
        }
    }
            //这里mock截取回来的数据仍然是对象,就只有data这个对象当中我们所需要的的数据部分是JSON格式,所以要是全部转换当然会报错
    return axios(url , config).then(res => JSON.parse(res.data))
}
export default request
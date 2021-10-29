const search = (target) => {
    // console.log(target)
    const analysis = (str , reg) => {
        let data = {}
        if(str){
            // $0 , $1 , $2 , $3这里的这个对应着原子组出现的顺序
            //$0对应着匹配的整体
            //$1对应着([^?=&]+)也就是等号前面的
            //$2对应着(=([^&]*))也就是包括等号到下一个&的部分
            //$3对应着([^&]*)也就是等号后面的到下一个&d的部分
            //replace的第二个参数可以是一个函数,这是高级使用部分
            decodeURI(str).replace(reg , ($0 , $1 , $2 , $3) => {
                // console.log('$0' , $0 , '$1' , $1 ,'$2' ,  $2 , '$3' , $3)
                data[$1] = $3;
            })
        }
        return data;
    }
    return {
        search : analysis(target , new RegExp('([^?=&]+)(=([^&]*))?' , 'g'))
    }
}
export default search
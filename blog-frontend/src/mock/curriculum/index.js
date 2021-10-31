const Mock = require('mockjs');
let target = null,
    data = [
        {
            title : 'JavaScript高级程序设计',
            id : 'JS高级程序设计',
            url : 'curriculum/javascript高级程序设计.jpg',
            content : '本书是JavaScript经典图书的新版。第4版涵盖ECMAScript 2019，全面、深入地介绍了JavaScript开发者必须掌握的前端开发技术，涉及JavaScript的基础特性和高级特性。书中详尽讨论了JavaScript的各个方面，从JavaScript的起源开始，逐步讲解到新出现的技术，其中重点介绍ECMAScript和DOM标准。在此基础上，接下来的各章揭示了JavaScript的基本概念，包括类、期约、迭代器、代理，等等。'
        },
        {
            title : 'ES6标准入门',
            id : 'ES6标准入门',
            url : 'curriculum/ES6标准入门.jpg',
            content : '本书为中级难度，适合已经掌握 ES5 的读者，用来了解这门语言的最新发展；也可当作参考手册，查寻新增的语法点。如果你是 JavaScript 语言的初学者，建议先学完《JavaScript 语言入门教程》，再来看本书。'
        },
    ];
target = Mock.mock('/home/curriculum' , 'get' , () => {
    return Mock.mock(JSON.stringify({
        status : 200,
        data,
    }))
})
export default target;
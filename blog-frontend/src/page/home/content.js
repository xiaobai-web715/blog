import React from 'react'

const ContentIndex = () => {
    return (
        <div>
            {/* 可以从样式上看到,这里的样式被index.css文件里面的样式污染了 */}
            <div className='main'>来打我啊笨比</div>
        </div>
    )
}

export default ContentIndex

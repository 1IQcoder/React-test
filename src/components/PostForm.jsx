import React, { useState } from 'react'
import Button1 from './UI/buttons/button1/Button1';
import Input1 from './UI/inputs/input1/Input1'

const PostForm = ({ create, lastId }) => {

    const [post, setPost] = useState({body: '', title: ''})

    function addNewThread(e) {
        e.preventDefault()

        const newPost = {
            id: lastId+1,
            title: post.title,
            body: post.body
        }

        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/* контролируемый компонент */}
            <Input1
                type='text'
                placeholder='print title'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            {/* неконтролирований компонент */}
            <Input1
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='print body'
            />
            <Button1 onClick={(e) => { addNewThread(e)}} >Publish thread</Button1>
      </form>
    )
}

export default PostForm;




























import React, { useState } from 'react'

const Post = function (props) {

    function deletePost(e) {
        props.deleteFunc(props.post.id)
    }

    return (
        <div className='post'>
            <div className='post_content'>
                <strong> {props.post.id}. { props.post.title }</strong>
            <p> {props.post.body} </p>
            </div>
            <div className='post_buttons'>
            <button onClick={e => deletePost(e)}>delete</button>
            </div>
      </div>
    )
}

export default Post;














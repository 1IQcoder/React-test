import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from './Post'
import '../styles/App.css'

const PostsList = function ({ posts, title, deleteFunc }) {

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }} > {title} </h1>

            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post post={post} key={post.id} deleteFunc={deleteFunc} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    )
}

export default PostsList;




















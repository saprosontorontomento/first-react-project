import React from 'react';

import PostlistItem from '../post-list-item';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostlistItem/>
            <PostlistItem/>
            <PostlistItem/>
        </ul>
    )
}

export default PostList;
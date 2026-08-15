import React, { useState } from 'react';
import Post from './Post';
import AddPost from './Add.Post';

function App() {
    const [postList, setPostList] = useState([
        {
            postNumber: 0,
            text: 'When a short psychic breaks out of jail, It is known as a short mnedium at large.',
        },
        {
            postNumber: 1,
            text: 'Why don\'t skeletons fight each other? They don\'t have the guts.',
        },
        {
            postNumber: 2,
            text: 'I would tell you a construction pun, but I\'m still working on it.',
        },
        {
            postNumber: 3,
            text: 'What do you call a fake noodle? An impasta.',
        }

    ]);

    const [postId, setPostId] = useState(3);

    const handleAddPost = (newText) => {
        let newPost = {
            postNumber: postId,
            text: newText
        };

        setPostList(postList => [...postList, newPost]);
        setPostId(postId + 1);
    }
const handleDeletePost = (id) => {
    let updatePostList = postList.filter((post) => post.postNumber !== id);
    setPostList(updatePostList);
    };  
    const posts = postList.map((post) => (
        <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost} />
    ));

    return (
        <div>
            {posts}
            <AddPost onAdd={handleAddPost}/>
        </div>
    );


}

export default App;
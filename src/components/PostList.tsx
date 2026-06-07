import { useState, useEffect } from 'react'; 

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

import classes from './PostList.module.css';
import type { PostListProps, PostProps } from '../types/Post';

function PostList({isPosting, onStopPosting}:PostListProps) {
  console.log(isPosting);
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  function addPostHandler(postData:PostProps){
    // need to add this code in this format, since new data is depends on old data
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
   
      setPosts((existingPosts) => [postData, ... existingPosts]);

  }

  return (
    <>
      {isPosting ?
        <Modal onClose={onStopPosting}>
        <NewPost 
          onCancel={onStopPosting}
          onAddPost={addPostHandler}/>
      </Modal>
      : null}

      <ul className={classes.post}>
        {posts.map((post, index)=><>{index} <Post key={post.id} author={post.author} body={post.body}/> </>)}
      </ul>
    </>
  );
}

export default PostList;
import { useState, useEffect } from 'react'; 

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import API_ENDPOINTS from '../constants/Urls';

import classes from './PostList.module.css';
import type { PostListProps, PostProps } from '../types/Post';

function PostList({isPosting, onStopPosting}:PostListProps) {
  console.log(isPosting);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(true);
  let isBackendAvailable = true;
  if(isBackendAvailable){
    useEffect(() => {
      fetch(API_ENDPOINTS.POSTS_URL)
        .then((response) => response.json())
        .then((data) => {
          setIsPostsLoading(true);
          setPosts(data.posts);
          setIsPostsLoading(false);
        });
    }, []);
  }
  
  function addPostHandler(postData:PostProps){
    if(isBackendAvailable){
      // need to add this code in this format, since new data is depends on old data
    fetch(API_ENDPOINTS.POSTS_URL, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    }
    
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
      {isPostsLoading && <p>Loading posts...</p>}
      {!isPostsLoading && posts.length === 0 && <p className={classes.noPosts}>No posts yet!</p>}
      <ul className={classes.post}>
        {posts.map((post, index)=><>{index} <Post key={post.id} author={post.author} body={post.body}/> </>)}
      </ul>
    </>
  );
}

export default PostList;
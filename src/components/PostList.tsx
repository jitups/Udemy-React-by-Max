import { useState } from 'react'; 

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

import classes from './PostList.module.css';

function PostList({isPosting, onStopPosting}) {
  console.log(isPosting);
  const [isModalVisible,setIsModalVisible] = useState(isPosting);
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    // need to add this code in this format, since new data is depends on old data
    console.log('in PostList -> addPostHandler');
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
import {useState} from 'react';
import classes from './NewPost.module.css';
import { nanoid } from 'nanoid';
import type { NewPostProps } from '../types/Post';

function NewPost({onCancel, onAddPost}:NewPostProps) {
  const [enteredBody,setEnteredBody] = useState('');
  const [enteredAuthor,setEnteredAuthor] = useState('');

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>){
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event: React.SyntheticEvent<HTMLFormElement>){
    event.preventDefault();
    let postData = {id: nanoid(), body: enteredBody, author: enteredAuthor};
    onAddPost(postData);
    console.log(postData);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>

      <p>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button >Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
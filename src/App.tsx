import './App.css';

import {useState} from 'react';

import PostList from './components/PostList';
import MainHeader from './components/MainHeader';


function App() {
  const [isModalVisible,setIsModalVisible] = useState(false);

  function showModalHandler(){
    console.log('showing modal');
    setIsModalVisible(true);
  }

  function hideModalHandler(){
    console.log('hiding modal');
    setIsModalVisible(false);
  }

  return (
  <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <PostList isPosting={isModalVisible} onStopPosting={hideModalHandler}/>
    </main>
  </>
  );
}

export default App;

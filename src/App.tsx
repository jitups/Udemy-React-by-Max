import './App.css';
import Post from './components/Post';

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Post author="Jitendra" body="Message from React" />
      <Post author="Shaurya" body="Message from React too!" />
    </>
  );
}

export default App;

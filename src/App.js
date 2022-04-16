
import Home from './Home';
import Navbar from './Navbar.js';
function App() {

  const title='Welcome to new blog  ';
  const liked = 50;

  return (
    <div className="App">
    <Navbar />
     <div className="content">
      <h1> App Component</h1>
      <Home />

     </div>
    </div>
  );
}

export default App;

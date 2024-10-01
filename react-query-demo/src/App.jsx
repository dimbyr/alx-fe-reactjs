import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent  from './components/PostsComponent';
import Home from './components/AnotherComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


  const queryClient = new QueryClient();

  function App() {
    return (
      <>
      <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
        </nav>
        <Routes>
          <Route path="/" exact element= {<Home />} />
          <Route path="/posts" element={<PostsComponent />} />
        </Routes>
      </Router>
    </QueryClientProvider>
    </>
    );
  }

  export default App;
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <>
    <h1>
      Home Page
    </h1>
    <Link to='/posts'  > See posts</Link>
  </>
  );
}

export default Home;
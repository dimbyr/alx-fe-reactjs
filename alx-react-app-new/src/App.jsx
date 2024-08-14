import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{display: 'grid'}}>
      <Header />
      <MainContent />
      {/* <WelcomeMessage /> */}
      <UserProfile name ="John" age = {17} bio = "Awesome guy!"/>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
      <Footer />
    </div>
  );
}

export default App

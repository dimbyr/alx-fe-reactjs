import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const userData = {name: "Jane Doe", email: "jane.doe@example.com",  age: 29, bio: "Awesome guy"};

  return (
    <>
      <Header />
      <MainContent />
      <UserContext.Provider  value={userData}>
        <ProfilePage />
        <UserProfile />
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App

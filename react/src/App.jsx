import ComponentParticels from './assets/Particle';
import Navigator from './components/Navigator/Navigator.jsx';
import './App.css';
import Logo from './components/Logo/Logo.jsx';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx';
import Rank from './components/Rank/Rank.jsx';
import { useState } from 'react';
import ImageDisplay from './components/ImageDisplay/ImageDisplay.jsx';
import Generalizer from './components/Generalizer/Generalizer.jsx';
import Signin from './components/Signin/Signin.jsx';
import Register from './components/Register/Register.jsx';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({ id: null, name: '', entries: 0 });

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const loadUser = (id, name, entries) => {
    setUser({ id, name, entries });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/prediction', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: input, id: user.id }),
      });
  
      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status);
      }
  
      const data = await response.json();
      console.log('Backend response:', data); // Check the response structure here
  
      setOutput(data.predictions);
      setUser((prevUser) => ({
        ...prevUser,
        entries: data.entries, // Assign the primitive value directly
      }));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const onRouteChange = (route) => {
    if (route === 'home') {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
    setRoute(route);
  };

  return (
    <div className="App">
      <ComponentParticels />
      <Navigator onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === 'home' ? (
        <div>
    <div className="header">
      <Logo className="logo" />
      <h1 className="title">Image Concepter</h1>
    </div>
          <Rank username={user.name} userEntries={user.entries} />
          <ImageLinkForm
            onChangeInput={onChangeInput}
            input={input}
            onButtonClick={handleSubmit}
          />
          <div className="flex flex-row w-100 justify-center ma">
            <ImageDisplay className="w-50" imgURL={input} />
            <Generalizer className="w-50" info={output} />
          </div>
        </div>
      ) : route === 'signin' ? (
        <Signin onRouteChange={onRouteChange} loadUser={loadUser} />
      ) : (
        <Register onRouteChange={onRouteChange} loadUser={loadUser} />
      )}
    </div>
  );
}

export default App;
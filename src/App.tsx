import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomRoomCreate from './components/Main/CustomRoomCreate';
import Profile from './components/Main/Profile';
import MainPage from './Pages/MainPage';

import './styles/App.css'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<MainPage />} />
        </Routes>




      </BrowserRouter>






    </div>
  );
}

export default App;

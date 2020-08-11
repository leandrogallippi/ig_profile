import React from 'react';
import './App.scss';
import { Header } from './Header';
import { Profile } from './Profile';
import { Feed } from './Feed';

function App() {
  return (
    <section>
      <Header />
      <main>
        <div className="section-content">
          <Profile />
          <Feed />
        </div>
      </main>
    </section>
  );
}

export default App;

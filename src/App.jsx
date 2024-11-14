import React from 'react'
import './App.css'
import Wrapper from './components/Wrapper/Wrapper'
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import TrackList from './components/TrackList/TrackList';
import Sidebar from './components/Sidebar/Sidebar';
import Trackbar from './components/Trackbar/Trackbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Main>
            <Navigation />
            <TrackList />
            <Sidebar/>
          </Main>
          <Trackbar/>
          <Footer/>
        </Container>
      </Wrapper>
    </>
  )
}

export default App;

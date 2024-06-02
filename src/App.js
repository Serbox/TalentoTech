
import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info-principal/Info-principal';
import Board from './components/board/board';
import SlideBar from './components/SlideBar/SlideBar';
function App() {
  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <div className='board'>
        <Board />
      </div>
      <div className='info'>
        <Info />
      </div>
      <div className='slider-bar'>
        <SlideBar/>
      </div>
      <div className='board'>
        <Board />
      </div>
      <div className='slider-bar'>
        <SlideBar/>
      </div>

    </>
  );
}

export default App;


import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info-principal/Info-principal';
import Board from './components/board/board';
import SlideBar from './components/SlideBar/SlideBar';
import Class from './components/Class/Class';
import SesionDataTable from './components/DataTable/DataTable';
import Tools from './components/Tools/Tools';

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
      <div className='class-container'>
        <div className='graphy'>
          <h1>Duración del curso</h1>
          <Class percentage={70} backgroundColor={['#00bfff', '#b0e0e8']}  />
        </div>
        <div className='graphy'>
          <h1>Asistenacia</h1>
          <Class percentage={90} backgroundColor={['#1B8EF2' , '#F2A516']}  hoverBackgroundColor={['#38BDF2', '#F5A640']}/>
        </div>
      </div>
        <div className='sesiondatatable'>
          <SesionDataTable/>
        </div>
        <div className='tools'>
          <Tools/>
        </div>




    </>
  );
}

export default App;

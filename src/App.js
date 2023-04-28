import datas from './data.json'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Popup from './Components/Popup';




function App() {

  const[buttonPopup, setButtonPopup] = useState(0);
  return (
    <div className="App">
      <h1>Sportok</h1>
         <div className="container">
          <div className="row ">
      {datas && datas.map(data =>{
        return(
          <>
            <div className="col-lg-4 " >
              <div className='kartya ' key={data.id}>
              
              <div className="name">
              <img className="image"  src={data.images}></img>
                <main>
                <div className="nev">
                  {data.name}
                </div>
                
                <br></br>
                  <button className='button' onClick={() => setButtonPopup(data.id)}>Bovebben</button>
                </main>  
              
              </div>
              
              </div>
              </div>
                  <Popup trigger={buttonPopup} id={data.id} setTrigger={setButtonPopup}>
                    <img className='image' src={data.images}></img>
                    <br></br>
                    {data.about}
                    <br></br>
                    {data.name}
                  </Popup>  
              </>
         )
        })}
        </div>
      </div>
    </div>
  );
}

export default App;

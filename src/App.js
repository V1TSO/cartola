import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const [changed, setChanged] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {

    let upload = document.getElementById('upload');


    upload.addEventListener('change', function (e) {
      let reader = new FileReader();
      reader.readAsText(upload.files[0]);
      reader.onload = function () {
        setData(reader.result.split("\n"))
      };
    });

  }, [changed]);

  return (
    <div className='main'>
      <div className='top'>
        <h1>Cartola</h1>
        <input type="file" id='upload' onChange={() => setChanged(true)} />
      </div>
      <ul>
        {data.map((item, index) => {
          let cantidad = parseInt(item.substring(19, 58), 10)
          let nombre = item.substring(62, 107).trim()
          if (cantidad && index > 2) {
            return (
              <div class='cargo'>
                <li key={index}>{"Cantidad: $" + cantidad.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</li>
                <p key={null}>{nombre}</p>
              </div>
            );
          }
          else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}

export default App;

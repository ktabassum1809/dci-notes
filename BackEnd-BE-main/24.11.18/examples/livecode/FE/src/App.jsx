import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [records, setRecords] = useState('');
  const [port, setPort] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:5001/records');

      
      console.log(data);
      setRecords(data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getPort = async () => {
      const { data } = await axios.get('http://localhost:5001/');
      console.log(data);
      setPort(data);
    };
    getPort();
  }, []);


  

  return (
    <>

    <h1>Records</h1>
      <div><p>{port? port:<span>port is loading...</span>}</p></div>
      <div>{records? records.map(record=>(< img src={record.img}/>)):<p>loading...</p>} </div>
      
    </>
  );
}

export default App;

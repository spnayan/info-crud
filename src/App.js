import './index.css';

import {useState} from 'react';

import InfoForm from './component/InfoForm';
import List from './component/List';

function App() {
  const [data, setData] = useState([]);
  const [academic, setAcademic]=useState({
    level:"",
    percentage:""
  });
  const [state, setState] = useState({
    name: "",
    address: "",
    email: "",
    gender: "",
    academics:[]
  });

  const handleAcademics=(e)=>{
    setAcademic({
      ...academic,
      [e.target.name]:e.target.value
    });
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd=(e)=>{
    e.preventDefault();
    setState({...state,academics:[...state.academics,academic]})
    setAcademic({
      level:"",
      percentage:""
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const uid = Math.floor(Math.random() * 100);
    const newData = { id: uid, ...state };
    setData((oldData) => [...oldData, newData]);
    setState({
      name: "",
      address: "",
      email: "",
      gender: "",
      academics:[],
    });
  };
  return (
    <div className="flex">
       <InfoForm handleChange={handleChange} handleSubmit={handleSubmit} state={state} handleAcademics={handleAcademics} academic={academic} handleAdd={handleAdd}/>
      <List users={data }/>
    </div>
  );
}

export default App;

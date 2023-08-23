import { useState } from 'react';
import FormDataTable from './Components/FormDataTable';
import TwoStepForm from './Components/TwoStepForm';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const[tableData,setTableData]=useState()
  console.log(tableData,"apppxxxxxx")
  return (
    <Router>
    <div className="App">
     <Routes>
          <Route path="/" element={<TwoStepForm setTableData={setTableData} />}/>
          <Route path="/result" element={<FormDataTable tableData={tableData}/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

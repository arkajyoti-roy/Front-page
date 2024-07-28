// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import FormPage from './FormPage';
// import DisplayPage from './DisplayPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Form from './Components/Form.jsx';
import Display from './Components/Display.jsx';
const App = () => {
  return (
    <>
    
    

    <Router>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/display" element={<Display />} />
            </Routes>
        </Router>

    </>
    
  );
};

export default App;

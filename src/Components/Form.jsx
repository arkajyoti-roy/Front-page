import { useState } from "react"
import { useNavigate } from 'react-router-dom';


const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    roll: '',
    sub: '',
    sem: '',
});
const navigate = useNavigate();

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/display', { state: formData });
};

  return (
   <div>
   <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                />
            </div>
            <div>
                <label>Branch:</label>
                <input 
                    type="text" 
                    name="branch" 
                    value={formData.branch} 
                    onChange={handleInputChange} 
                />
            </div>
            <div>
                <label>Roll no:</label>
                <input 
                    type="text" 
                    name="roll" 
                    value={formData.roll} 
                    onChange={handleInputChange} 
                />
            </div>
            <div>
                <label>Subject:</label>
                <input 
                    type="text" 
                    name="sub" 
                    value={formData.sub} 
                    onChange={handleInputChange} 
                />
            </div>
            <div>
                <label>Semester:</label>
                <input 
                    type="text" 
                    name="sem" 
                    value={formData.sem} 
                    onChange={handleInputChange} 
                />
            </div>
            <button type="submit">Submit</button>
        </form>

   </div>
  )
}

export default Form
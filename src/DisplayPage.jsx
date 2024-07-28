import { useLocation } from 'react-router-dom';

const DisplayPage = () => {
  const location = useLocation();
  const { formData } = location.state || { formData: { name: '', email: '' } };

  return (
    <div>
      <h1>Form Data</h1>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default DisplayPage;


import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthDay:"",
    password:"",
    confirmPassword:"",
  })

  // writing inputs as array
  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"UserName",
      errorMessage:"3-16 Character and no special character",
      label:"Username",
      pattern:"[a-zA-Z0-9]{3,16}$",
      required:true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"should contain @",
      label:"Email",
      required:true,
    },
    {
      id:3,
      name:"birthDay",
      type:"date",
      placeholder:"Birth Date",
      label:"Birth Date",
    },
    {
      id:5,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Please enter character between 3-16 and special character",
      label:"Password",
      pattern:"^(?=.*[a-z])$",
      required:true,
    },
    {
      id:6,
      name:"confirmPassword",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should match",
      label:"Confirm Password",
      pattern:values.password,
      required:true,
    },
  ]
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target)
  //   console.log(Object.fromEntries(data.entries()))
  // };


  const handleChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  } 
  console.log(values)
  return (
    <div className="App">
      <div className="container">
      <form>
      <h1>Register</h1>
          {
            inputs.map(input =>(
              <FormInput
                key={input.id} {...input} value={values[input.name]} onChange ={handleChange}
              />
            ))
          }
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

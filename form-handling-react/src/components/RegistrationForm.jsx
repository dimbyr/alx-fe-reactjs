import { useState } from "react";

function RegistrationForm(){
  const [ username, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {}
    if (!username){
      errors.name = "Name cannot be empty"
    }
    if (!email){
      errors.email = "Email address cannot be empty"
    }
    if (!password){
      errors.password = "Password must be more than 3 characters"
    }
    setError(errors);
    if(error > 0){
      console.log(Object.values(error));
      return;
    }
  }
  return (
    <>
    <form action="POST" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" 
              name="name" 
              id="name" 
              value={username} 
              onChange={(e)=> setName(e.target.value)} 
              />
      <br />
      <label htmlFor="email">Email address</label>
      <input type="email" 
              name='email' 
              id="email" 
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" 
              name="password" 
              id="password" 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              />
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default RegistrationForm;
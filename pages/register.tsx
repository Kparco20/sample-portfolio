import { useState } from 'react';
import { User } from "../interfaces";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your user registration logic here
    console.log('Registering with:', email, password);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        
      </form>
      
    </div>
    
  );
};

export default Register;

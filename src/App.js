import logo from './logo.svg';
import './App.css';
import './login.css';

function App() {
  return (
    <div className="App-header">
      <div className="login">
        <h2>Register</h2>
      <div className="box-login">
        <i class="fas fa-users"></i>
        <input type="text" placeholder="Nama Lengkap"></input>
      </div>
      <div className="box-login">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Nama Akun"></input>
      </div>
      <div className="box-login">
        <i class="fas fa-envelope"></i>
        <input type="text" placeholder="Email"></input>
      </div>
      <div className="box-login">
        <i class="fas fa-key"></i>
        <input type="text" placeholder="Password"></input>
      </div>

      <button type="submit" class="btn-login">Register</button>
      </div>
      
      
      
    </div>
  );
}

export default App;

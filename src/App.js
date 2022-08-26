import Formulario from "./components/Formulario";
import {useState} from 'react';
import Header from "./layout/Header";

function App() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <Header titulo="Ingrese sus datos" />
      <Formulario 
      name = {name} setName = {setName} 
      password = { password } setPassword = { setPassword }/>
    </>
  );
}
export default App;

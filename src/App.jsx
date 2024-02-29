import React, { useState, useEffect } from 'react';
import './App.css'; // Importando o arquivo de estilos CSS

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Atualizar a hora a cada segundo usando setInterval
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpar o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // O segundo argumento é uma lista de dependências vazia para garantir que este efeito seja executado apenas uma vez

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para processar os dados do formulário
    console.log("Origem:", origin);
    console.log("Destino:", destination);
    console.log("Data de partida:", departureDate);
    console.log("Data de retorno:", returnDate);
    console.log("Passageiros:", passengers);
  };

  return (
    <div className="container">
      <h1>Reserva de Passagem Aérea</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Origem:</label>
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Destino:</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Data de Partida:</label>
          <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Data de Retorno:</label>
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Passageiros:</label>
          <input type="number" min="1" value={passengers} onChange={(e) => setPassengers(parseInt(e.target.value))} />
        </div>
        <button type="submit">Pesquisar</button>
      </form>
      <p>A hora atual é: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;

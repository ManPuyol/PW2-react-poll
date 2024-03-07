import React, { useState } from 'react';

function Poll() {
  const [votes, setVotes] = useState({
    JavaScript: 0,
    Python: 0,
    Ruby: 0,
    Rust: 0,
  });

  // Función para añadir un voto a una opción específica
  const addVote = (option) => {
    setVotes({...votes, [option]: votes[option] + 1})
  };

  return (
    <div>
      {Object.keys(votes).map((option, index) => (
        <div key={index}>
          <button onClick={() => addVote(option)}>{option}</button>
          <span> {votes[option]} votos</span>
        </div>
      ))}
    </div>
  );
}

export default Poll;

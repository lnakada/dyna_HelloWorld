import React, { useState } from 'react';
import suggestionsData from './data/moodSuggestions.json';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setLoading(true);
    setTimeout(() => { setLoading(false); }, 1500);
  };

  const moods = ["Happy", "Angry", "Bored", "Anxious"];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!selectedMood && moods.map(mood => (
        <button key={mood} onClick={() => handleMoodSelect(mood)} className="m-2 p-4 bg-blue-500 text-white rounded">{mood}</button>
      ))}
      {loading && <div>Loading suggestions...</div>}
      {selectedMood && !loading && suggestionsData[selectedMood].map((item, idx) => (
        <div key={idx}>
          <img src={item.image} alt={item.name}/>
          <h3>{item.name}</h3>
          <p>{item.reason}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
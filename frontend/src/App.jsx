import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get-counter")
      .then(res => res.json())
      .then(data => setCount(data.value));
  }, []);

  const handleClick = () => {
    fetch("http://127.0.0.1:8000/update-counter", { method: "POST" })
      .then(res => res.json())
      .then(data => setCount(data.value));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Increase
      </button>
    </div>
  );
}

export default App;


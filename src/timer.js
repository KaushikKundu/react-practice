
function App() {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => setTimer(timer + 1), 1000);
  
      // clear the timer when component unmounts to avoid memory leaks and improve performance
      return () => clearInterval(interval);
    }, [timer]);
  
    return (
      <div className="app">
        <h1>{timer}</h1>
      </div>
    );
  }
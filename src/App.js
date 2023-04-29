import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <List items={[{ text: 'saurabh kumar' }, { text: 'saurabh' }, { text: 'saurabh' }]} />
    </div>
  );
}

export default App;

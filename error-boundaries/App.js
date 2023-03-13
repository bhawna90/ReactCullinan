import logo from './logo.svg';
import './App.css';
import CompA from './CompA';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary value="">
        <CompA text="Hello"></CompA>
      </ErrorBoundary>
      <ErrorBoundary>A
        <CompA text="Hi"></CompA>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;

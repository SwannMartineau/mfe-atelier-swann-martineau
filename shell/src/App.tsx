import './App.css';
// The remote component provided by federation_provider
import Header from 'header/button';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default App;
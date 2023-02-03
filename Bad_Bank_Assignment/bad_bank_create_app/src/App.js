import './App.css';
import Spa from './Components/spa';
// import footer from '';

function App() {
  return (
    <>
      <Spa/>
      <footer className="footer mb-4" style={{
        position: 'fixed',
        width: '100%',
        left: '0',
        bottom: '0',
        textAlign: 'center',
        }}>
        <div>
          <a href="https://github.com/OscarTenorio/oscartenorio.github.io/tree/main/Bad_Bank_Assignment" target="“_blank”">Source Code: oscartenorio.github.io</a>
        </div>
      </footer>
    </>
  );
}

export default App;
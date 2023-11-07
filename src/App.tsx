import './App.css';

function App() {
  async function test() {
    await fetch(`${location.origin}/api/calculate`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
    });
  }

  return (
    <>
      <div>boa</div>
      <button onClick={test}>send request</button>
    </>
  );
}

export default App;

import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl mb-8">This is a sample text to check visibility.</p>
        
        <div className="space-y-4">
          <p>Hi there!</p>
          <p>This is some sample content.</p>
        </div>
      </main>
    </div>
  );
}

export default App;

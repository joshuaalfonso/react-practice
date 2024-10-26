
import Auth from './pages/Auth';
import { AuthProvider } from './contexts/authContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseTracker from './pages/ExpenseTracker';

function App() {

  return (
    // <>
      
      <div className='h-dvh bg-zinc-800'>
        <div className='bg-zinc-900 w-full mx-auto sm:max-w-lg h-dvh relative'>


          <AuthProvider>
            <Router>
              <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='expense-tracker' element={<ExpenseTracker />}></Route>
              </Routes>
            </Router>
          </AuthProvider>

        </div>
      </div>

      
    

    // </>
  );
}

export default App;

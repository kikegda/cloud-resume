import './App.css'
import Nabvar from './components/Navbar'
import Counter from './components/Counter'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nabvar />
          <div className="App">
            <h1>Welcome to My Website</h1>
            <p>This is a simple React application.</p>
          </div>
        <Counter />
      </QueryClientProvider>
    </>
  )
}

export default App

import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <div className='menu'>
        <Card title="Product 1" text="This is the description of Product 1." />
        <Card title="Product 2" text="This is the description of Product 2." />
        <Card title="Product 3" text="This is the description of Product 3." />
      </div>
    </>
  )
}

export default App

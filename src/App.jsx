import react from 'react'
import './App.css'
import Card from './assets/components/Card'
import data from './assets/data.json'
function App() {
  // const [count, setCount] = useState(0)
// console.log(data);
  return (
          <div className='wrapper'>
        {
        data.length && data.map((el,index) => {
          return <Card className= "card" key = {index} data = {el}></Card>
          console.log(el);
          })
        }
      </div>
      )
}

export default App

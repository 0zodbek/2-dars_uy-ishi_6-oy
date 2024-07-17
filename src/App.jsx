import './App.css'
import Card from './assets/components/Card'
import data from './assets/data.json'
function App() {
  // const [count, setCount] = useState(0)
// console.log(data);
  return (
          <div>
        {
          data.length && data.map((el,index) => {
           return <Card Key = {index} data = {el}></Card>
          })
        }
      </div>
      )
}

export default App

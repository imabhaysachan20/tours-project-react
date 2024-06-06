import { useEffect, useState } from "react";
import Loading from "../Loading"
import Tours from "../tours";
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  let [isLoading,setIsLoading]=useState(true);
  const [tours,setTours] = useState([]);

  const removeTours = (id)=>{
    const newTours = tours.filter((tour)=>tour.id!==id);
    setTours(newTours);
  }

  const fetchTours = async ()=>{
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours)
      setTours(tours);

    }
    catch (err) {
      console.log(err)
    }
    setIsLoading(false);
  }
  useEffect(()=>{
fetchTours();
  },[])

  if (isLoading) {
    return <main>
      <Loading/>
    </main>
  }

  if (tours.length===0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button type="button" style={{marginTop:'2rem'}} className="btn" onClick={fetchTours}>Refresh
        </button>
      </div>
    </main>
  }
  return <main>
     <Tours tour ={tours} removeTour = {removeTours}></Tours>
      </main>;
};
export default App;


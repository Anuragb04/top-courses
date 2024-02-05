// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const [courses, setCourses] = useState(null);
const [loading, setLoading] = useState(true);
const [category, setCategory]= useState(filterData[0].title);




  async function fetchData() {
    setLoading(true);
    try{
        let response =await fetch(apiUrl);
        let output=await response.json();

        setCourses(output.data);
    }
    catch(error){
          toast.error("Error");
    }
    setLoading(false);
  }


  useEffect(()=> {
      fetchData();
  },[])


  return (
    <div className='min-h-screen flex flex-col'>

      <div>
        <Navbar/>
      </div>

      <div className='flex-1 bg-bgDark2'>
        <div>
          <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
          />
        </div>
        <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>) 
        }
        </div>
      </div>
    </div>
  );
}

export default App;

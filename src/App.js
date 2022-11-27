import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div  className='mt-10 mx-auto border border-black w-1/2 p-5 rounded-xl justify-between'>
        <div className="block">
          <Header title="Task Tracker" />
        </div>
        <div className="block">
          <Tasks />
        </div>
    </div>
  );
}

export default App;

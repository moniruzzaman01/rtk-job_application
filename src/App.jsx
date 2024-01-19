import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />

        <Home />
        <EditJob />
        <AddJob />
      </div>
    </>
  );
}

export default App;

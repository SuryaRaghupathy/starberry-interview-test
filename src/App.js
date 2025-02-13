import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import PropertDetailsPage from "./components/PropertyDetailsPage";
import { useEffect,useState } from "react";
import axios from "axios";
import { propertyDetailsProvider} from "./components/ContextProvider";
import Login from "./components/LoginPage";

function App() {
// fetching the value from the strapi url
  useEffect(()=>{
    axios.get(`https://mira-strapi-dev.q.starberry.com/api/properties/?_limit=50`)
    .then(res =>{
      const property= res.data;
      setPropertyDetails(property) // updating the response in the state variable
      setLoading(false);
    })
  },[])
  
  const [propertyDetails, setPropertyDetails] = useState(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [loading, setLoading] = useState(true); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="container-fluid" style={{ marginTop: "70px", marginBottom: "70px" }}>
      {/* Show Login if not logged in */}
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      )  : (
        <div className="d-flex flex-column">
          <HeaderComponent />
          <propertyDetailsProvider.Provider value={propertyDetails}>
            <PropertDetailsPage />
          </propertyDetailsProvider.Provider>
          <FooterComponent />
        </div>
      )}
    </div>
  );
}

export default App;
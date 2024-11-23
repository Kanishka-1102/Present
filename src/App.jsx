import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import Login from "./routes/Login";
import Signup from "./routes/SignUp";
import Profile from "./routes/Profile";
import { fetchUserData } from "./services/userServices";
import NotFound from "./routes/NotFound";
import Loading from "./routes/Loading";
import Home from "./routes/Home";
import NearByDoctors from "./routes/NearByDoctors";
import Blogs from "./routes/Blogs";
import YogaAyurveda from "./routes/blogs/YogaAyurveda";
import AyurvedicHerbs from "./routes/blogs/AyurvedicHerbs";
import AyurvedicDiet from "./routes/blogs/AyurvedicDiet";
import HolisticHealing from "./routes/blogs/HolisticHealing";
import SeasonalAyurvedicPractices from "./routes/blogs/SeasonalAyurvedicPractices";
import ManagingStressWithAyurveda from "./routes/blogs/ManagingStressWithAyurveda";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        if (data) {
          setLoggedIn(true);
        }
      })
      .finally(() => {
       
        setLoading(false);
      });
  }, []);

  if (loading) {
    // Return a loading indicator or some other UI
    return <Loading />;
  }

  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/chatwithbot" element={<Layout></Layout>} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/yoga-ayurveda" element={<YogaAyurveda />} />
              <Route path="/ayurvedic-herbs" element={<AyurvedicHerbs />} />
              <Route path="/ayurvedic-diet" element={<AyurvedicDiet />} />
              <Route path="/holistic-healing" element={<HolisticHealing />} />
              <Route path="/seasonal-ayurvedic-practices" element={<SeasonalAyurvedicPractices /> } />
              <Route path="/managing-stress-with-ayurveda" element={<ManagingStressWithAyurveda /> } />
              <Route path="/nearbydoctors" element={<NearByDoctors /> }/>
              <Route path="/helpcenter" element={<Layout></Layout>} />
              <Route
                path="/profile"
                element={
                  <Profile />
                }
              />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/chatwithbot" element={<Signup />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/yoga-ayurveda" element={<YogaAyurveda />} />
              <Route path="/ayurvedic-herbs" element={<AyurvedicHerbs />} />
              <Route path="/ayurvedic-diet" element={<AyurvedicDiet />} />
              <Route path="/holistic-healing" element={<HolisticHealing />} />
              <Route path="/seasonal-ayurvedic-practices" element={<SeasonalAyurvedicPractices /> } />
              <Route path="/managing-stress-with-ayurveda" element={<ManagingStressWithAyurveda /> } />
              <Route path="/nearbydoctors" element={<NearByDoctors /> } />
              <Route path="/helpcenter" element={<Layout></Layout>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

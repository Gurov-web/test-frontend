import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {useAuthStore} from "./store/authStore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tests from "./pages/Tests";
import TestPage from "./pages/TestPage";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/layout/Navbar/Navbar";
import AdminUsers from "./pages/AdminUsers";
import Footer from "./components/layout/Footer/Footer.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function PrivateRoute({children, adminOnly = false}) {
    const {user} = useAuthStore();
    if (!user) return <Navigate to="/login"/>;
    if (adminOnly && user.role !== "admin") return <Navigate to="/"/>;
    return children;
}

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-zinc-950 flex flex-col">
                <Navbar/>
                <div className="grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/tests" element={<Tests/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route
                            path="/test/:id"
                            element={
                                <PrivateRoute>
                                    <TestPage/>
                                </PrivateRoute>
                            }/>
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <Profile/>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/admin"
                            element={
                                <PrivateRoute adminOnly>
                                    <AdminDashboard/>
                                </PrivateRoute>
                            }
                        />
                        <Route path="/admin/users" element={<PrivateRoute adminOnly><AdminUsers/></PrivateRoute>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

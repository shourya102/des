import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import SearchPage from "./pages/SearchPage/SearchPage.tsx";

const App = () => {
    return (
        <div className="w-screen min-w-screen overflow-x-clip h-svh bg-primary-1">
            <div className="relative">
                <BrowserRouter>
                    <Routes>
                        <Route index path="/" element={<Home/>}></Route>
                        <Route index path="/search" element={<SearchPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
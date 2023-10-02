import React from 'react';
import { Link, Route, Router, Routes, useRoutes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
    // let element = useRoutes([
	// 	// Route에서 사용하는 props의 요소들과 동일
    //     { path: "/", element: <Home/> },
    //     { path: "about", element: <About/> },
    //     { 
    //         path: "profiles", 
    //         element: <Profiles/>, 
    //         // children: [
    //         //     { path: ":username", element: <Profile/> }
    //         // ]
    //     }
    //     //     // NotFound 페이지는 다음과 같이 구현할 수 있음
    //     // { path: "*", element: <NotFound /> }
    // ]);

    // return element;
    // return (
    //     <div>
    //         <ul>
    //             <li>
    //                 <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/about">About</Link>
    //             </li>
    //             <li>
    //                 <Link to="/profiles">Profiles</Link>
    //             </li>
    //         </ul>
    //         {element}
    //     </div>
    // );


    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profiles">Profiles</Link>
                </li>
                <li>
                    <Link to='/history'>History</Link>
                </li>
            </ul>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topics" element={<Topics />}>
                    <Route path=":topicId" element={<Topic />}>
                    <Route path=":resourceId" element={<Resource />} />
                    </Route>
                </Route>
            </Routes> */}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/profiles/*' element={<Profiles/>}/>
                <Route path='/history' element={<HistorySample/>}/>
                {/* <Route path='/profiles/*' element={<Profiles/>}>
                    <Route path="profile" element={<Profile />}/> */}
                    {/* <Route path='/profile/:username' element={<Profile/>}/> */}
                    {/* <Route path='/*' element={<Profiles/>}/> */}
                    {/* <Route path='/profile' element={<Profile/>}/> */}
                {/* </Route> */}
                {/* <Route path='/profile/:username' element={<Profile/>}/>  */}

            </Routes>
        </div>
    );
};

export default App;
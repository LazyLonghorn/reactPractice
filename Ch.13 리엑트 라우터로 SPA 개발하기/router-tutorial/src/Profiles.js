import React from 'react';
import { Link, NavLink, Route, Router, Routes, useRoutes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    // let element = useRoutes([
	// 	// Route에서 사용하는 props의 요소들과 동일
    //     { path: "/", element: <Profiles/> },
    //     // { path: ":username", element: <Profile/> },
    //     // { path: "profiles", element: <Profile/> }
    //     //     // NotFound 페이지는 다음과 같이 구현할 수 있음
    //     // { path: "*", element: <NotFound /> }
    // ]);
    const activeStyle = {
        backgroundColor: 'black',
        color: 'white'
    }

    return (
        <div>
            <h3>User List</h3>
            <ul>
                <li>
                    <Link to='profile'>profile</Link>
                </li>
                <li>
                    {/* <Link to='profile/jon'>Jon</Link> */}
                    {/* <NavLink activeStyle={activeStyle} to='profile/jon'>Jon</NavLink> */}
                    <NavLink to='profile/jon' style={({isActive}) => {
                        return {
                            background: (isActive) ? 'black' : '',
                            color: (isActive) ? 'white' : ''
                        }
                    }}>Jon</NavLink>  
                    {/* <NavLink to='profile/jon' style={ state => {
                        let { isActive } = state
                        return (isActive) ? {activeStyle} : ''
                    } }>Jon</NavLink> */}
                </li>
                <li>
                    <Link to='profile/lisa'>Lisa</Link>
                </li>
            </ul>
            
            <div>Select User</div>
            
            <Routes>
                <Route path='/profile/*' element={<Profile/>}>
                    <Route path=":username" element={<Profile />}/>
                </Route>
            </Routes>


            {/* <Routes>
                <Route path='/profile' element={<Profile/>}/>
            </Routes> */}
            {/* <Routes> */}
                {/* <Route path=':username'element={<Profile/>}/> */}
                {/* <Route path='/profile/*' element={<Profile/>}>
                    <Route path='/:username/*' element={<Profile/>}/>
                </Route> */}

            {/* </Routes> */}
        </div>
    );
};

export default Profiles;
// // // // // client/src/App.js
// // // // import React, { useEffect, useState } from 'react';
// // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // import './App.css'; // Add some custom styles here

// // // // import Login from './components/Login';
// // // // import Dashboard from './components/Dashboard';
// // // // import Navbar from './components/Navbar';

// // // // const App = () => {
// // // //     const [user, setUser] = useState(null);

// // // //     useEffect(() => {
// // // //         fetch('/auth/current_user', { credentials: 'include' })
// // // //             .then(response => {
// // // //                 if (response.ok) {
// // // //                     return response.json();
// // // //                 }
// // // //                 throw new Error('Not authenticated');
// // // //             })
// // // //             .then(data => setUser(data))
// // // //             .catch(() => setUser(null));
// // // //     }, []);

// // // //     const handleLogout = () => {
// // // //         fetch('/auth/logout', { method: 'GET', credentials: 'include' })
// // // //             .then(() => setUser(null));
// // // //     };

// // // //     return (
// // // //       <Router>
// // // //           <div className="App">
// // // //               <Navbar user={user} onLogout={handleLogout} />
// // // //               <Routes>
// // // //                   <Route path="/" element={user ? <Dashboard user={user} /> : <Login />} />
// // // //                   <Route path="/login" element={<Login />} />
// // // //               </Routes>
// // // //           </div>
// // // //       </Router>
// // // //   );
  
// // // // };

// // // // export default App;
// // // import React, { useEffect, useState } from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import './App.css';

// // // import Login from './components/Login';
// // // import Dashboard from './components/Dashboard';
// // // import Navbar from './components/Navbar';

// // // const App = () => {
// // //     const [user, setUser] = useState(null);

// // //     useEffect(() => {
// // //         fetch('/auth/current_user', { credentials: 'include' })
// // //             .then(response => {
// // //                 if (response.ok) {
// // //                     return response.json();
// // //                 }
// // //                 throw new Error('Not authenticated');
// // //             })
// // //             .then(data => setUser(data))
// // //             .catch(() => setUser(null));
// // //     }, []);

// // //     const handleLogout = () => {
// // //         fetch('/auth/logout', { method: 'GET', credentials: 'include' })
// // //             .then(() => setUser(null));
// // //     };

// // //     return (
// // //         <Router>
// // //             <div className="App">
// // //                 <Navbar user={user} onLogout={handleLogout} />
// // //                 <Routes>
// // //                     <Route path="/" element={user ? <Dashboard user={user} /> : <Login />} />
// // //                     <Route path="/login" element={<Login />} />
// // //                     <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login />} />
// // //                 </Routes>
// // //             </div>
// // //         </Router>
// // //     );
// // // };

// // // export default App;
// // // client/src/App.js
// // import React, { useEffect, useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import './App.css';

// // import Login from './components/Login';
// // import Dashboard from './components/Dashboard';
// // import Navbar from './components/Navbar';

// // const App = () => {
// //     const [user, setUser] = useState(null);

// //     useEffect(() => {
// //         fetch('/auth/current_user', { credentials: 'include' })
// //             .then(response => {
// //                 if (response.ok) {
// //                     return response.json();
// //                 }
// //                 throw new Error('Not authenticated');
// //             })
// //             .then(data => setUser(data))
// //             .catch(() => setUser(null));
// //     }, []);

// //     const handleLogout = () => {
// //         fetch('/auth/logout', { method: 'GET', credentials: 'include' })
// //             .then(() => setUser(null));
// //     };

// //     return (
// //         <Router>
// //             <div className="App">
// //                 <Navbar user={user} onLogout={handleLogout} />
// //                 <Routes>
// //                     <Route path="/" element={user ? <Dashboard user={user} /> : <Login />} />
// //                     <Route path="/login" element={<Login />} />
// //                     <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login />} />
// //                 </Routes>
// //             </div>
// //         </Router>
// //     );
// // };

// // export default App;
// // client/src/App.js
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';

// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import Navbar from './components/Navbar';

// const App = () => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true); // Add loading state

//             useEffect(() => {
//                 fetch('/auth/current_user', { credentials: 'include' }) // The path must point to the backend route
//                     .then(response => {
//                         if (response.ok) {
//                             return response.json();
//                         }
//                         throw new Error('Not authenticated');
//                     })
//                     .then(data => setUser(data))
//                     .catch(() => setUser(null));
//             }, []);

//             const handleLogout = () => {
//                 fetch('/auth/logout', { method: 'GET', credentials: 'include' })
//                     .then(() => setUser(null));
//             };

//     // If loading, you can display a spinner or a loading message
//     if (loading) {
//         return <div>Loading...</div>; // Or a custom spinner/loading component
//     }

//     return (
//         <Router>
//             <div className="App">
//                 <Navbar user={user} onLogout={handleLogout} />
//                 <Routes>
//                     <Route path="/" element={user ? <Dashboard user={user} /> : <Login />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login />} /> {/* Ensure Dashboard route */}
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;
// client/src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/auth/current_user', { credentials: 'include' });
                if (!response.ok) {
                    throw new Error('Not authenticated');
                }
                const data = await response.json();
                setUser(data); // Set user data
            } catch (error) {
                setUser(null); // No user found
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        fetch('/auth/logout', { method: 'GET', credentials: 'include' })
            .then(() => setUser(null));
    };

    // If loading, display loading message
    if (loading) {
        return <div>Loading...</div>; // Or a custom spinner/loading component
    }

    return (
        <Router>
            <div className="App">
                <Navbar user={user} onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={user ? <Dashboard user={user} /> : <Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

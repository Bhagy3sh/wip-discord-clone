// // // client/src/components/Navbar.js
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = ({ user, onLogout }) => {
// //     return (
// //         <nav>
// //             <h1>Discord Clone</h1>
// //             <ul>
// //                 {user ? (
// //                     <>
// //                         <li>Hello, {user.displayName}</li>
// //                         <li><button onClick={onLogout}>Logout</button></li>
// //                     </>
// //                 ) : (
// //                     <li><Link to="/login">Login with Google</Link></li>
// //                 )}
// //             </ul>
// //         </nav>
// //     );
// // };

// // export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ user, onLogout }) => {
//     return (
//         <nav>
//             <h1>Discord Clone</h1>
//             <ul>
//                 {user ? (
//                     <>
//                         <li>Hello, {user.displayName}</li>
//                         <li><button onClick={onLogout}>Logout</button></li>
//                     </>
//                 ) : (
//                     <li><Link to="/login">Login</Link></li>
//                 )}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;
// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    return (
        <nav>
            <h1>Discord Clone</h1>
            <ul>
                {user ? (
                    <>
                        <li>Hello, {user.displayName}</li>
                        <li><button onClick={onLogout}>Logout</button></li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

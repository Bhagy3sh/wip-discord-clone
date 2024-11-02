// // client/src/components/Login.js
// import React from 'react';

// const Login = () => {
//     const handleLogin = () => {
//         window.open('http://localhost:5000/auth/google', '_self'); // Change URL if deployed
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <button onClick={handleLogin}>Login with Google</button>
//         </div>
//     );
// };

// export default Login;
// client/src/components/Login.js
import React from 'react';

const Login = () => {
    const handleLogin = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;

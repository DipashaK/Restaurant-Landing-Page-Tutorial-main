// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';  // Import useNavigate

// // const Login = () => {
// //   const [emailId, setEmailId] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();  // Initialize navigate

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const userData = { emailId, password };

// //     try {
// //       const response = await axios.post('http://localhost:5000/login', userData);
// //       console.log(response.data);

// //       // Save the logged-in email in localStorage
// //       localStorage.setItem('userEmail', emailId);

// //       // Check if the email matches 'dipashak0505@gmail.com'
// //       if (emailId === 'dipashak0505@gmail.com') {
// //         navigate('/overview');  // Redirect to overview page
// //       } else {
// //         navigate('/donor-receiver');  // Redirect to donor-receiver page
// //       }

// //     } catch (error) {
// //       if (error.response) {
// //         setError(error.response.data.message || 'Invalid credentials.');
// //       } else if (error.request) {
// //         setError('No response from server.');
// //       } else {
// //         setError('Error in form submission.');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-900">
// //       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mb-3">
// //         <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
// //           Login to Your Account
// //         </h2>
// //         {error && (
// //           <p className="text-sm text-red-500 text-center mb-3">{error}</p>
// //         )}
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label className="block text-sm font-semibold text-gray-700 mb-1">
// //               Email Address
// //             </label>
// //             <input
// //               type="email"
// //               value={emailId}
// //               onChange={(e) => setEmailId(e.target.value)}
// //               placeholder="Enter your email"
// //               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-sm font-semibold text-gray-700 mb-1">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Enter your password"
// //               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
// //               required
// //             />
// //           </div>
// //           <div className="mt-4">
// //             <button
// //               type="submit"
// //               className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             >
// //               Login
// //             </button>
// //           </div>
// //         </form>
// //         <p className="text-center text-sm text-gray-600 mt-4">
// //           Don't have an account?{' '}
// //           <a
// //             href="/signup"
// //             className="text-blue-500 hover:underline font-medium"
// //           >
// //             Sign Up
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';  // Import eye icons

// const Login = () => {
//   const [emailId, setEmailId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);  // State to toggle password visibility
//   const navigate = useNavigate();  // Initialize navigate

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userData = { emailId, password };

//     // Reset errors before submitting
//     setEmailError('');
//     setPasswordError('');

//     // Basic validations
//     if (!emailId.includes('@gmail.com')) {
//       setEmailError('Email must be a Gmail address.');
//       return;
//     }

//     // Check if the part before @ contains at least one letter and isn't all numbers
//     const emailLocalPart = emailId.split('@')[0];
//     if (!/[a-zA-Z]/.test(emailLocalPart) || /^\d+$/.test(emailLocalPart)) {
//       setEmailError('Email must contain at least one letter before the "@".');
//       return;
//     }

//     if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       setPasswordError('Password must be at least 8 characters long and contain a special character.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/login', userData);
//       console.log(response.data);

//       // Save the logged-in email in localStorage
//       localStorage.setItem('userEmail', emailId);

//       // Check if the email matches 'dipashak0505@gmail.com'
//       if (emailId === 'dipashak0505@gmail.com') {
//         navigate('/overview');  // Redirect to overview page
//       } else {
//         navigate('/donor-receiver');  // Redirect to donor-receiver page
//       }

//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message || 'Invalid credentials.');
//       } else if (error.request) {
//         setError('No response from server.');
//       } else {
//         setError('Error in form submission.');
//       }
//     }
//   };

//   // Email validation handler
//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmailId(value);

//     // Check for @gmail.com and alphabetic characters before @ (and not only numbers)
//     if (value && !value.includes('@gmail.com')) {
//       setEmailError('Email must be a Gmail address.');
//     } else {
//       const emailLocalPart = value.split('@')[0];
//       if (emailLocalPart && (!/[a-zA-Z]/.test(emailLocalPart) || /^\d+$/.test(emailLocalPart))) {
//         setEmailError('Email must contain at least one letter before the "@".');
//       } else {
//         setEmailError('');
//       }
//     }
//   };

//   // Password validation handler
//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);

//     // Check password length and special character presence
//     if (value && (value.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(value))) {
//       setPasswordError('Password must be at least 8 characters long and contain a special character.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mb-3">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
//           Login to Your Account
//         </h2>
//         {error && (
//           <p className="text-sm text-red-500 text-center mb-3">{error}</p>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               value={emailId}
//               onChange={handleEmailChange}
//               placeholder="Enter your email"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//               required
//             />
//             {emailError && (
//               <p className="text-xs text-red-500 mt-1">{emailError}</p>
//             )}
//           </div>
//           <div className="mb-4 relative">
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type={passwordVisible ? 'text' : 'password'}
//               value={password}
//               onChange={handlePasswordChange}
//               placeholder="Enter your password"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//               required
//             />
//             <div
//               onClick={() => setPasswordVisible(!passwordVisible)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//             >
//               {passwordVisible ? (
//                 <AiOutlineEyeInvisible size={20} color="black" />
//               ) : (
//                 <AiOutlineEye size={20} color="black" />
//               )}
//             </div>
//             {passwordError && (
//               <p className="text-xs text-red-500 mt-1">{passwordError}</p>
//             )}
//           </div>
//           <div className="mt-4">
//             <button
//               type="submit"
//               className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don't have an account?{' '}
//           <a
//             href="/signup"
//             className="text-blue-500 hover:underline font-medium"
//           >
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { emailId, password };

    // Reset errors before submitting
    setError('');
    setEmailError('');
    setPasswordError('');

    // Basic validations
    if (!emailId.includes('@gmail.com')) {
      setEmailError('Email must be a Gmail address.');
      return;
    }

    const emailLocalPart = emailId.split('@')[0];
    if (!/[a-zA-Z]/.test(emailLocalPart) || /^\d+$/.test(emailLocalPart)) {
      setEmailError('Email must contain at least one letter before the "@".');
      return;
    }

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain a special character.'
      );
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', userData);

      // Save the logged-in email in localStorage
      localStorage.setItem('userEmail', emailId);

      // Redirect logic based on email
      if (emailId === 'dipashak0505@gmail.com') {
        navigate('/overview');
      } else {
        navigate('/donor-receiver');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Invalid credentials.');
      } else if (error.request) {
        setError('No response from server.');
      } else {
        setError('Error in form submission.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Login to Your Account
        </h2>
        {error && (
          <p className="text-sm text-red-500 text-center mb-3">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
            {emailError && (
              <p className="text-xs text-red-500 mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
            <div
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible size={20} color="black" />
              ) : (
                <AiOutlineEye size={20} color="black" />
              )}
            </div>
            {passwordError && (
              <p className="text-xs text-red-500 mt-1">{passwordError}</p>
            )}
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <a
            href="/signup"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;


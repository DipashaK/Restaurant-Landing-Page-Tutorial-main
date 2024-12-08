// // import { Route, Routes, useLocation } from "react-router-dom";
// // import Sidebar from "./components/common/Sidebar";
// // import OverviewPage from "./pages/OverviewPage";
// // import SettingsPage from "./pages/SettingsPage";
// // import DonorsPage from "./pages/DonorsPage";
// // import RecipientsPage from "./pages/RecipientsPage";
// // import CalendarPage from "./pages/CalendarPage";
// // import TrackOrganPage from "./pages/TrackOrganPage";
// // import OrganManager from "./pages/addOrgan";
// // import OrganRecieverManager from "./pages/addReciver";
// // import Login from "./pages/LoginPage";
// // import SignUp from "./pages/SignupPage";
// // import DonorReceiverPage from "./pages/donorRecieverPage";
// // import './index.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import LandingPage from "./newComponents/LandingPage"

// // function App() {
// //   const location = useLocation();
// //   const hideSidebarPaths = ["/login", "/signUp", "/donor-receiver", "/add-receiver", "/add-organ", "/"];

// //   const shouldShowSidebar = !hideSidebarPaths.includes(location.pathname);

// //   return (
// //     <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
// //       {shouldShowSidebar && <Sidebar />}

// //       <div className={`flex-1 overflow-auto ${shouldShowSidebar ? "" : "w-full"}`}>
// //         <Routes>
// //         <Route path="/" element={<LandingPage/>} />
// //           <Route path="/login" element={<Login/>} />
// //           <Route path="/signUp" element={<SignUp />}/>
// //           <Route path="/donor-receiver" element={<DonorReceiverPage />}/>
// //           <Route path="/overview" element={<OverviewPage />} />
// //           <Route path="/donors" element={<DonorsPage />} />
// //           <Route path="/recipients" element={<RecipientsPage />} />
// //           <Route path="/track-organ" element={<TrackOrganPage />} />
// //           <Route path="/calendar" element={<CalendarPage />} />
// //           <Route path="/settings" element={<SettingsPage />} />
// //           <Route path="/add-organ" element={<OrganManager />} />
// //           <Route path="/add-receiver" element={<OrganRecieverManager />} />
// //           <Route
// //             path="*"
// //             element={
// //               <div className="flex items-center justify-center h-full text-center">
// //                 <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
// //               </div>
// //             }
// //           />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;



// import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// import { useState } from "react";
// import Sidebar from "./components/common/Sidebar";
// import OverviewPage from "./pages/OverviewPage";
// import SettingsPage from "./pages/SettingsPage";
// import DonorsPage from "./pages/DonorsPage";
// import RecipientsPage from "./pages/RecipientsPage";
// import CalendarPage from "./pages/CalendarPage";
// import TrackOrganPage from "./pages/TrackOrganPage";
// import OrganManager from "./pages/addOrgan";
// import OrganRecieverManager from "./pages/addReciver";
// import Login from "./pages/LoginPage";
// import SignUp from "./pages/SignupPage";
// import DonorReceiverPage from "./pages/donorRecieverPage";
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import LandingPage from "./newComponents/LandingPage";

// function ProtectedRoute({ children, isAuthenticated }) {
//   // Redirect to login if not authenticated
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// }

// function App() {
//   const location = useLocation();
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status

//   const hideSidebarPaths = ["/login", "/signUp", "/","signup"];
//   const shouldShowSidebar = !hideSidebarPaths.includes(location.pathname);

//   return (
//     <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
//       {shouldShowSidebar && <Sidebar />}
//       <div className={`flex-1 overflow-auto ${shouldShowSidebar ? "" : "w-full"}`}>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
//           <Route path="/signUp" element={<SignUp />} />

//           {/* Protect the following routes */}
//           <Route
//             path="/overview"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <OverviewPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/donors"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <DonorsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/recipients"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <RecipientsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/track-organ"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <TrackOrganPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/calendar"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <CalendarPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/settings"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <SettingsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/add-organ"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <OrganManager />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/add-receiver"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <OrganRecieverManager />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/donor-receiver"
//             element={
//               <ProtectedRoute isAuthenticated={isAuthenticated}>
//                 <DonorReceiverPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="*"
//             element={
//               <div className="flex items-center justify-center h-full text-center">
//                 <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;




import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import SettingsPage from "./pages/SettingsPage";
import DonorsPage from "./pages/DonorsPage";
import RecipientsPage from "./pages/RecipientsPage";
import CalendarPage from "./pages/CalendarPage";
import TrackOrganPage from "./pages/TrackOrganPage";
import OrganManager from "./pages/addOrgan";
import OrganRecieverManager from "./pages/addReciver";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignupPage";
import DonorReceiverPage from "./pages/donorRecieverPage";
import LandingPage from "./newComponents/LandingPage";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setIsAuthenticated(!!userEmail);
  }, []);

  const hideSidebarPaths = [
    "/login",
    "/signUp",
    "/",
  ];

  const shouldShowSidebar = !hideSidebarPaths.includes(location.pathname);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {shouldShowSidebar && <Sidebar />}

      <div className={`flex-1 overflow-auto ${shouldShowSidebar ? "" : "w-full"}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/donor-receiver"
            element={isAuthenticated ? <DonorReceiverPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/overview"
            element={isAuthenticated ? <OverviewPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/donors"
            element={isAuthenticated ? <DonorsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/recipients"
            element={isAuthenticated ? <RecipientsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/track-organ"
            element={isAuthenticated ? <TrackOrganPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/calendar"
            element={isAuthenticated ? <CalendarPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/settings"
            element={isAuthenticated ? <SettingsPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-organ"
            element={isAuthenticated ? <OrganManager /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-receiver"
            element={isAuthenticated ? <OrganRecieverManager /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-full text-center">
                <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

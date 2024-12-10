// import React, { useState, useEffect } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import Header from "../components/common/Header";
// import axios from "axios";
// import "./CalendarPage.css";

// const localizer = momentLocalizer(moment);
// //const API_BASE_URL = "http://localhost:5000/api";

// const CalendarPage = () => {
//   const [events, setEvents] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     start: new Date(),
//     end: new Date(),
//     organ: "",
//     recipient: "",
//     location: "",
//   });
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Fetch events from the backend
//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/transplant`).then((response) => {
//       const formattedEvents = response.data.map((transplant) => ({
//         title: `${transplant.organ} for ${transplant.recipient}`,
//         start: new Date(`${transplant.date}T${transplant.time}`),
//         end: new Date(`${transplant.date}T${transplant.time}`),
//         organ: transplant.organ,
//         recipient: transplant.recipient,
//         location: transplant.location,
//       }));
//       setEvents(formattedEvents);
//     });
//   }, []);

//   // Handle adding a new event
//   const handleAddEvent = async (e) => {
//     e.preventDefault();
//       try {
//       const response = await axios.post(`http://localhost:5000/api/transplant`, {
//         date: moment(newEvent.start).format("YYYY-MM-DD"),
//         time: moment(newEvent.start).format("HH:mm"),
//         organ: newEvent.organ,
//         recipient: newEvent.recipient,
//         location: newEvent.location,
//       });

//       setEvents((prev) => [
//         ...prev,
//         {
//           title: `${response.data.organ} for ${response.data.recipient}`,
//           start: newEvent.start,
//           end: newEvent.end,
//           organ: response.data.organ,
//           recipient: response.data.recipient,
//           location: response.data.location,
//         },
//       ]);

//       toast.success("Event added successfully!");

//       setShowForm(false);
//       setNewEvent({
//         title: "",
//         start: new Date(),
//         end: new Date(),
//         organ: "",
//         recipient: "",
//         location: "",
//       });
//     } catch (error) {
//       toast.error("Failed to add event. Please try again.");
//     }
//   };

//   return (
//     <div className="flex-1 relative z-10 overflow-auto min-h-screen">
//       <Header title="Organ Transplant Calendar" />

//       <main
//         className={`max-w-6xl mx-auto py-6 px-4 lg:px-8 transition-all duration-300 ${
//           showForm ? "filter blur-md pointer-events-none" : ""
//         }`}
//       >
//         <section className="mb-12">
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 500 }}
//             views={["month", "week", "day"]}
//             defaultView="month"
//             popup
//             onSelectEvent={(event) => setSelectedEvent(event)}
//           />
//         </section>

//         <section className="mt-6">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//             onClick={() => setShowForm(true)}
//           >
//             Add New Transplant
//           </button>
//         </section>
//       </main>

//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-2xl font-semibold mb-4 text-white">
//               Add New Transplant
//             </h2>
//             <form onSubmit={handleAddEvent}>
//               <div className="mb-4">
//                 <label className="block text-white">Title</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded-md text-black"
//                   value={newEvent.title}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({
//                       ...prev,
//                       title: e.target.value,
//                     }))
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Start Date & Time</label>
//                 <input
//                   type="datetime-local"
//                   className="w-full p-2 border rounded-md text-black"
//                   value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({
//                       ...prev,
//                       start: new Date(e.target.value),
//                     }))
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">End Date & Time</label>
//                 <input
//                   type="datetime-local"
//                   className="w-full p-2 border rounded-md text-black"
//                   value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({
//                       ...prev,
//                       end: new Date(e.target.value),
//                     }))
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Organ</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded-md text-black"
//                   value={newEvent.organ}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({
//                       ...prev,
//                       organ: e.target.value,
//                     }))
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Recipient</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded-md text-black"
//                   value={newEvent.recipient}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({
//                       ...prev,
//                       recipient: e.target.value,
//                     }))
//                   }
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Location</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded-md text-black"
//                   value={newEvent.location}
//                   onChange={(e) =>
//                     setNewEvent((prev) => ({
//                       ...prev,
//                       location: e.target.value,
//                     }))
//                   }
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2"
//                   onClick={() => setShowForm(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-4 py-2 rounded-md"
//                 >
//                   Add Event
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {selectedEvent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-2xl font-semibold mb-4 text-white">
//               Event Details
//             </h2>
//             <div className="text-white">
//               <p>
//                 <strong>Title:</strong> {selectedEvent.title}
//               </p>
//               <p>
//                 <strong>Start:</strong>{" "}
//                 {moment(selectedEvent.start).format("YYYY-MM-DD HH:mm")}
//               </p>
//               <p>
//                 <strong>End:</strong>{" "}
//                 {moment(selectedEvent.end).format("YYYY-MM-DD HH:mm")}
//               </p>
//               <p>
//                 <strong>Organ:</strong> {selectedEvent.organ}
//               </p>
//               <p>
//                 <strong>Recipient:</strong> {selectedEvent.recipient}
//               </p>
//               <p>
//                 <strong>Location:</strong> {selectedEvent.location}
//               </p>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 className="bg-red-600 text-white px-4 py-2 rounded-md"
//                 onClick={() => setSelectedEvent(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <ToastContainer position="top-right" autoClose={5000} />
//     </div>
//   );
// };

// export default CalendarPage;

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarPage.css";

const localizer = momentLocalizer(moment);

const organOptions = ["Lungs", "Kidneys", "Heart", "Liver", "Pancreas", "Cornea"];
const locationOptions = ["Chandigarh", "Patiala", "Delhi", "Mumbai", "Kolkata", "Bengaluru"];

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // Store the currently selected event
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    organ: "",
    recipient: "",
    location: "",
  });
  const [errors, setErrors] = useState({});

  // Fetch events from the server
  useEffect(() => {
    axios.get(`http://localhost:5000/api/transplant`).then((response) => {
      const formattedEvents = response.data.map((transplant) => ({
        title: `${transplant.organ} for ${transplant.recipient}`,
        start: new Date(`${transplant.date}T${transplant.time}`),
        end: new Date(`${transplant.endDate}T${transplant.time}`),
        organ: transplant.organ,
        recipient: transplant.recipient,
        location: transplant.location,
      }));
      setEvents(formattedEvents);
    });
  }, []);

  // Validate fields for new event form
  const validateField = (name, value) => {
    let error = "";
    if (name === "recipient" && !/^[a-zA-Z\s]+$/.test(value)) {
      error = "Recipient name must only contain alphabets.";
    }
    if (name === "start" && new Date(value) < new Date()) {
      error = "Start date cannot be in the past.";
    }
    if (name === "end" && new Date(value) < new Date(newEvent.start)) {
      error = "End date cannot be before the start date.";
    }
    return error;
  };

  // Handle input change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setNewEvent((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: error }));
    if (error) {
      toast.error(error);
    }
  };

  // Add new event to the calendar
  const handleAddEvent = async (e) => {
    e.preventDefault();
    const { organ, recipient, location, start, end } = newEvent;

    if (!organ || !location || !recipient || errors.recipient || errors.start || errors.end) {
      toast.error("Please fix all validation errors before adding the event.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/transplant`, {
        date: moment(start).format("YYYY-MM-DD"),
        time: moment(start).format("HH:mm"),
        organ,
        recipient,
        location,
        endDate: moment(end).format("YYYY-MM-DD"),
      });

      setEvents((prev) => [
        ...prev,
        {
          title: `${response.data.organ} for ${response.data.recipient}`,
          start: new Date(start),
          end: new Date(end),
          organ: response.data.organ,
          recipient: response.data.recipient,
          location: response.data.location,
        },
      ]);

      toast.success("Event added successfully!");
      setShowForm(false);
      setNewEvent({
        title: "",
        start: new Date(),
        end: new Date(),
        organ: "",
        recipient: "",
        location: "",
      });
    } catch (error) {
      toast.error("Failed to add event. Please try again.");
    }
  };

  // Highlight selected event
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    toast.info(`Selected event: ${event.title}`);
  };

  // Customize event appearance
  const eventPropGetter = (event) => {
    const isSelected = selectedEvent && selectedEvent.title === event.title;
    return {
      style: {
        backgroundColor: isSelected ? "#f0ad4e" : "#007bff",
        borderRadius: "5px",
        opacity: 0.8,
        color: "white",
        border: isSelected ? "2px solid black" : "none",
      },
    };
  };

  return (
    <div className="flex-1 relative z-10 overflow-auto min-h-screen">
      <header className="text-white bg-gray-800 py-4 px-6">
        <h1 className="text-2xl font-bold">Organ Transplant Calendar</h1>
      </header>

      <main className="max-w-6xl mx-auto py-6 px-4 lg:px-8 transition-all duration-300">
        <section className="mb-12">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={["month", "week", "day"]}
            defaultView="month"
            popup
            eventPropGetter={eventPropGetter}
            onSelectEvent={handleSelectEvent}
          />
        </section>

        <section className="mt-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => setShowForm(true)}
          >
            Add New Transplant
          </button>
        </section>
      </main>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Add New Transplant
            </h2>
            <form onSubmit={handleAddEvent}>
              <div className="mb-4">
                <label className="block text-white">Organ</label>
                <select
                  name="organ"
                  className="w-full p-2 border rounded-md text-black"
                  value={newEvent.organ}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select an organ
                  </option>
                  {organOptions.map((organ) => (
                    <option key={organ} value={organ}>
                      {organ}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-white">Location</label>
                <select
                  name="location"
                  className="w-full p-2 border rounded-md text-black"
                  value={newEvent.location}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select a location
                  </option>
                  {locationOptions.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-white">Recipient</label>
                <input
                  type="text"
                  name="recipient"
                  className="w-full p-2 border rounded-md text-black"
                  value={newEvent.recipient}
                  onChange={handleInputChange}
                  required
                />
                {errors.recipient && <p className="text-red-500">{errors.recipient}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-white">Start Date & Time</label>
                <input
                  type="datetime-local"
                  name="start"
                  className="w-full p-2 border rounded-md text-black"
                  value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
                  onChange={handleInputChange}
                  required
                />
                {errors.start && <p className="text-red-500">{errors.start}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-white">End Date & Time</label>
                <input
                  type="datetime-local"
                  name="end"
                  className="w-full p-2 border rounded-md text-black"
                  value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
                  onChange={handleInputChange}
                  required
                />
                {errors.end && <p className="text-red-500">{errors.end}</p>}
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md">
                Add Event
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CalendarPage;


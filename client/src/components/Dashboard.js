// import React, { useState } from 'react';
// import Sidebar1 from './Sidebar1';
// import Sidebar2 from './Sidebar2';
// import './Dashboard.css'; // Include relevant styles for layout

// const Dashboard = ({ user }) => {
//     const [meetingCode, setMeetingCode] = useState(null);
//     const [participants, setParticipants] = useState([]);

//     const handleCreateClick = async () => {
//         try {
//             // Create a meeting and fetch the meeting code and link
//             const { meetingCode, meetingLink } = await createMeeting();
//             setMeetingCode(meetingCode);
            
//             // Fetch participants for the newly created meeting
//             const participantsList = await fetchParticipants(meetingCode);
//             setParticipants(participantsList);

//             // Redirect to the new Google Meet link
//             window.open(meetingLink, '_blank');
//         } catch (error) {
//             console.error('Error creating meeting:', error);
//         }
//     };

//     // Function to create a meeting using your backend API
//     const createMeeting = async () => {
//         const response = await fetch('/api/create-meeting', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         return {
//             meetingCode: data.meetingCode, // Assuming your API returns this
//             meetingLink: data.meetingLink,   // Assuming your API returns this
//         };
//     };

//     // Function to fetch participants from the REST API
//     const fetchParticipants = async (meetingCode) => {
//         const response = await fetch(`/api/participants?meetingCode=${meetingCode}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//             console.error('Error:', response.status, response.statusText);
//         }

//         const data = await response.json();
//         return data.participants; // Assuming your API returns a JSON object with a participants array
//     };

//     return (
//         <div className="dashboard-container">
//             <Sidebar1 onCreateClick={handleCreateClick} />
//             <Sidebar2 meetingCode={meetingCode} participants={participants} />
//         </div>
//     );
// };

// export default Dashboard;
import React, { useState } from 'react';
import Sidebar1 from './Sidebar1';
import Sidebar2 from './Sidebar2';
import './Dashboard.css'; // Include relevant styles for layout

const Dashboard = ({ user }) => {
    const [meetingCode, setMeetingCode] = useState(null);
    const [participants, setParticipants] = useState([]);

    const handleCreateClick = async () => {
        try {
            // Create a meeting and fetch the meeting code and link
            const { meetingCode, meetingLink } = await createMeeting();
            setMeetingCode(meetingCode);
            
            // Fetch participants for the newly created meeting
            const participantsList = await fetchParticipants(meetingCode);
            setParticipants(participantsList);

            // Redirect to the new Google Meet link
            window.open(meetingLink, '_blank');
        } catch (error) {
            console.error('Error creating meeting:', error);
        }
    };

    // Function to create a meeting using your backend API
    const createMeeting = async () => {
        const response = await fetch('http://localhost:5000/api/create-meeting', { // Updated URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return {
            meetingCode: data.meetingCode, // Assuming your API returns this
            meetingLink: data.meetingLink,   // Assuming your API returns this
        };
    };

    // Function to fetch participants from the REST API
    const fetchParticipants = async (meetingCode) => {
        const response = await fetch(`http://localhost:5000/api/participants?meetingCode=${meetingCode}`, { // Updated URL
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
            console.error('Error:', response.status, response.statusText);
        }

        const data = await response.json();
        return data.participants; // Assuming your API returns a JSON object with a participants array
    };

    return (
        <div className="dashboard-container">
            <Sidebar1 onCreateClick={handleCreateClick} />
            <Sidebar2 meetingCode={meetingCode} participants={participants} />
        </div>
    );
};

export default Dashboard;

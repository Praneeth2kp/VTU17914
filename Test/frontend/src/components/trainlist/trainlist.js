// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Trainlist() {
//   const [trains, setTrains] = useState([]);

//   useEffect(() => {
//     axios.get("/api/train-schedule")
//       .then((response) => {
//         setTrains(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Train Schedule for the Next 12 Hours</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Train Name</th>
//             <th>Train Number</th>
//             <th>Departure Time</th>
//             <th>Seats Available (Sleeper)</th>
//             <th>Seats Available (AC)</th>
//             <th>Price (Sleeper)</th>
//             <th>Price (AC)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {trains.map((train) => (
//             <tr key={train.trainNumber}>
//               <td>{train.trainName}</td>
//               <td>{train.trainNumber}</td>
//               <td>{train.departureTime}</td>
//               <td>{train.seatsAvailable.sleeper}</td>
//               <td>{train.seatsAvailable.AC}</td>
//               <td>{train.price.sleeper}</td>
//               <td>{train.price.AC}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Trainlist;

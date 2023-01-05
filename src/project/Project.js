import React from "react";
// import critter1 from "../project/critter1.png";
import critter1 from "../project/critter1.png";
import critter2 from "../project/critter2.png";
import slingAir1 from "../project/slingAir1.png";
import slingAir2 from "../project/slingAir2.png";

const Project = [
  {
    title: "Critter",
    subTitle: "a twitter clone application.",
    desc: "Using a mock user and a mock database to create a simplified twitter-clone application. The application consists of three main features: a navigation bar, a form and a feed of 'tweets'. (Each tweet contains its own unique author and content.) The navigation bar focuses mainly on the 'Profile' tab, and the 'Home' tab. The Profile tab navigates to the mock user's profile. However, if you wish to view another user's profile, you can do so by clicking on their name, username, or handle on one of their posts.",
    src: [critter1, critter2],
  },
  {
    title: "SlingAir",
    subTitle: "a ticket booking application.",
    desc: "Users can choose their flight using the dropdown menu located in the header of this application. Upon choosing a flight, the user can then select a seat and create a reservation. When submitting the reservation form, the form will post said reservation to the database we integrated into the application using MongoDb, and the user will be redirected to a confirmation page where they can see a receipt of their reservation.",
    src: [slingAir1, slingAir2],
  },
];

export default Project;

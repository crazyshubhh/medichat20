import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const AboutPage = () => {
  console.log("Rendering AboutPage component");

  const team = [
    {
      name: "Shubh",
      role: "Team Leader",
      description: "Shubh leads the team with vision, coordination, and technical guidance, ensuring all aspects of the project align perfectly.",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Alice",
      role: "Backend Developer",
      description: "Alice handles server-side logic, databases, and ensures a robust backend for the application.",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Bob",
      role: "Frontend Developer",
      description: "Bob designs and develops the user interface, ensuring an engaging and responsive experience.",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Eve",
      role: "QA Specialist",
      description: "Eve tests the application rigorously to ensure a bug-free and seamless experience for all users.",
      photo: "https://via.placeholder.com/150",
    },
  ];

  console.log("Team data:", team);

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => {
          console.log(`Rendering card for: ${member.name}`);
          return (
            <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center p-4">
                <Avatar src={member.photo} className="w-24 h-24 rounded-full mb-4" alt={member.name} />
                <CardTitle className="text-xl font-semibold text-gray-800">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 pb-4">
                <p className="text-sm text-gray-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;

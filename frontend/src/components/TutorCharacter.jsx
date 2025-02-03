import { useState } from "react";

export default function TutorCharacter() {
  const [selectedAvatar, setSelectedAvatar] = useState("robot");

  // List of avatars and their corresponding images
  const avatars = [
    { name: "Robot", img: "/robot.jpg" },
    { name: "Cat", img: "/cat.jpg" },
    { name: "Wizard", img: "/wizard.jpg" }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Avatar Display */}
      <div className="mb-4">
        <img
          src={`/${selectedAvatar}.jpg`} 
          alt={`${selectedAvatar} avatar`}
          className="w-24 h-24 rounded-full border-4 border-primary"
        />
      </div>

      {/* Avatar Selection */}
      <div className="flex space-x-4">
        {avatars.map((avatar, index) => (
          <button
            key={index}
            onClick={() => setSelectedAvatar(avatar.name.toLowerCase())} 
            className={`p-2 rounded-lg hover:bg-primary ${
              selectedAvatar === avatar.name.toLowerCase()
                ? "bg-primary text-white"
                : "bg-gray-200"
            }`}
          >
            {avatar.name}
          </button>
        ))}
      </div>

      {/* Display selected avatar's name */}
      <div className="mt-4 text-lg font-semibold">
        <p>Selected Tutor: {selectedAvatar.charAt(0).toUpperCase() + selectedAvatar.slice(1)}</p>
      </div>
    </div>
  );
}








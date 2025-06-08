import React from "react";
import {
  LayoutDashboard,
  GraduationCap,
  Gamepad2,
  BookOpenCheck,
  Languages,
  MapPin,
  Github
} from "lucide-react";

const ProfileSections = () => (
  <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 text-white max-w-md mx-auto">
    <div className="flex items-center space-x-3">
      <LayoutDashboard className="w-5 h-5 text-sky-400" />
      <span className="font-medium">Projects</span>
      <span className="text-gray-300">Web Dev, Unity Games</span>
    </div>
    <div className="flex items-center space-x-3">
      <GraduationCap className="w-5 h-5 text-purple-400" />
      <span className="font-medium">Education</span>
      <span className="text-gray-300">B.E. CSE, Stella Mary’s College</span>
    </div>
    <div className="flex items-center space-x-3">
      <Gamepad2 className="w-5 h-5 text-pink-400" />
      <span className="font-medium">Hobbies</span>
      <span className="text-gray-300">Retro Games, UI/UX</span>
    </div>
    <div className="flex items-center space-x-3">
      <BookOpenCheck className="w-5 h-5 text-green-400" />
      <span className="font-medium">Learning</span>
      <span className="text-gray-300">Unity, C#, Web Tech</span>
    </div>
    <div className="flex items-center space-x-3">
      <Languages className="w-5 h-5 text-yellow-400" />
      <span className="font-medium">Languages</span>
      <span className="text-gray-300">English, Malayalam</span>
    </div>
    <div className="flex items-center space-x-3">
      <MapPin className="w-5 h-5 text-red-400" />
      <span className="font-medium">Location</span>
      <span className="text-gray-300">Tamil Nadu, India</span>
    </div>
    <div className="flex items-center space-x-3">
      <Github className="w-5 h-5 text-gray-400" />
      <span className="font-medium">GitHub</span>
      <a href="https://github.com/aadz-msa" className="text-sky-300 hover:underline" target="_blank" rel="noopener noreferrer">aadz-msa</a>
    </div>
  </div>
);

export default ProfileSections;

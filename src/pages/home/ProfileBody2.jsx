import React from "react";
import { FaStar } from "react-icons/fa";
import { GiRamProfile } from "react-icons/gi";
import { GoChevronDown } from "react-icons/go";
import { MdMenuOpen } from "react-icons/md";
import { RiRadioButtonLine } from "react-icons/ri";

export default function ProfileBody2() {
  const projects = [
    {
      projectName: "Workcation",
      framework: "Laravel",
      lastDeploy: "3h ago",
      location: "United States",
      repoLink: "/debbielewis/workcation",
    },
    {
      projectName: "Tailwind CSS",
      framework: "Next.js",
      lastDeploy: "6h ago",
      location: "United States",
      repoLink: "/debbielewis/tailwindcss",
    },
    {
      projectName: "Kitetail",
      framework: "Laravel",
      lastDeploy: "4d ago",
      location: "United States",
      repoLink: "/debbielewis/kitetail",
    },
    {
      projectName: "Refactoring UI",
      framework: "Laravel",
      lastDeploy: "4d ago",
      location: "United States",
      repoLink: "/debbielewis/refactoringui",
    },
    {
      projectName: "Hero Patterns",
      framework: "Next.js",
      lastDeploy: "6d ago",
      location: "United States",
      repoLink: "/debbielewis/heropatterns",
    },
  ];

  return (
    <div className="px-4 max-md:px-0 border-gray-300">
      <div className="flex justify-between p-3 border-x border-b border-gray-300 max-md:border-x-0">
        <p className="font-semibold">Projects</p>
        <div>
          <button className="inline-flex items-center py-2 px-4 gap-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100">
            <MdMenuOpen className="h-6 w-6 text-gray-400" />
            Sort
            <GoChevronDown className="text-gray-400" />
          </button>
        </div>
      </div>
      {projects.map((project, i) => (
        <Profile
          key={i}
          projectName={project.projectName}
          framework={project.framework}
          lastDeploy={project.lastDeploy}
          location={project.location}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
}

function Profile({ projectName, framework, lastDeploy, location, repoLink }) {
  return (
    <div className="border-t border-gray-300 border-x max-md:border-x-0">
      <div className="flex flex-col md:flex-row justify-between p-3 gap-3 md:gap-0">
        {/* Left Section */}
        <div className="space-y-2 flex-2">
          <h2 className="flex  items-center gap-2 font-semibold">
            <RiRadioButtonLine className="text-green-500" /> {projectName}
          </h2>
          <a
            className="text-gray-400 flex items-center gap-1 hover:text-cyan-500"
            href={repoLink}
          >
            <GiRamProfile /> {repoLink}
          </a>
        </div>

        {/* Right Section */}
        <div className="space-y-2 flex-1">
          <a
            className="text-gray-400 flex gap-2 items-center hover:text-cyan-500"
            href="siteLink"
          >
            Visit site <FaStar className="text-yellow-400" />
          </a>
          <div className="text-gray-400">
            <p>
              {framework} . Last deploy . {lastDeploy} . {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

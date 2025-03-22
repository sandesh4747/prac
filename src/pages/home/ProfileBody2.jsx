import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
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
    <div className="px-8 border-gray-300">
      <div className="flex justify-between p-3  border-x border-b border-gray-300">
        <p className="font-semibold">Projects</p>
        <div>
          <a className=" inline-flex items-center py-2 px-4 gap-2 border border-gray-300 rounded-[4px]  cursor-pointer">
            <MdMenuOpen className="h-[24px] w-[24px] text-gray-400 hover:bg-gray-100" />
            Sort
            <GoChevronDown className="text-gray-400" />
          </a>
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
          siteLink={project.siteLink}
        />
      ))}
    </div>
  );
}

function Profile({ projectName, framework, lastDeploy, location, repoLink }) {
  return (
    <div className="border-t border-gray-300 border-x  ">
      <div className="flex justify-between p-3">
        <div className="space-y-2  font-semibold">
          <h2 className="flex items-center gap-2">
            <RiRadioButtonLine className="text-green-500" /> {projectName}
          </h2>
          <a
            className="text-gray-400 flex items-center gap-1 hover:text-cyan-500"
            href={repoLink}
          >
            <GiRamProfile /> {repoLink}
          </a>
        </div>
        <div className="space-y-2">
          <a
            className="text-gray-400 flex gap-2  items-center  hover:text-cyan-500"
            href="siteLink "
          >
            Visit site <FaStar className="text-yellow-400" />
          </a>
          <div className="flex text-gray-400 items-center ">
            <p>{framework} </p>
            <p>
              . Last deploy . {lastDeploy} . {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

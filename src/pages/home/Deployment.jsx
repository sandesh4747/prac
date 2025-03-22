import React from "react";
import { FaLock } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import { GrShieldSecurity } from "react-icons/gr";
import { IoPush, IoSettingsOutline } from "react-icons/io5";

export default function Deployment() {
  const deployments = [
    {
      img: <IoPush className="text-xl text-white " />,
      name: "Push to Deploy",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, soluta!",
    },
    {
      img: <FaLock className="text-xl text-white " />,
      name: "SSL Certificates",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, soluta!",
    },
    {
      img: <FiRefreshCcw className="text-xl text-white " />,
      name: "Simple Queues",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, soluta!",
    },
    {
      img: <GrShieldSecurity className="text-xl text-white " />,
      name: "Advanced Security",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, soluta!",
    },
    {
      img: <IoSettingsOutline className="text-xl text-white " />,
      name: "Powerful API",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, soluta!",
    },
    {
      img: <GoDatabase className="text-xl text-white " />,
      name: "Database Backups",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, soluta!",
    },
  ];
  return (
    <div className="pt-[50px]">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-2">
        <p className="text-cyan-600">DEPLOY FASTER</p>
        <h1 className="text-3xl font-bold">
          Everything you need to deploy your app
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          omnis recusandae natus corporis facere odit dignissimos quos
          perspiciatis cum saepe!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 p-7 ">
        {deployments.map((deployment, i) => (
          <DeploymentList
            key={i}
            img={deployment.img}
            name={deployment.name}
            text={deployment.text}
          />
        ))}
      </div>
    </div>
  );
}

function DeploymentList({ img, name, text }) {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center p-7  bg-gray-50 text-center gap-5">
        <div className=" bg-gradient-to-r from-cyan-400 to-cyan-600  flex items-center justify-center p-3 rounded-[6px]">
          {img}
        </div>
        <h3 className=" ">{name}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}

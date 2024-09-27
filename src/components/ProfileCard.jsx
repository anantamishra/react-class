import React from "react";

export function ProfileCard({ imageUrl, name, description }) {
  return (
    <div className="shadow-lg flex flex-col border-2 border-gray-200 w-1/2 p-6 rounded-xl gap-4 bg-gray-600">
      <p className="text-2xl font-bold text-white">{name}</p>
      <div className="flex justify-between items-center gap-10">
        <img
          src={imageUrl}
          alt={name}
          className="h-28 w-28 border-2 rounded-full bg-white p-2"
        />
        <p className="text-white text-lg text-justify">{description}</p>
      </div>
    </div>
  );
}

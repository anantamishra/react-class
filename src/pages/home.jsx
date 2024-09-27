import React from "react";
import { ProfileCard } from "../components";

export function Home() {
  const datas = [
    {
      name: "Ram Sharma",
      imageUrl: "/logo192.png",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
    {
      name: "Shyam Sharma",
      imageUrl: "/logo192.png",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
    {
      name: "Geeta Sharma",
      imageUrl: "/logo192.png",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
    {
      name: "Sita Sharma",
      imageUrl: "/logo192.png",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
    {
      name: "Dinesh Sharma",
      imageUrl: "/logo192.png",
      description: `Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et dolor. Lorem ipsum dolor sit am et dolor et`,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-5">
      {datas.map((data, index) => {
        return (
          <ProfileCard
            key={index}
            name={data.name}
            imageUrl={data.imageUrl}
            description={data.description}
          />
        );
      })}
    </div>
  );
}

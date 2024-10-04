import React from "react";
import { Button, ProfileCard } from "../components";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex gap-5">
      <Button text="Hello Wordl" link="https://intelzy.co" css="bg-blue-500" />
      <Button text="Hello " link="https://intelzy.co" css="bg-red-500" />
      <Button text="Hi" link="https://intelzy.co" css="bg-green-500" />
      <Button text="Hello Wordl" link="https://intelzy.co" />
      <Button text="Hello Wordl" link="https://intelzy.co" />
    </div>
  );
}

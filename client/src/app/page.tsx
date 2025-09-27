"use client";

import { FormEvent, useState } from "react";
import { API_URL } from "@/utils/constants";

export default function Home() {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/hello`);
    const data = await response.text();
    console.log(data);
    setData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="api" className="flex flex-col gap-2">
          Api
          <input
            type="text"
            id="api"
            className="border-2 border-gray-300 rounded-md p-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2"
          >
            Submit
          </button>
        </label>
      </form>
      <p>{data}</p>
    </>
  );
}

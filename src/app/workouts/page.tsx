import React from "react";
import Image from "next/image";
import Link from "next/link";
import AllCard from "./AllCard";
import { Icard } from "../type/cardtype";

const Cardfetching = async (): Promise<Icard[]> => {
  const data = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!data.ok) {
    throw new Error("Failed to fetch workout data");
  }
  const response: Icard[] = await data.json();
  return response;
};

const Workoutpage = async () => {
  const carddata = await Cardfetching();
  return (
    <section className="bg-[#0b0c0e] px-4 py-5 sm:px-6 lg:px-8 container">
      {/* Banner  */}
      <div
        className="
          mx-auto
          flex
          container
          flex-col
          items-center
          overflow-hidden
          rounded-xl
          border
          border-[#24262c]
          bg-[#15171c]
          px-6
          py-10
          sm:px-10
          md:flex-row
          md:justify-between
          md:px-12
          lg:min-h-77.5
          lg:px-10
        "
      >
        {/* ================= LEFT SIDE ================= */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            md:w-[55%]
            lg:w-[55%]
          "
        >
          {/* Small Heading */}
          <h5
            className="
              mb-3
              text-[10px]
              font-bold
              uppercase
              tracking-wide
              text-[#b6ff00]
              sm:text-xs
            "
          >
            Workout Library
          </h5>

          {/* Main Heading */}
          <h1
            className="
              max-w-2xl
              text-4xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-4xl
              lg:text-5xl
              
            "
          >
            Train With Intent. Log Every Set.
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-md
              text-sm
              leading-6
              text-gray-400
              sm:text-base
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="
              mt-5
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#b6ff00]
              px-5
              py-2.5
              text-xs
              font-bold
              uppercase
              text-black
              transition
              hover:bg-[#c8ff33]
              hover:shadow-[0_0_20px_rgba(182,255,0,0.2)]
              sm:px-6
              sm:py-3
            "
          >
            Browse Workouts
          </Link>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            relative
            mt-8
            flex
            w-full
            justify-center
            md:mt-0
            md:w-[45%]
            md:justify-end
          "
        >
          <Image
            src="/banner.png"
            alt="Workout illustration"
            width={400}
            height={400}
            priority
            className="
              h-auto
              w-55
              object-contain
              sm:w-65
              md:w-70
              lg:w-82.5
              xl:w-95
            "
          />
        </div>
      </div>
      <div className="bg-[#0b0e14] min-h-screen py-10 px-4">
        {/* Title & Subtitle */}
        <div className="container mx-auto mb-8">
          <h2 className="uppercase text-white text-2xl font-black tracking-wider">
            The library
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Card Section Grid */}
        <div className="mx-auto grid w-full grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {carddata.map((card) => (
            <AllCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workoutpage;

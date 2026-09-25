import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icard } from "../type/cardtype";
import Card from "./card";

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
    <section className="px-4 py-5 sm:px-6 lg:px-8 ">
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
          lg:min-h-150
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
              text-[11px]
              font-bold
              uppercase
              tracking-wide
              text-[#b6ff00]
              sm:text-xs
              font-inter
            "
          >
            Workout Library
          </h5>

          {/* Main Heading */}
          <h1
            className="
              max-w-md
              text-[60px]
              uppercase
              leading-15
              tracking-tight
              font-bold
              text-white
              sm:text-5xl
              font-oswald
            "
          >
            Train With Intent. Log Every Set.
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              font-inter
              max-w-[490px]
              text-[16px]
              leading-6
              text-gray-400
              sm:text-base
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button with anchor link (No Icon) */}
          <Link
            href="#library"
            className="
              mt-5
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#b6ff00]
              px-5
              py-2.5
              text-[12px]
              font-bold
              font-inter
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
            width={334}
            height={334}
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
      {/* library section */}
      <div className="min-h-screen py-10 px-4">
        {/* Title & Subtitle */}
        <div className="container mb-8 mx-auto">
          <h2 className="uppercase text-white text-[30px] font-bold font-oswald tracking-wider">
            The library
          </h2>
          <p className="text-gray-400 text-[14px] font-inter mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Card Section Grid */}
        <div
          id="library"
          className="scroll-mt-25 mx-auto container grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {carddata.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workoutpage;

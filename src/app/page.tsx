import Anchor from "./components/anchor";
import Callout from "./components/callout";
import Section from "./components/section";
import Image from "next/image";
import barbutehero from "../public/barbute-hero.jpg"
import HistoryTable from "./components/history-table";

export default function Home() {
  return (
    <>
      {/* Spacer */}
      <div className="h-20"></div>

      {/* Main */}
      <article className="flex flex-col justify-center max-w-lg mx-auto">
        <div className="mb-3">
          <Image
            src={barbutehero}
            alt="Image of a building in rome."
            // NOTE Use this to size the image, then apply tailwind
            sizes="(max-width: 4032px) 100vw, (max-height: 3024px) 100vh"
            // You can only round the borders of the image with this
            className="rounded-lg"
          />
        </div>
        <Callout 
          icon="👋"
          text={[
            <p>Hello, I'm a high school senior passionate about computer science!</p>,
          ]}
        />
        <h1 className="self-start mt-4">Jack</h1>
        <Section 
          title={"Education"} 
          content={[
            <div className="flex flex-col justify-center">
              {/* Entry */}
              <div className="flex items-center mb-3">
                <p className="mr-3 font-bold bg-transparent px-2 py-1 rounded-lg">
                  2021 - 2023
                </p>
                <div className="flex flex-col justify-center">
                  <p className="underline underline-offset-2">Prosper High School</p>
                  <ul className="">
                    <li>- Computer Science I</li>
                    <li>- AP Computer Science A</li>
                  </ul>
                </div>
              </div>
              {/* Entry */}
              <div className="flex items-center mb-3">
                <p className="mr-3 font-bold bg-transparent px-2 py-1 rounded-lg">
                  2023 - Pres
                </p>
                <div className="flex flex-col justify-center">
                  <p className="underline underline-offset-2">Walnut Grove High School</p>
                  <ul className="">
                    <li>- Computer Science III</li>
                  </ul>
                </div>
              </div>
            </div>,
          ]}
        />
        <Section 
          title={"Work"} 
          content={[
            <p className="font-bold text-lg">High School Robotics</p>,
            <p>On the <Anchor link="https://www.prosperengineeringteam.com" content="Prosper Engineering Team"/> I programmed control systems for robots designed to compete in the <Anchor link="https://www.firstinspires.org/robotics/frc" content="First Robotics Competition (FRC)"/>. The robot programs were written in Java.</p>,
            <div className="flex flex-col justify-center">
              {/* Entry */}
              <div className="flex items-center mb-3">
                <p className="mr-3 font-bold bg-transparent px-2 py-1 rounded-lg">
                  2023
                </p>
                <div className="flex flex-col justify-center">
                  <p className="underline underline-offset-2">
                    FRC Team 9105
                  </p>
                  <ul className="">
                    <li>- Rookie year</li>
                    <li>- Programmed control system for a four DC Brushless motor tank drive</li>
                    <li>- Designed consistent autonomous routines for scoring game peices without operator input</li>
                  </ul>
                </div>
              </div>
              {/* Entry */}
              <div className="flex items-center mb-3">
                <p className="mr-3 font-bold bg-transparent px-2 py-1 rounded-lg">
                  2024
                </p>
                <div className="flex flex-col justify-center">
                  <p className="underline underline-offset-2">
                    FRC Team 9105
                  </p>
                  <ul className="">
                    <li>- Migrated programming team to using an advanced data-logging framework</li>
                    <li>- Created interfaces to interact with the robot's hardware</li>
                  </ul>
                  <p className="underline underline-offset-2">
                    FRC Team 5411
                  </p>
                  <ul className="">
                    <li>- Created software cirriculum for teaching new students about controlling a robot arm</li>
                  </ul>
                </div>
              </div>
            </div>,            
          ]}
        />
        <HistoryTable title="" rows={[]}/>
      </article>
    </>
  );
}

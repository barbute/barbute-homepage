import Navbar from "./components/navbar";
import Section from "./components/section";

export default function Home() {
  return (
    <>
      <article className="">
        <Section 
          title={"Test"} 
          text={["Loren ipsum dolor sit amet","Test"]}
        />
      </article>
    </>
  );
}

import Anchor from "./components/anchor";
import Callout from "./components/callout";
import Section from "./components/section";
import Image from "next/image";
import barbutehero from "../public/barbute-hero.jpg"

export default function Home() {
  return (
    <>
      {/* Spacer */}
      <div className="h-20"></div>

      {/* Main */}
      <article className="flex flex-col justify-center items-center max-w-lg mx-auto">
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
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia accumsan dictumst pellentesque vestibulum risus.</p>,
          ]}
        />
        <Section 
          title={"About"} 
          content={[
            <p>Lorem ipsum odor amet, <Anchor link="https://www.google.com" text="consectetuer"/> adipiscing elit. Cubilia accumsan dictumst pellentesque vestibulum risus. Mus congue phasellus dolor lacus fusce mi sollicitudin. Conubia est lacinia nec integer suscipit tincidunt. Interdum tempus nisi class ut netus turpis ex. Phasellus purus sodales nulla iaculis rhoncus fusce. Convallis curabitur nisi porta velit iaculis himenaeos nisi pretium proin. Mus class fames molestie sem habitant.</p>,
            <p>Quis porttitor montes scelerisque, molestie per condimentum! Molestie non orci pretium rhoncus iaculis habitasse sagittis augue. Curabitur arcu rutrum ridiculus sagittis quam ridiculus quis efficitur. Mi elementum dignissim etiam egestas aliquet mi! Magna erat tristique massa commodo auctor. Himenaeos suscipit nec torquent tortor, elit ultricies eros purus. Quisque hac sollicitudin blandit habitant vel egestas dictumst amet. Praesent pulvinar auctor; feugiat sapien cubilia dictum pulvinar. Habitant potenti velit suspendisse conubia cursus porta maecenas.</p>,
          ]}
        />
        <Section 
          title={"Work"} 
          content={[
            <p>Litora etiam blandit scelerisque dictum himenaeos leo bibendum dapibus facilisis. Duis ligula parturient eros turpis mus viverra suscipit est. Pretium donec hendrerit posuere sollicitudin magna urna scelerisque. Molestie felis id; cras ligula auctor natoque eget praesent? Convallis consectetur faucibus montes nec sem cras amet convallis hendrerit. Netus lobortis nascetur sit parturient habitasse. Montes natoque at sem vulputate in himenaeos iaculis.</p>,
          ]}
        />
        <Section 
          title={"More"} 
          content={[
            <p>Lorem ipsum odor amet, <Anchor link="https://www.google.com" text="consectetuer"/> adipiscing elit. Cubilia accumsan dictumst pellentesque vestibulum risus. Mus congue phasellus dolor lacus fusce mi sollicitudin. Conubia est lacinia nec integer suscipit tincidunt. Interdum tempus nisi class ut netus turpis ex. Phasellus purus sodales nulla iaculis rhoncus fusce. Convallis curabitur nisi porta velit iaculis himenaeos nisi pretium proin. Mus class fames molestie sem habitant.</p>,
            <p>Quis porttitor montes scelerisque, molestie per condimentum! Molestie non orci pretium rhoncus iaculis habitasse sagittis augue. Curabitur arcu rutrum ridiculus sagittis quam ridiculus quis efficitur. Mi elementum dignissim etiam egestas aliquet mi! Magna erat tristique massa commodo auctor. Himenaeos suscipit nec torquent tortor, elit ultricies eros purus. Quisque hac sollicitudin blandit habitant vel egestas dictumst amet. Praesent pulvinar auctor; feugiat sapien cubilia dictum pulvinar. Habitant potenti velit suspendisse conubia cursus porta maecenas.</p>,
          ]}
        />
      </article>
    </>
  );
}

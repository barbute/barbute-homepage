import Navbar from "./components/navbar";
import Section from "./components/section";

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* Spacer */}
      <div className="h-16"></div>
      {/* mx-auto - margin auto */}
      <article className="flex flex-col justify-center items-center max-w-3xl mx-auto">
        <Section 
          title={"About"} 
          text={[
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia accumsan dictumst pellentesque vestibulum risus. Mus congue phasellus dolor lacus fusce mi sollicitudin. Conubia est lacinia nec integer suscipit tincidunt. Interdum tempus nisi class ut netus turpis ex. Phasellus purus sodales nulla iaculis rhoncus fusce. Convallis curabitur nisi porta velit iaculis himenaeos nisi pretium proin. Mus class fames molestie sem habitant.",
            "Quis porttitor montes scelerisque, molestie per condimentum! Molestie non orci pretium rhoncus iaculis habitasse sagittis augue. Curabitur arcu rutrum ridiculus sagittis quam ridiculus quis efficitur. Mi elementum dignissim etiam egestas aliquet mi! Magna erat tristique massa commodo auctor. Himenaeos suscipit nec torquent tortor, elit ultricies eros purus. Quisque hac sollicitudin blandit habitant vel egestas dictumst amet. Praesent pulvinar auctor; feugiat sapien cubilia dictum pulvinar. Habitant potenti velit suspendisse conubia cursus porta maecenas.",
          ]}
        />
        <Section 
          title={"Work"} 
          text={[
            "Litora etiam blandit scelerisque dictum himenaeos leo bibendum dapibus facilisis. Duis ligula parturient eros turpis mus viverra suscipit est. Pretium donec hendrerit posuere sollicitudin magna urna scelerisque. Molestie felis id; cras ligula auctor natoque eget praesent? Convallis consectetur faucibus montes nec sem cras amet convallis hendrerit. Netus lobortis nascetur sit parturient habitasse. Montes natoque at sem vulputate in himenaeos iaculis.",
          ]}
        />
        <Section 
          title={"More"} 
          text={[
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia accumsan dictumst pellentesque vestibulum risus. Mus congue phasellus dolor lacus fusce mi sollicitudin. Conubia est lacinia nec integer suscipit tincidunt. Interdum tempus nisi class ut netus turpis ex. Phasellus purus sodales nulla iaculis rhoncus fusce. Convallis curabitur nisi porta velit iaculis himenaeos nisi pretium proin. Mus class fames molestie sem habitant.",
            "Quis porttitor montes scelerisque, molestie per condimentum! Molestie non orci pretium rhoncus iaculis habitasse sagittis augue. Curabitur arcu rutrum ridiculus sagittis quam ridiculus quis efficitur. Mi elementum dignissim etiam egestas aliquet mi! Magna erat tristique massa commodo auctor. Himenaeos suscipit nec torquent tortor, elit ultricies eros purus. Quisque hac sollicitudin blandit habitant vel egestas dictumst amet. Praesent pulvinar auctor; feugiat sapien cubilia dictum pulvinar. Habitant potenti velit suspendisse conubia cursus porta maecenas.",
          ]}
        />
      </article>
    </>
  );
}

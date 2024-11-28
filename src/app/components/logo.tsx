import Image from "next/image";
import barbuteLogo from "../../public/barbute-logo.png"

const imageStyle = {
  borderRadius: "0.5rem",
}

export default function Logo() {
  return (
    <div className="flex flex-row items-center leading-none text-foreground">
      <Image
        src={barbuteLogo}
        width={189.75}
        height={47.25}
        style={imageStyle}
        alt="barbute"
      />
    </div>
  )
}
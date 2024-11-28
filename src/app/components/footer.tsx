import Anchor from "./anchor";

const Footer = () => {
  return (
    <div className="flex justify-center mt-4 mb-8 text-sm opacity-80">
      <div className="flex flex-col justify-center items-center">
        <p>© 2024 barbute. All Rights Reserved.</p>
        <p>
          Website built based on <Anchor link="https://www.craftz.dog/" text="Takuya Matsuyama's website"/>.
        </p>
      </div>
    </div>
  )
};

export default Footer;
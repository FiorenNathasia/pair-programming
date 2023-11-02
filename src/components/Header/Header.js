import "./Header.scss";
import Logo from "../../assets/image/logo.PNG";

export default function Header() {
  return (
    <>
      <div className="header__wrapper">
        <img className="header__logo" src={Logo} alt="Logo" />
        <div className="header__slogan">Discover more of London with us</div>
      </div>
    </>
  );
}

import { Contact } from "./Contact";
import { Logo } from "./Logo";

function Header() {
  return (
    <header className="header">
      <Logo></Logo>
      <h1>Тор Одинсон</h1>
      <p>
        Супергерой
        <br />
        Неполная занятость
        <br />
        Возраст: 1500 лет
        <br />
        Место проживания: Новый Асгард
        <hr />
      </p>
      <Contact></Contact>
    </header>
  );
}

export default Header;

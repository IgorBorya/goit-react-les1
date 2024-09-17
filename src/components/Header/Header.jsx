import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.list}>
      <div>Logo</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
      <hr />
    </header>
  );
};

export default Header;

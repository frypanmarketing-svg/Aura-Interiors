const Header = () => (
  <>
    <header className="box-border w-full px-12 py-2 flex flex-row h-16 justify-between items-center bg-white/30 font-sans font-semibold backdrop-blur-[1px] absolute z-10">
      <span>Aura</span>

      <nav>
        <ul className="flex items-center justify-center gap-x-4">
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;

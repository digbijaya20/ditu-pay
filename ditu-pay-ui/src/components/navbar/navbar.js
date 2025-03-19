import './navbar.css';

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex">
        <li>
          <a className="text-white brand-name" href="/">Ditu Pay</a>
        </li>
        <li className="ml-auto">
         <span className="text-white">Hello, Ditu</span>
        </li>
      </ul>
    </nav>
  );
}
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const NavBar = () => {

  const handleReload = () => {
    window.location.reload();
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <button onClick={handleReload} className="text-2xl" >{`{Ds}`}</button>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/drew-schmidt-0b992127a/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/drewschmidt145" target="_blank"><FaGithub /></a>
      </div>
    </nav>
  )
}

export default NavBar

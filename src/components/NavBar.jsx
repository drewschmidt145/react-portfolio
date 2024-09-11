import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {

  const handleReload = () => {
    window.location.reload();
  }

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1Ue_AXdRS_skpgSbH9AMlSiYyuhWEUZog/view?usp=drive_link";
    window.open(resumeUrl, "_blank");
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <button onClick={handleReload} className="text-2xl" >{`{Ds}`}</button>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/drew-schmidt-0b992127a/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/drewschmidt145" target="_blank"><FaGithub /></a>
        <button onClick={handleDownloadResume} className="border px-4 py-2 text-sm">Resume</button>
      </div>
    </nav>
  )
}

export default NavBar

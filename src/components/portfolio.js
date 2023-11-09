import"./style.css";
import { useRef } from "react";


const Home = () => {
  const navBar = useRef(null);

  // Sticky navigation bar code

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navBar.current.classList.add("sticky");
    } else {
      navBar.current.classList.remove("sticky");
    }
  });



  return (
    <div className="App">
      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(home)} class="link">Home</li>
          <li onClick={() => scrollToSection(about)} class="link">About me</li>
          <li onClick={() => scrollToSection(skills)} class="link">Skills</li>
          <li onClick={() => scrollToSection(projects)} class="link">Projects</li>
          <li onClick={() => scrollToSection(contact)} class="link">Contact details</li>
        </ul>
      </div>

      <div ref={navBar} className="sticky">
        <h3 className="heading">My Portfolio</h3>
      </div>

      <div className="home">
        <h3 className="heading">Home</h3>

        <table>
          <tr>
            <td><h3 class="i1">Hi</h3></td>
            <td><h3 class="i1">I am Kusumita</h3></td>
            <td><h3 class="i1">Welcome to my portfolio</h3></td>
          </tr>
        </table>
      </div>

    </div>
  );
};

export default Home;

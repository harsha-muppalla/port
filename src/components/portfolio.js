import"./style.css";
import { useRef } from "react";
import lightbox from "lightbox-react";

const Home = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const navBar = useRef(null);

  // Sticky navigation bar code

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navBar.current.classList.add("sticky");
    } else {
      navBar.current.classList.remove("sticky");
    }
  });

  // Lightbox code

  const openLightbox = (image) => {
    setIsLightboxOpen(true);
    lightbox.open(image);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    lightbox.close();
  };

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

      <lightbox isOpen={isLightboxOpen} onClose={closeLightbox}>
        <img src={image} />
      </lightbox>
    </div>
  );
};

export default Home;

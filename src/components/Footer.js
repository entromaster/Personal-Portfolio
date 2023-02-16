import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={0} className="text-center text-sm">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sumansaurav0243/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://twitter.com/Im_SumanSaurav">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/entromaster">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

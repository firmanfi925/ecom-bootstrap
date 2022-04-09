import { NavDropdown } from "react-bootstrap";

function MainMenu(props) {
    return (
        
        <NavDropdown title={props.title} id="navbarScrollingDropdown">
        <NavDropdown.Item href="#">{props.subtitle}</NavDropdown.Item>
        {/* <NavDropdown.Item href="#">Bakery 2</NavDropdown.Item> */}
    </NavDropdown>
    
    )
}

export default MainMenu;
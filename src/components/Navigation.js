import { Button, Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import logo from '../assets/coffee.svg';

export default function Navigation(params) {
    return(

        <Container fluid className="bg-[#92a5bf] py-2 shadow-2xl sticky-top">
            <Navbar expand='sm'>
                <NavbarBrand className="text-[#eae5e5] font-serif font-extrabold text-3xl mx-8 flex">
                    <img src={logo} alt="" className="my-auto" />
                    {/* Add your name as the logo cus it is your portfolio */}
                    {/* <img width="64" height="64" src="https://img.icons8.com/laces/64/espresso-cup.png" alt="espresso-cup"/> */}
                    <span className="my-auto mx-2">
                    Niharika Patil 
                    </span>
                </NavbarBrand>  
                <NavbarToggle className="bg-white">
                    
                </NavbarToggle>  
                <NavbarCollapse className="flex justify-end">
                    <Nav>
                        <NavLink className="text-[#eae5e5] mx-2 font-serif text-xl font-semibold">
                            About Me
                        </NavLink>
                        <NavLink className="text-[#eae5e5] mx-2 font-serif text-xl font-semibold">
                            Resume
                        </NavLink>
                        <Button className="mx-2 text-[#eae5e5] font-serif text-xl px-4 bg-[#986d79] border-0 hover:bg-[#9c3552] rounded-3xl">
                            Contact Me!
                        </Button>
                    </Nav>
                </NavbarCollapse>
            </Navbar>      
        </Container>

    );
}
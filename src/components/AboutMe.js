import { Col, Container, Row } from "react-bootstrap";
import Education from "./Education";
import edu from "../assets/education1.svg";
import skills from "../assets/skills.svg";
import projects from "../assets/projects.svg";
import blogs from "../assets/blog1.svg"
import { useState } from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Blogs from "./Blogs";

export default function AboutMe(params) {

    const [show, setShow] = useState(0);

    // const [color, setColor] = useState('#302c2d');
    // const handleClick = () =>{
    //     setColor('#4f5757');
    // }
    
    const Display = () => {
            if(show===1){
                return(<Education />)
            }
            else if(show===2){
                return(<Skills />)
            }
            else if(show===3){
                return(<Blogs />)
            }
            else{
                return(<Projects />)
            }
        };

    return(
        <Container fluid className="h-screen w-full bg-[#eae5e5] g-0 text-white">
           <Row className="g-0">
            <Col className="px-12 w-full h-screen flex flex-wrap items-center justify-center">
                <Container fluid className="text-[#986d79] text-center">
                    <Row className="mb-24">
                        <Col>
                            <button onClick={() => setShow(1) }>
                                <img className="h-32 mb-3" src={edu} alt=""/>
                                <p className="font-bold text-2xl">
                                    EDUCATION
                                </p>
                            </button>
                        </Col>
                        <Col>
                            <button onClick={() => setShow(2) }>
                                <img className="h-32 mb-3" src={skills} alt="" />
                                <p className="font-bold text-2xl">
                                    SKILLS
                                </p>                               
                            </button>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <button onClick={() => setShow(3) }>  
                                <img className="h-32 mb-3" src={blogs} alt="" />
                                <p className="font-bold text-2xl">
                                    BLOGS
                                </p>
                            </button>
                        </Col>
                        <Col>
                            <button onClick={() => setShow(4) }>
                                <img className="h-32 mb-3" src={projects} alt="" />
                                <p className="font-bold text-2xl">
                                    PROJECTS
                                </p>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col className="bg-[#302c2d] px-12 w-full h-screen flex flex-wrap items-center justify-center">
                <Display />
            </Col>
           </Row>
        </Container>
    );
}
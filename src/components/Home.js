import { Container } from "react-bootstrap";
import pic1 from "../assets/my4.png";
import git from "../assets/github.svg";
import medium from "../assets/medium.svg"
import linkedin from "../assets/linkedin.svg"

export default function Home(params) {
    return(
        <>
            <Container fluid className="realtive flex h-full g-0">
                <div className="absolute h-4/6 bg-[#92a5bf] g-0 w-full">
                <img src={pic1} alt="" className="h-full absolute mt-24 mx-40" />
                <div className="absolute bg-[#92a5bf] px-16 py-8 border-1" style={{ top: '52%', left: '55%' }}>
                    <p className="text-[#eae5e5] flex font-serif text-2xl">
                        <img src={git} alt="" />
                        <a href="https://github.com/patilniharika" className="ml-4">/patilniharika</a>
                    </p>
                    <p className="text-[#eae5e5] flex font-serif text-2xl my-3">
                        <img src={medium} alt="" />
                        <a href="https://medium.com/@patilniharika2306" className="ml-4">@patilniharika2306</a>
                    </p>
                    <p className="text-[#eae5e5] flex font-serif text-2xl">
                        <img src={linkedin} alt="" />
                        <a href="https://www.linkedin.com/in/niharika-patil-211a84226/" className="ml-4">/niharika-patil</a>
                    </p>
                </div>
                <div className="text-transparent font-serif font-bold text-9xl mt-36 ml-56" 
                    style={{WebkitTextStrokeColor:'#986d79', WebkitTextStrokeWidth: '2px'}}>
                PORTFOLIO
                </div>
                <div className="text-transparent font-serif font-bold text-9xl ml-56" 
                    style={{WebkitTextStrokeColor:'#986d79', WebkitTextStrokeWidth: '2px'}}>
                PORTFOLIO
                </div>
                <div className="text-transparent font-serif font-bold text-9xl ml-56" 
                    style={{WebkitTextStrokeColor:'#986d79', WebkitTextStrokeWidth: '2px'}}>
                PORTFOLIO
                </div>
                </div>
                <div className="absolute text-[#eae5e5] font-serif font-bold text-9xl mt-4 ml-56">
                PORTFOLIO
                </div>
            </Container>
            <div className="relative mt-96 pt-24 pb-4 mx-8 font-serif text-xs text-[#eae5e5] mb-12 g-0">
                I love design and anything related to art. <br />
                I approach problems in a rational and pragmatic way <br />
                and seek the simplest and most functional solutions possible.
            </div>
            
        </>

    );
}
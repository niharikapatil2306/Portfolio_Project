import { Col, Row } from "react-bootstrap";

export default function Skills(params) {

    return (
        <div className="font-serif text-[#eae5e5] border-1 border-white w-full p-8 animate-in zoom-in-75 duration-500 ease-in">
            <div className="text-7xl flex justify-center mx-auto font-bold text-[#986d79] pb-2 border-b-2 border-white">
                TECHNICAL SKILLS
            </div>
            <div className="mt-8">
                <p className="text-3xl font-semibold mb-4">
                    Basic knowledge of:
                </p>
                <Row className="my-2 text-md font-semibold">
                    <Col>
                        -{'>'} Html
                    </Col>
                    <Col>
                        -{'>'} CSS
                    </Col>

                </Row>
                <Row className="my-2 text-md font-semibold">
                    <Col>
                        -{'>'} JavaScript
                    </Col>
                    <Col>
                        -{'>'} Python
                    </Col>
                </Row>
                <Row className="my-2 text-md font-semibold">
                    <Col>
                        -{'>'} TailwindCSS
                    </Col>
                </Row>
            </div>
            <Row className="mt-8">
                <Col className="text-center text-xl font-bold text-[#302c2d] bg-[#92a5bf] rounded-full py-1">
                    Django
                </Col>
                <Col className="text-center text-xl font-bold text-[#302c2d] bg-[#92a5bf] rounded-full py-1 mx-4">
                    ReactJs
                </Col>
                <Col className="text-center text-xl font-bold text-[#302c2d] bg-[#92a5bf] rounded-full py-1">
                    Bootstrap
                </Col>
            </Row>
        </div>
    );

}
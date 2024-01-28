import { Col, Row } from "react-bootstrap";
import edu from "../assets/education.svg"

export default function Education(params) {

    return(
        <div className="font-serif border-1 border-white w-full p-8 animate-in zoom-in-75 duration-500 ease-in">
            <div className="text-7xl flex justify-center mx-auto font-bold text-[#986d79] pb-2 border-b-2 border-white">
                EDUCATION
            </div>
            <div className="mt-12">
                <Row className="mb-8">
                    <Col xs={4}>
                        <Row className="flex flex-nowrap text-xl">
                            <img src={edu} className="h-8 w-min p-0" alt="" />
                            <p className="my-auto font-bold">
                            2020-2024
                            </p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p className="text-xl font-bold">
                                PES Modern College of Engineering
                            </p>
                            <p className="my-auto italic text-md">
                                BE in Artifical Intelligence and Machine Learning
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-8">
                    <Col xs={4}>
                        <Row className="flex flex-nowrap text-xl">
                            <img src={edu} className="h-8 w-min p-0" alt="" />
                            <p className="my-auto font-bold">
                                2018-2020
                            </p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p className="text-xl font-bold">
                                Hiranandani Foundation School
                            </p>
                            <p className="my-auto italic text-md">
                                ISC
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col xs={4}>
                        <Row className="flex flex-nowrap text-xl">
                            <img src={edu} className="h-8 w-min p-0" alt="" />
                            <p className="my-auto font-bold">
                            2016-2018
                            </p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p className="text-xl font-bold">
                                Hiranandani Foundation School
                            </p>
                            <p className="my-auto italic text-md">
                                ICSE
                            </p>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
    
}
import React, { useState } from 'react'

export default function About(props) {
    const [btntext, setbtntext] = useState("Enable Dark Mode");
    const mystyle = {
        color : props.mode === 'dark'? 'white':'#302f2f',
        backgroundColor : props.mode === 'dark'? '#302f2f':'white',
        // border :'1px solid',
        // borderColor : props.mode === 'dark'? 'white':'#111010',

    }

    return (
        <>
            <div className="container my-2 py-3" >
                <h2 style={{color:props.mode === 'dark'? 'white':'#302f2f'}}>About Us</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={mystyle}>
                            <strong>Easy To Use</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body"style={mystyle}>
                                TextModifier is very simple and easy to use application. It is a use to make text beautiful and the order as user accepts.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={mystyle}>
                            <strong>About TextModifier</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body"style={mystyle}>
                               Our wish to make your text standard and beautiful.
                                TextModifier application created in 2021 by the developer PRERNA MAHABARE. she is a very ambitious and smart designer born in 24 sept 2003.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={mystyle} >
                            <strong>Free For All.</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body"style={mystyle}>
                                TextModifier is costless application u use in your moblie,pc's or in laptop. We hope the expericence of using our application is must be good all the time.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

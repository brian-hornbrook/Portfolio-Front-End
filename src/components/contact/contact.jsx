import React from 'react';
import ContactInfo from './contactInfo';


function Contact(props) {
    return (
        // title area
        <div id="contactArea" className="container-fluid">
            {/* contact info */}
            <div className="contactInfo container-fluid">
                <div className="row">

                    {/* name */}
                    <div className="col-sm-5">
                        <h1 className="contactName">Brian Hornbrook</h1>
                        &nbsp;
                    </div>

                    {/* contact info */}
                    <div className="col-sm-6">
                        <ContactInfo type="cell" info="(817) 842 7123" />
                        <ContactInfo type="email" info="brian_hornbrook@outlook.com" />
                        <ContactInfo type="LinkedIn" info="https://www.linkedin.com/in/brian-hornbrook-8a0b0047/" />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Contact;

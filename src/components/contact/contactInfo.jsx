import React from 'react';


function ContactInfoName(props) {
    function checkLinks() {
        let str = String(props.info)
        if (str.includes(".com")) {
            return (
                <a href={props.info} className="contactItem">
                    {props.info}
                </a>
            )
        }
        return props.info

    }

    return (
        <div className="row">

            {/* contact type */}
            <div className="contactName col-sm-2">
                {props.type}
            </div>

            {/* contact info */}
            <div className="contactInfo col-sm">
                {/* <a href="">{props.info}</a> */}
                {checkLinks()}
            </div>
        </div>
    )
}

export default ContactInfoName;

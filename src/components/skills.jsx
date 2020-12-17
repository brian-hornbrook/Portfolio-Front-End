import React from 'react';


function Skills() {

    return (
        <div className="languageArea container-fluid">
            <div className="row">

                {/* Frameworks */}
                <div className="col-md-6">
                    <div className="skillsItem col-md-12 card">
                        <h3>Frameworks</h3>
                        <p><strong>React</strong></p>
                    </div>
                </div>

                {/* Languages */}
                <div className="col-md-6">
                    <div className="skillsItem col-md-12 card">
                        <h3>Languages</h3>
                        <p>HTML / CSS</p>
                        <p>JavaScript</p>
                    </div>
                </div>

                {/* Libraries */}
                <div className="center col-md-12">
                    <div className="skillsItem col-md-12 card">
                        <h3>Libraries</h3>
                        <p>Bootstrap</p>
                        <p>Semantic UI</p>
                        <p>jQuery</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;

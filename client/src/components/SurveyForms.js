import React from "react";

import '../App.css';


export default function SurveyForms() {
    return (
        <div className="surveyforms">

        <div className='form' align="center"><iframe title='curriculum planning survey' className='survey' src="https://docs.google.com/forms/d/e/1FAIpQLSe5IJwSJaOjO7kCIfAz0AKJuY-xd1cwIGNANlbw5bs22oB6WQ/viewform?embedded=true" width="700" height="800" frameborder="10"  marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

        <div className='form' align="center"><iframe title='course scheduling survey' className='survey' src="https://docs.google.com/forms/d/e/1FAIpQLScOowOcITAk2W2ErNPdzl_9HonuTd0-fRmUIGcQQthv5MUAoQ/viewform?embedded=true" width="700" height="800" frameborder="10" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

        </div>
      );
}

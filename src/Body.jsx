import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <center><div classname="body">
        <img src="data:image/png;base64,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" alt="" height="100px" width="100px"></img>
        <h3><center><i>TRANSFORM YOURSELF</i></center></h3>
        <p>Kongu Engineering College is an autonomous engineering college located at Perundurai, Erode district in the state of Tamil Nadu in India. It is affiliated to Anna University and accredited 'A++' Grade by National Assessment and Accreditation Council.</p>
    </div>
    </center>
  )
}

export default Body



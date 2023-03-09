

import React from 'react'
import { useState } from 'react'

const StudentItem = (props) => {
    let { id, firstName, lastName, age, phone, email, itSkills, group, itLanguage } = props.data
    let { onDelete, onEdit, onPersonalInfo } = props
    const [showPrivateInfo, setShowPrivateInfo] = useState(false)

    const personalInfoHandler = () =>setShowPrivateInfo(prevState => !prevState)

  return (
    <div className="student-wrapper">
    <h2 className="student-name-title">{firstName} {lastName} </h2>
    <div className="personal-info-wrapper">
        <h3>Personal information:</h3>
        <ul className="personal-info-list">
            <li className="personal-info-item">Age: {age}</li>
            <li className="personal-info-item">Phone number:{showPrivateInfo ? phone : '****'}</li>
            <li className="personal-info-item">Email address: {showPrivateInfo ? email : '****'}</li>
        </ul>
    </div>

    <div className="it-info-wrapper">
        <ul className="it-info-list">
            <li className="it-info-item">Students it skills: {itSkills}/10</li>
            <li className="it-info-item">Students group: {group}</li>
            <li className="it-info-item">Students preferred it language(s): {itLanguage.join(', ')}</li>
        </ul>
    </div>

    <div className="button-wrapper">
        <button onClick={() => onDelete(id)} style={{ width: '20%' }}>Delete student</button>
        <button onClick={() => onEdit(props)} style={{ width: '20%' }}>Edit student</button>
        <button onClick={personalInfoHandler} style={{ width: '20%' }}>{showPrivateInfo ? 'hide Private Info' : 'show Private Info'}</button>
    </div>
</div>
  )
}

export default StudentItem
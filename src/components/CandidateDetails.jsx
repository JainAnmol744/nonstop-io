import React from 'react'
import './Candidatedetails.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CandidateDetails = () => {
    const location = useLocation();
    const details = location.state?.details;
    const navigate = useNavigate();


    const onUpdate = (details) => { 
      navigate(`../candidate/update/${details.id}` , {state:{details}})
    };

    const onDelete = async (id) => {
      try {
        const response = await axios.delete(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`);
        console.log(response);
        navigate('../')
      } catch (error) {
        console.error('Error deleting candidate:', error);
      }
    };

  return (
    <div className="candidate-card">
      <div className='card-header'>
      <img src={details.profile_picture} alt="Profile" />
      <div className="details-left">
          <h2 className='name-title'>{details.name}</h2>
          <p><strong>Email: </strong>{details.email}</p>
          <p><strong>Address :</strong> {details.address}</p> 
          <p><strong>Phone: </strong>{details.phone}</p>
          <p><strong>Gender:</strong> {details.gender}</p>
          <p><strong>Hobbies: </strong> {details.hobbies.join(', ')}</p>
        </div>
      </div>
      
      <div className="details"> 
        
          <h3 className='sub-details-heading'>Education:</h3>
          <ul className='sub-details-content'>
            {details.education.map((edu, index) => (
              <li key={index}>
                <p>Institute: {edu.institute}</p>
                <p>Degree: {edu.degree}</p>
                <p>Percentage: {edu.percentage}</p>
                <p>Pass Out Year: {edu.pass_out_year}</p>
              </li>
            ))}
          </ul>
       

       
          <h3 className='sub-details-heading'>Skills:</h3>
          <ul className='sub-details-content'>
            {details.skills.map((skill, index) => (
              <li key={index}>
                <p>Name: {skill.name}</p>
                <p>Experience: {skill.experience}</p>
              </li>
            ))}
          </ul>
        
          
          
          <h3 className='sub-details-heading'>Experience:</h3>
          <ul className='sub-details-content'>
            {details.experience.map((exp, index) => (
              <li key={index}>
                <p>Company: {exp.company}</p>
                <p>Project: {exp.project}</p>
                <p>Role: {exp.role}</p>
                <p>Team Size: {exp.team_size}</p>
                <p>Duration: {exp.duration_from} - {exp.duration_to}</p>
              </li>
            ))}
          </ul>
      
      </div>
      <div className="buttons">
        <button onClick={() => onUpdate(details)}>Update</button>
        <button onClick={() => onDelete(details.id)}>Delete</button>
      </div>
    </div>
  )
}

export default CandidateDetails
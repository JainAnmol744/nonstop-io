import React, { useEffect, useState } from 'react';
import './NewCandidate.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const details = location.state?.details;
    console.log(details)
    const [profile_picture, setprofile_picture] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setaddress] = useState('')
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [education, setEducation] = useState([{ institute: '',percentage:'', degree:'', pass_out_year: '' }]);
    const [skills, setSkills] = useState([{ name: '', experience: '' }]);
    const [experience, setExperiences] = useState([{ company: '', project: '', role: '', duration_from: '', duration_to: ''  }]);

    useEffect(() => {
        if (details !== undefined) {
            setprofile_picture(details.profile_picture || '');
            setName(details.name || '');
            setEmail(details.email || '');
            setaddress(details.address || '');
            setGender(details.gender || '');
            setHobbies(details.hobbies || []);
            setEducation(details.education || [{ institute: '', percentage: '', degree: '', pass_out_year: '' }]);
            setSkills(details.skills || [{ name: '', experience: '' }]);
            setExperiences(details.experience || [{ company: '', project: '', role: '', duration_from: '', duration_to: '' }]);
        }
    }, []);
 

      const handleupdate = async(e)=>{
        e.preventDefault();
    
        try {
          const formData = {
            profile_picture,
            name,
            email,
            address,
            gender,
            hobbies,
            education,
            skills,
            experience
          };

          console.log(formData)
          
          const response = await axios.put(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${details.id}`, formData);
          console.log(response.data);
          navigate('../');
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }

    const handleAddEntry = (field, setField) => {
        setField([...field, {}]);
    };

    const handleCheckboxChange = (e) => {
        const hobby = e.target.value;
        if (e.target.checked) {
            setHobbies([...hobbies, hobby]);
        } else {
            setHobbies(hobbies.filter(item => item !== hobby));
        }
    };

    return (
        <div className='container'>
            <h2 className='title'>Edit Candidate DetailS</h2>
            <form className='candidate-form' onSubmit={handleupdate }>
                {/* Personal Details */}
                <h3>Personal Details</h3>
                <input type="text" placeholder="Profile Picture URL" value={profile_picture} onChange={(e) => setprofile_picture(e.target.value)} />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setaddress(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div>
                    <label>
                        Gender:
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                </div>
                <div>
                    <p>Hobbies:</p>
                    <input type="checkbox" id="hobby1" name="hobby1" value="Reading" checked={hobbies.includes("Reading")} onChange={handleCheckboxChange} />
                    <label htmlFor="hobby1">Reading</label>
                    <input type="checkbox" id="hobby2" name="hobby2" value="Sports" checked={hobbies.includes("Sports")} onChange={handleCheckboxChange} />
                    <label htmlFor="hobby2">Sports</label>
                    <input type="checkbox" id="hobby3" name="hobby3" value="Music" checked={hobbies.includes("Music")} onChange={handleCheckboxChange} />
                    <label htmlFor="hobby3">Music</label>
                </div>

                {/* Education */}
                <h3>Education</h3>
                {education.map((edu, index) => (
                    <div key={index}>
                        <h4>{index + 1}</h4>
                        <input type="text" placeholder="School/College/Institute Name" value={edu.institute} onChange={(e) => {
                            const updatedEducation = [...education];
                            updatedEducation[index].institute = e.target.value;
                            setEducation(updatedEducation);
                        }} />
                        <input type="text" placeholder="Year of Graduation" value={edu.pass_out_year} onChange={(e) => {
                            const updatedEducation = [...education];
                            updatedEducation[index].pass_out_year = e.target.value;
                            setEducation(updatedEducation);
                        }} />
                        <input type="text" placeholder="Degree Name" value={edu.degree} onChange={(e) => {
                            const updatedEducation = [...education];
                            updatedEducation[index].degree = e.target.value;
                            setEducation(updatedEducation);
                        }} />
                        <input type="text" placeholder="Percentage" value={edu.percentage} onChange={(e) => {
                            const updatedEducation = [...education];
                            updatedEducation[index].percentage = e.target.value;
                            setEducation(updatedEducation);
                        }} />
                    </div>
                ))}
                <button type="button" disabled={education.length == 10} onClick={() => handleAddEntry(education, setEducation)}>Add Education</button>

                {/* Skills */}
                <h3>Skills</h3>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <h4>{index + 1}</h4>
                        <input type="text" placeholder="Skill Name" value={skill.name} onChange={(e) => {
                            const updatedSkills = [...skills];
                            updatedSkills[index].name = e.target.value;
                            setSkills(updatedSkills);
                        }} />
                        <input type="text" placeholder="Experience in Months" value={skill.experience} onChange={(e) => {
                            const updatedSkills = [...skills];
                            updatedSkills[index].experience = e.target.value;
                            setSkills(updatedSkills);
                        }} />
                    </div>
                ))}
                <button type="button" disabled={skills.length == 10} onClick={() => handleAddEntry(skills, setSkills)}>Add Skill</button>

                {/* Experience */}
                <h3>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <h4>{index + 1}</h4>
                        <input type="text" placeholder="Company Name" value={exp.company} onChange={(e) => {
                            const updatedExperiences = [...experience];
                            updatedExperiences[index].company = e.target.value;
                            setExperiences(updatedExperiences);
                        }} />
                        <input type="text" placeholder="Project Name" value={exp.project} onChange={(e) => {
                            const updatedExperiences = [...experience];
                            updatedExperiences[index].project = e.target.value;
                            setExperiences(updatedExperiences);
                        }} />
                        <input type="text" placeholder="Role" value={exp.role} onChange={(e) => {
                            const updatedExperiences = [...experience];
                            updatedExperiences[index].role = e.target.value;
                            setExperiences(updatedExperiences);
                        }} />
                        <input type="month" placeholder="Start Date" value={exp.duration_from} onChange={(e) => {
                            const updatedExperiences = [...experience];
                            updatedExperiences[index].duration_from = e.target.value;
                            setExperiences(updatedExperiences);
                        }} />
                        <input type="month" placeholder="End Date" value={exp.duration_to} onChange={(e) => {
                            const updatedExperiences = [...experience];
                            updatedExperiences[index].duration_to = e.target.value;
                            setExperiences(updatedExperiences);
                        }} />
                    </div>
                ))}
                <button type="button" disabled={experience.length == 10} onClick={() => handleAddEntry(experience, setExperiences)}>Add Experience</button>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditDetails;

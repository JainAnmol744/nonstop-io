import React from 'react';
import './CandidateList.css';
import { useNavigate } from 'react-router-dom';

const CandidateList = ({list}) => {
    const navigate = useNavigate();


    const handleAddCandidate = () => {
        navigate("candidate/new", {state:{}});
    };

    const handleCandidateDetail = (details) => {
        navigate(`candidate/${details.id}`, { state: { details } });
    };



    return (
        <div className='candidate-list'>
            <button className='add-btn' onClick={handleAddCandidate}>Add Candidate</button>
            <h2 className='title'>List of Candidates </h2>
            <div className='list'>
                <ul>
                    {list && list.map((item, index) => (
                        <li key={index}><button onClick={()=> handleCandidateDetail(item)}>{item.name}</button></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CandidateList;

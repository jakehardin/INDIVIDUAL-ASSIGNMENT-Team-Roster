/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getMembers } from '../api/teamData';
import MemberCard from '../components/MemberCard';
import { useAuth } from '../utils/context/authContext';

export default function TeamPage() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };
  useEffect(() => {
    getAllMembers();
  }, []);
  return (
    <>
      <h1>My Team</h1>
      <div className="d-flex flex-wrap">
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        ))}
      </div>
    </>
  );
}

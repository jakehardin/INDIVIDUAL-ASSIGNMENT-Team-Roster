import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { viewMemberDetails } from '../../api/mergedData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewMemberDetails(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <>
      <Head>
        <title>View {memberDetails.name}</title>
      </Head>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={memberDetails.image} alt={memberDetails.name} style={{ height: '200px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {memberDetails.name}
          </h5>
          Role: <a href={`mailto:${memberDetails.role}`}>{memberDetails.role}</a>
          <hr />
        </div>
      </div>
      <hr />
    </>
  );
}

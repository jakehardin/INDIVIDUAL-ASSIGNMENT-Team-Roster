import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Member({ memberObj }) {
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={memberObj.image} alt={memberObj.name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{memberObj.name}</Card.Title>
          <Card.Text>{memberObj.role}</Card.Text>
          <Link href={`/team/${memberObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE Author DETAILS  */}
          <Link href={`/team/edit/${memberObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

Member.propTypes = {
  memberObj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};

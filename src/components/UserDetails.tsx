import Card from 'react-bootstrap/Card';
import {Button, Col, Row} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {User_details} from '../common/Custom_interface';
import Image from 'react-bootstrap/Image';
import {
  FiActivity,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiMapPin
} from 'react-icons/fi';
import {BrowserRouter as Router, Route, Link, Switch, useParams} from 'react-router-dom';

import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {getAllAPIUsers, getAPIUserDetails, getUserDetails} from '../API/user_details';
import {useEffect, useState} from 'react';
export function Footer(props) {
  return <p>Copyright © 2021 {props.company} All Rights Reserved</p>;
}

export function clean_url(url: string | null | undefined) {
  if (typeof url === 'string') {
    return url;
  } else {
    return '#';
  }
}
export function RouteUserComponet() {
  const {id} = useParams();

  return (
    <div>
      <User_component emp_id={id ? id : ''}></User_component>
    </div>
  );
}
export function User_component(props) {
  const [empdetails, Setempdetails] = useState({});
  const user_details: User_details = empdetails;
  const [emp_id, Setemp_id] = useState(props.emp_id);
  useEffect(() => {
    Setemp_id(props.emp_id);
    getAPIUserDetails(Number(props.emp_id)).then((result: any) => {
      Setempdetails(result);
    });
  }, [props.emp_id]);

  if (typeof user_details === 'undefined') {
    return <p>No Users Found</p>;
  } else {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Content>
          {user_details.company?.catchPhrase}
          <br></br>
          {user_details.company?.bs}
        </Popover.Content>
      </Popover>
    );
    return (
      <Card>
        <Card.Body>
          <Row>
            <Col xs={4}>
              <Image width="100vh" src={user_details.avatar_url} roundedCircle />
            </Col>
            <Col xs={8} md={8}>
              <Card.Title>{user_details.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{user_details.bio}</Card.Subtitle>
              <Card.Subtitle className="mb-2 ">
                {user_details.contact?.email}{' '}
                <a href={'mailto:' + user_details.contact?.email}>
                  <FiMail></FiMail>
                </a>{' '}
              </Card.Subtitle>
            </Col>
          </Row>
          <hr></hr>

          <Table bordered>
            <tbody>
              <tr>
                <td>address</td>
                <td align="left">
                  {user_details.address?.street}
                  <br></br>
                  {user_details.address?.suite}
                  <br></br>
                  {user_details.address?.city}
                  <br></br>
                  {user_details.address?.zipcode}
                  <br></br>
                  {user_details.address?.geo?.lat} {user_details.address?.geo?.lng + '  '}
                  <a
                    href={
                      'https://www.google.co.in/maps/search/' +
                      user_details.address?.street +
                      '+' +
                      user_details.address?.city
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMapPin></FiMapPin>
                  </a>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>Company Details</td>
                <td>
                  <OverlayTrigger trigger="hover" placement="top-start" overlay={popover}>
                    <b>{user_details.company?.name} </b>
                  </OverlayTrigger>
                </td>
              </tr>
            </tbody>
          </Table>

          <Row>
            <Col xs={2}></Col>
            <Col xs={2}>
              <a
                href={clean_url(user_details.social?.linkedin_url)}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">
                  <FiLinkedin></FiLinkedin>
                </Button>
              </a>
            </Col>
            <Col xs={2}>
              <a
                href={clean_url(user_details.social?.twitter_url)}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">
                  <FiTwitter></FiTwitter>
                </Button>
              </a>
            </Col>
            <Col xs={2}>
              <a
                href={clean_url(user_details.social?.facebook_url)}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">
                  <FiFacebook></FiFacebook>
                </Button>
              </a>
            </Col>
            <Col xs={2}>
              <a
                href={clean_url(user_details.social?.instagram_url)}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">
                  <FiInstagram></FiInstagram>
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Row,
  Form,
  FormGroup,
  CustomInput,
  UncontrolledCarousel,
  Input,
  Label,
  UncontrolledDropdown
} from "reactstrap";

import {
  Briefcase,
  Home,
  MapPin,
  MoreHorizontal
} from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../assets/img/photos/unsplash-3.jpg";
import unsplash4 from "../../assets/img/photos/unsplash-4.jpg";

const slides = [
  {
    src: unsplash1,
    key: "1"
  },
  {
    src: unsplash2,
    key: "2"
  },
  {
    src: unsplash3,
    key: "3"
  },
  {
    src: unsplash4,
    key: "4"
  }
];

const ProfileDetails = () => (
  <Card>
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Your Personal BlogVideos</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <UncontrolledCarousel
          items={slides}
          indicators={true}
          controls={true}
        />
      </CardBody>
    </Card>

    <hr className="my-0" />

    <CardBody>
      <CardTitle tag="h5">Skills</CardTitle>
      <Badge color="primary" className="mr-1 my-1">
        HTML
      </Badge>
      <Badge color="primary" className="mr-1 my-1">
        JavaScript
      </Badge>
      <Badge color="primary" className="mr-1 my-1">
        Sass
      </Badge>
      <Badge color="primary" className="mr-1 my-1">
        Angular
      </Badge>
      <Badge color="primary" className="mr-1 my-1">
        Vue
      </Badge>
      <Badge color="primary" className="mr-1 my-1">
        React
      </Badge>
      <Badge color="primary" className="mr-1 my-1">
        Redux
      </Badge>
      <Badge color="primary" className="mr-1 my-1">
        UI
      </Badge>
      <Badge color="primary" className="mr-1 my-1">
        UX
      </Badge>
    </CardBody>

    <hr className="my-0" />
    <CardBody>
      <CardTitle tag="h5">About</CardTitle>
      <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <Home width={14} height={14} className="mr-1" /> Lives in{" "}
          <Link to="/dashboard/default">San Francisco, SA</Link>
        </li>

        <li className="mb-1">
          <Briefcase width={14} height={14} className="mr-1" /> Works at{" "}
          <Link to="/dashboard/default">GitHub</Link>
        </li>
        <li className="mb-1">
          <MapPin width={14} height={14} className="mr-1" /> From{" "}
          <Link to="/dashboard/default">Boston</Link>
        </li>
      </ul>
    </CardBody>
    <hr className="my-0" />
    <CardHeader>
      <CardTitle tag="h5">Horizontal form</CardTitle>
    </CardHeader>
    <CardBody>
      <Form>
        <FormGroup row>
          <Label sm={2} className="text-sm-right">
            Title
          </Label>
          <Col sm={10}>
           <Input type="text" name="input" placeholder="Input" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-sm-right">
            ScreenName
          </Label>
          <Col sm={10}>
           <Input type="text" name="input" placeholder="ScreenName" /> 
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-sm-right">
            Body
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="textarea"
              placeholder="Body"
              rows="3"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-sm-right pt-sm-0">
            Radios
          </Label>
          <Col sm={10}>
            <div className="custom-controls-stacked">
              <CustomInput
                type="radio"
                id="radio1"
                name="customRadio"
                label="Default radio"
                className="mb-2"
                defaultChecked
              />
              <CustomInput
                type="radio"
                id="radio2"
                name="customRadio"
                label="Second default radio"
                className="mb-2"
              />
            </div>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </CardBody>
    <hr className="my-0" />
    <CardBody>
      <CardTitle tag="h5">Post Elsewhere</CardTitle>

      <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <FontAwesomeIcon icon={faGlobe} fixedWidth className="mr-1" />
          <Link to="/dashboard/default">PrinceInoba.co</Link>
        </li>
        <li className="mb-1">
          <FontAwesomeIcon icon={faTwitter} fixedWidth className="mr-1" />
          <Link to="/dashboard/default">Twitter</Link>
        </li>
        <li className="mb-1">
          <FontAwesomeIcon icon={faFacebook} fixedWidth className="mr-1" />
          <Link to="/dashboard/default">Facebook</Link>
        </li>
        <li className="mb-1">
          <FontAwesomeIcon icon={faInstagram} fixedWidth className="mr-1" />
          <Link to="/dashboard/default">Instagram</Link>
        </li>
        <li className="mb-1">
          <FontAwesomeIcon icon={faLinkedin} fixedWidth className="mr-1" />
          <Link to="/dashboard/default">LinkedIn</Link>
        </li>
      </ul>
    </CardBody>
  </Card>
);

const Activities = () => (
  <Card>
    <CardHeader>
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">
            <MoreHorizontal />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        All Blog Posts
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Media>
        <img
          src={avatar5}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Ashley Briggs"
        />
        <Media body>
          <small className="float-right text-navy">5m ago</small>
          <strong>Prince Inoba</strong> started following{" "}
          <strong>Treasure Inoba</strong>
          <br />
          <small className="text-muted">Today 7:51 pm</small>
          <br />
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar1}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Chris Wood"
        />
        <Media body>
          <small className="float-right text-navy">30m ago</small>
          <strong>Chris Wood</strong> posted something on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Click on a post to view</small>
          <div className="border text-sm text-muted p-2 mt-1">
            The eyes of your understanding being enlightened; that ye may know 
            what is the hope of his calling, and what the riches of the glory of
            his inheritance in the saints.
          </div>
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar4}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Stacie Hall"
        />
        <Media body>
          <small className="float-right text-navy">1h ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Today 6:35 pm</small>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar2}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Carl Jenkins"
        />
        <Media body>
          <small className="float-right text-navy">3h ago</small>
          <strong>Carl Jenkins</strong> posted two photos on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 5:12 pm</small>
          <div className="row no-gutters mt-1">
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash1} className="img-fluid pr-2" alt="Unsplash" />
            </div>
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash2} className="img-fluid pr-2" alt="Unsplash" />
            </div>
          </div>
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar2}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Carl Jenkins"
        />
        <Media body>
          <small className="float-right text-navy">1d ago</small>
          <strong>Carl Jenkins</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Yesterday 3:12 pm</small>
          <Media className="mt-1">
            <img
              src={avatar4}
              width="36"
              height="36"
              className="rounded-circle mr-2"
              alt="Stacie Hall"
            />
            <Media body className="pl-3">
              <div className="border text-sm text-muted p-2 mt-1">                The eyes of your understanding being enlightened; 
                that ye may know what is the hope of his calling, and what 
                the riches of the glory of his inheritance in the saints.
              </div>
            </Media>
          </Media>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar4}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Stacie Hall"
        />
        <Media body>
          <small className="float-right text-navy">1d ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Yesterday 2:43 pm</small>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar1}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Chris Wood"
        />
        <Media body>
          <small className="float-right text-navy">1d ago</small>
          <strong>Chris Wood</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Yesterdag 1:51 pm</small>
        </Media>
      </Media>

      <hr />
      <Button color="primary" block>
        Load more
      </Button>
    </CardBody>
  </Card>
);

const TeoyubeBlog = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">TeoyubeBlog</h1>

    <Row>
      <Col md="4" xl="7">
        <ProfileDetails />
      </Col>
      <Col md="8" xl="5">
        <Activities />
      </Col>
    </Row>
  </Container>
);

export default TeoyubeBlog;

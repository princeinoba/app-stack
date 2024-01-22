import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../assets/img/photos/unsplash-3.jpg";

const GridText = ({ children }) => (
  <Card className="bg-light py-2 py-md-3 text-center border">
    <CardBody>{children}</CardBody>
  </Card>
);

const Search = () => { 
  return (
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Search</h1>

      <Card>
        <CardBody>
          <div className="mb-4">
            Hello <strong>Prince Inoba</strong>,
            <br /> The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints, <strong>
              Ephesians 1:18
            </strong>{" "}
                    
          </div>
          <hr className="my-4" />
          <InputGroup className="mb-3">
            <Input placeholder="Search for..." />
              <InputGroupAddon addonType="append" color="primary">
              <Button>Search!</Button>
            </InputGroupAddon>
          </InputGroup>
          <Row>
            <Col md="12">
              <GridText>  
                <Card>
                  <div className="row no-gutters mt-1">
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                     <img src={unsplash1} className="img-fluid pr-2" alt="Unsplash" />
                    </div>
                    <div className="border text-sm text-muted p-2 mt-1">
                      <CardHeader>
                        <CardTitle tag="h5" className="mb-0">
                          Card with image and button
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <CardText>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.  hvhfhjjhghjhhjgvhvghvhvghvgghghvhgvhvhgvghvghvg
                        </CardText>
                        <Button href="#" color="primary">
                          Go somewhere
                        </Button>
                      </CardBody>
                    </div>
                  </div>
                  <hr />
                  <div className="row no-gutters mt-1">
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                     <img src={unsplash2} className="img-fluid pr-2" alt="Unsplash" />
                    </div>
                    <div className="border text-sm text-muted p-2 mt-1">
                      <CardHeader>
                        <CardTitle tag="h5" className="mb-0">
                          Card with image and button
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <CardText>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content. hvhfhjjhghjhhjgvhvghvhvghvgghghvhgvhvhgvghvghvg
                        </CardText>
                        <Button href="#" color="primary">
                          Go somewhere
                        </Button>
                      </CardBody>
                    </div>
                  </div>
                  <hr />
                  <div className="row no-gutters mt-1">
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                     <img src={unsplash3} className="img-fluid pr-2" alt="Unsplash" />
                    </div>
                    <div className="border text-sm text-muted p-2 mt-1">
                      <CardHeader>
                        <CardTitle tag="h5" className="mb-0">
                          Card with image and button
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <CardText>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content. hvhfhjjhghjhhjgvhvghvhvghvgghghvhgvhvhgvghvghvg
                        </CardText>
                        <Button href="#" color="primary">
                          Go somewhere
                        </Button>
                      </CardBody>
                    </div>
                  </div>
                  <hr />
                </Card>
              </GridText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Search;
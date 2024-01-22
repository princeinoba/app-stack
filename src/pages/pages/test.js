import React, { useState } from "react";
import API from "./API";

import {
  Button,
  Card,
  CardBody,
  Jumbotron,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,

} from "reactstrap";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");
    
  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setRecipeSearch(value);
  };
    
  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(recipeSearch)
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err));
  };
      
  const Button = ({ type = "default", className, children, onClick }) => {
    return (
      <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
        {children}
      </button>
    );
  }

  // Exporting the Container, Row, and Col components from this file

  // This Container component allows us to use a bootstrap container without worrying about class names
  const Container = ({ fluid, children }) => {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
  }
 
  // This Row component lets us use a bootstrap row without having to think about class names
  const Row = ({ fluid, children }) => {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
  }

  // This Col component lets us size bootstrap columns with less syntax
  // e.g. <Col size="md-12"> instead of <div className="col-md-12">
  const Col = ({ size, children }) => {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
  }

  // This component lets us use a bootstrap input element without worrying about class names
  // or manually wrapping the input with a form-group div
  // All of the props passed to this component are spread onto the input element
  const Input = (props) => {
    return (
      <div className="input-group input-group-lg">
        <input className="form-control" type="text" {...props} />
      </div>
    );
  }

  // Exporting both RecipeList and RecipeListItem from this file
  // RecipeList renders a bootstrap list item
  const RecipeList = ({ children }) => {
    return <ul className="list-group">{children}</ul>;
  }
   
  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  const RecipeListItem = ({
    thumbnail,
    title,
    ingredients,
    href
  }) => {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{title}</h3>
              <p>Ingredients: {ingredients}</p>
              <a rel="noreferrer noopener" target="_blank" href={href}>
                Go to recipe!
              </a>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }

  // The Thumbnail component renders a div that uses some CSS to render a background image
  // It will always keep square proportions at any size without the image warping
  // The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
  const Thumbnail = ({ src }) => {
    return (
      <div
        className="thumbnail"
        role="img"
        aria-label="Recipe Image"
        style={{
          backgroundImage: `url(${src})`
        }}
      />
    );
  }
  
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
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="RecipeSearch"
                        value={recipeSearch}
                        onChange={handleInputChange}
                        placeholder="Search for..."
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                          Search!
                      </Button>
                    </Col>
                  </Row>
                </Container>
             </form>
           </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!recipes.length ? (
                <h1 className="text-center"></h1>
              ) : (
                <RecipeList>
                  {recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );

} 
  
export default Search;

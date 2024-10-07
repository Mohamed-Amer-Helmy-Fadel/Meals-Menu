import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

export const NavBar = ({ filterbySearch }) => {
  const [searchValue, setsearchValue] = useState();

  const onSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    filterbySearch(searchValue);
    setsearchValue('');
  };

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={(e) => onSearch(e)}>
              <Form.Control
                type="text"
                placeholder="ابحث"
                className="mx-2"
                onChange={(e) => setsearchValue(e.target.value)}
                value={searchValue}
              />
              <button  className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;





/*
import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

 const NavBar = ({ filterbySearch }) => {
  const [searchValue, setsearchValue] = useState();
  const onSearch = (e) => {
    filterbySearch(searchValue)
    setsearchValue('');
  };
  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control type="text" placeholder="ابحث" className="mx-2" onChange={(e) => setsearchValue(e.target.value)} value={searchValue} />
              <button onClick={() => onSearch()} className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
export default NavBar;
// -------------------------------------------------


-------------------------------------------------
import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

export const NavBar = ({ filterbySearch }) => {
  const [searchValue, setsearchValue] = useState();

  const onSearch = () => {
    filterbySearch(searchValue);
    setsearchValue('');
  };

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث"
                className="mx-2"
                onChange={(e) => setsearchValue(e.target.value)}
                value={searchValue}
              />
              <button type="button" onClick={onSearch} className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;

*/
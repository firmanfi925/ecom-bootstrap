import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  MDBIcon,
  MDBBadge,
} from "mdb-react-ui-kit";

import {
  Form,
  FormControl,
  Nav,
  Container,
  Navbar,
  Button
} from "react-bootstrap";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import MainMenu from "./MainMenu";
import ProductCard from "./ProductCard";
import products from "../services/data/product";
import Home from "./Home";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="container-fluid">

      {/* Top Navbar  */}
      <div className="row border-bottom">
        <div className="col-sm-8 py-1 py-md-2 me-auto text-center text-md-start">
          <small>
            <a href="#" className="text-decoration-none me-3 text-success">
              Chat with us
            </a>
          </small>
          <small>
            <span className="me-3">+62 813 3008 5035</span>
          </small>
          <small>
            <span>firmanfi925@gmail.com</span>
          </small>
        </div>
        <div className="col-sm-4 py-1 py-md-2 text-md-end text-center text-md-start">
          <small>
            <a href="#" className="text-decoration-none me-3 text-success">
              Blog
            </a>
          </small>
          <small>
            <a href="#" className="text-decoration-none me-3 text-success">
              About us
            </a>
          </small>
          <small>
            <a href="#" className="text-decoration-none text-success">
              Career
            </a>
          </small>
        </div>
      </div>

      {/* Logo & Search */}
      <div className="row mt-4">
        <div className="d-none d-md-flex col-md-3">
          <Link to="/"><Navbar.Brand className="text-dark" href="#">LeumangShop</Navbar.Brand></Link>
        </div>
        <div className="col-9 col-md-6">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search products categories.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </div>
        <div className="col-3 col-md-3 text-end py-2">
          <a href="#" className="me-4">
            <MDBIcon className="text-dark" icon="user-alt" size="lg" />
          </a>
          <a href="#" className="me-3">
            <MDBIcon className="text-dark" icon="shopping-cart" size="lg" />
            <MDBBadge color="danger" notification pill>
              4
            </MDBBadge>
          </a>
        </div>
      </div>

      {/* Menu Utama */}
      <Navbar expand="md" className="mt-3 bg-success bg-opacity-10">
      <Link to="/"><Navbar.Brand className="d-flex ms-2 d-md-none">LemangShop</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll">
        <MDBIcon icon="bars" fas />
        </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-3 ms-md-0 me-auto my-2 my-lg-0" style={{ maxHeight: "200px" }} navbarScroll>
              
              <MainMenu title="Bakery" subtitle="Bakery 1" />
              <MainMenu title="Fruits & Vegetables" subtitle="Fruits & Vegetables 1" />
              <MainMenu title="Meat & Fish" subtitle="Meat & Fish 1" />
              <MainMenu title="Drinks" subtitle="Drinks 1" />
              <MainMenu title="Kitchen" subtitle="Kitchen 1" />
              <MainMenu title="Special Nutrition" subtitle="Special Nutrition 1" />
              <MainMenu title="Baby" subtitle="Baby 2"/>
              <MainMenu title="Pharmacy"/>
            
            </Nav> 
          </Navbar.Collapse>
      </Navbar>

      {props.children}

      {/* Footer */}
      <footer className="bg-success bg-opacity-10 py-4">
        <div className="row">
          <div className="col-sm-6 col-md-3 text-center">
            <h5>Get in touch</h5>
            <ul className="list-unstyled">
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    About Us
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Careers
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Press Releases
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Blog
                  </a>
                </small>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3 text-center">
            <h5>Connections</h5>
            <ul className="list-unstyled">
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Facebook
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Twitter
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Instagram
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Youtube
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    LinkedIn
                  </a>
                </small>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3 text-center">
            <h5>Earnings</h5>
            <ul className="list-unstyled">
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Become an Affiliate
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Advertise your product
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Sell on market
                  </a>
                </small>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3 text-center">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Your account
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Return center
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    100% purchase protection
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Chat with us
                  </a>
                </small>
              </li>
              <li>
                <small>
                  <a href="#" className="text-success text-decoration-none">
                    Help
                  </a>
                </small>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-3 mt-md-0">
          <div className="col text-center">
            <small>Copyright &copy; 2022 petrbilek.com</small>
          </div>
        </div>
      </footer>


     </div>
  )
}

export default Layout;
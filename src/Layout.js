import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Layout.css";

class Layout extends Component {
	render() {
		return (
			<>
				<div className="navMargin">
					<Navbar expand="lg">
						<Navbar.Brand>
							<Link className="navbar-brand-link h4" to="/">
								The Gigantic React App
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse
							id="basic-navbar-nav"
							style={{ marginLeft: "80px" }}
						>
							<Nav className="mr-auto">
								<NavLink
									exact
									className="nav-link  linkMargin"
									activeClassName="active-nav-link"
									to="/dice-app"
								>
									DiceApp
								</NavLink>
								<NavLink
									exact
									className="nav-link  linkMargin"
									activeClassName="active-nav-link"
									to="/color-boxes"
								>
									ColorBoxes
								</NavLink>
								<NavLink
									exact
									className="nav-link linkMargin"
									activeClassName="active-nav-link"
									to="/color-box-maker"
								>
									ColorBoxMaker
								</NavLink>
								<NavLink
									exact
									className="nav-link linkMargin"
									activeClassName="active-nav-link"
									to="/todo-app"
								>
									TodoApp
								</NavLink>

								<NavLink
									exact
									className="nav-link linkMargin"
									activeClassName="active-nav-link"
									to="/cards-game"
								>
									CardsGame
								</NavLink>
								<NavLink
									exact
									className="nav-link linkMargin"
									activeClassName="active-nav-link"
									to="/dad-jokes-app"
								>
									DadJokesApp
								</NavLink>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>

				<main style={{ marginTop: "65px" }}>{this.props.children}</main>
			</>
		);
	}
}

export default Layout;

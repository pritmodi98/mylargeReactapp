import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import RouteDisplay from "./RouteDisplay";

class HomePage extends Component {
	render() {
		// { path: "/dice-app", img: diceAppImg, component: DiceApp },
		// 	{ path: "/color-boxes", img: colorBoxesImg, component: ColorBoxes },
		// 	{
		// 		path: "/color-box-maker",
		// 		img: colorBoxMakerImg,
		// 		component: ColorBoxMaker,
		// 	},
		// 	{ path: "/todo-app", img: todoAppImg, component: TodoApp },
		// 	{ path: "/game", img: gameImg, component: Game },
		// 	{ path: "/cards-game", img: cardsGameImg, component: CardsGame },
		// 	{ path: "/dad-jokes-app", img: dadJokesAppImg, component: DadJokesApp },
		const items = this.props.routes.map((i) => (
			<Col md={4} sm={12} key={i.path} style={{ margin: "20px 0" }}>
				<RouteDisplay {...i}>{i.path}</RouteDisplay>
			</Col>
		));
		return (
			<Container>
				<Row>{items}</Row>
			</Container>
		);
	}
}

export default HomePage;

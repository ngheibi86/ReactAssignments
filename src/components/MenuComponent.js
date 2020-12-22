import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Button } from 'reactstrap';
import { Media } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDish: null
		};
	}

	onDishSelect(dish) {
		this.setState({ selectedDish: dish });
	}
	renderDish(dish) {
		return <Dishdetail selecteddish={dish} />;
	}

	render() {
		const menu = this.props.dishes.map((dish) => {
			return (
				<div className="col-12 col-md-5 m-1">
					<Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
						<CardImg width="50%" src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					
					</Card>

				</div>
			);
		});

		return (
			<div >
				<div >{menu}</div>
				
				<div >
					<div className="col-6 col-md-6 m-1">{this.renderDish(this.state.selectedDish)}</div>
				</div>
			</div>
		);
	}
}
export default Menu;

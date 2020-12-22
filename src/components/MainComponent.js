import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/Leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null,
			leaders: LEADERS
		};
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId });
	}

	render() {
		const HomePage = () => {
			return <Home />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />} />
					<Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
					{/* <Redirect to="/home" /> */}
					<Route exact path="/contactus" component={Contact} />} />
				</Switch>
				<Footer />
			</div>
			//   <div>
			//     <Navbar dark color="primary">
			//       <div className="container">
			//         <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
			//       </div>
			//     </Navbar>
			//     <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
			//     <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
			//   </div>
		);
	}
}

export default Main;

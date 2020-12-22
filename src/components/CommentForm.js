import { react, Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {
	Input,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Row,
	Col,
	Label,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

class Comment extends Component {
	constructor(props) {
		super(props);
	}
	handleSubmit(values) {
		console.log('Current State is: ' + JSON.stringify(values));
		alert('Current State is: ' + JSON.stringify(values));
		// event.preventDefault();
	}
	render() {
        const required = (val) => val && val.length;
		const maxLength = (len) => (val) => !val || val.length <= len;
		const minLength = (len) => (val) => val && val.length >= len;
		return (
			<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
				<Row className="form-group">
					<Label htmlFor="Rating" md={2}>
						Rating
					</Label>
					<Col md={10}>
						<Input type="select">
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
						</Input>
					</Col>
				</Row>
				<Row className="form-group">
					<Label htmlFor="author" md={3}>
						Your Name
					</Label>
					<Col md={10}>
						<Control.text
							model=".author"
							id="author"
							name="author"
							placeholder="author"
							className="form-control"
							validators={{
								required,
								minLength: minLength(3),
								maxLength: maxLength(15)
							}}
						/>
						<Errors
							className="text-danger"
							model=".author"
							show="touched"
							messages={{
								required: 'Required',
								minLength: 'Must be greater than 2 characters',
								maxLength: 'Must be 15 characters or less'
							}}
						/>
					</Col>
				</Row>
				<Row className="form-group">
					<Label htmlFor="comment" md={3}>
						Comment
					</Label>
					<Col md={10}>
						<Control.textarea
							model=".comment"
							id="comment"
							name="comment"
							rows="12"
							className="form-control"
						/>
					</Col>
				</Row>
				<Row className="form-group">
					<Col md={{ size: 10, offset: 2 }}>
						<Button type="submit" color="primary">
							Submit
						</Button>
					</Col>
				</Row>
			</LocalForm>
		);
	}
}

export default Comment;

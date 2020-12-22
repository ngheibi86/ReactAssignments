import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const selecteddish = this.props.selecteddish;

		if (selecteddish != null) {
			const selectedcomment = selecteddish.comments.map((comment) => {
				return (
					<div>
						<Card key={comment.id}>
							<CardTitle>{comment.comment}</CardTitle>
							{/* <CardTitle>{comment.author}</CardTitle> */}
							<CardTitle>
								{comment.author},{comment.date}
							</CardTitle>
						</Card>
					</div>
				);
			});

			return (
				<div>
					<Card>
						<CardImg width="20%" top src={selecteddish.image} alt={selecteddish.name} />
						<CardBody>
							<CardTitle>{selecteddish.name}</CardTitle>
							<CardText>{selecteddish.description}</CardText>
						</CardBody>
					</Card>
					<div>
						<h4>Comments</h4>
						<div>{selectedcomment}</div>
					</div>
				</div>
			);
		} else return <div>Not found</div>;
	}
}
export default Dishdetail;

import React, { Component } from 'react';
import Comment from './CommentForm';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button, Modal,ModalHeader,ModalBody } from 'reactstrap';

class Dishdetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
	this.toggleModal = this.toggleModal.bind(this);
}

	toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
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
					<Card >
						<CardImg   top src={selecteddish.image} alt={selecteddish.name} />
						<CardBody>
							<CardTitle>{selecteddish.name}</CardTitle>
							<CardText>{selecteddish.description}</CardText>
						</CardBody>
					</Card>
					<div>
						<h4>Comments</h4>
						<div>{selectedcomment}</div>
						<Button onClick={this.toggleModal}>Comment</Button>
					</div>
					<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><Comment></Comment></ModalHeader>
                    <ModalBody>
                    
                    </ModalBody>
                </Modal>
				</div>
			);
		} else return <div>Not found</div>;
	}
}
export default Dishdetail;

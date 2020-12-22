import react from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';

function RenderLeader(props) {
	return (
		<Media>
			{props.leaders.map((leader) => (
				<div >
					{/* <Media body> */}
						{/* <div className="col-3"> */}
							<Media object src={leader.image} alt="Generic placeholder image" />
						{/* </div> */}
						{/* <div className="col-9"> */}
							{/* <div className="row"> */}
								<Media heading>{leader.name}</Media>
							{/* </div> */}
                            <Media body>{leader.description}</Media>
							{/* <div className="row">{leader.description}</div> */}
						{/* </div> */}
					{/* </Media> */}
				</div>
			))}
		</Media>
	);
}
export default RenderLeader;

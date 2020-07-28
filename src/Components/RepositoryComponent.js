import React from 'react';
import { Row, Col, CardText, CardImg, CardBody, Card, Button } from "reactstrap";
import moment from 'moment';
class Repository extends React.Component {
    render() {
        const repo = this.props.repositoryData;
        const srcImg = repo.owner ? repo.owner.avatar_url : "";
        const dateCreate = moment(repo.created_at).format("YYYY-MM-DD")
        return (
            <Row key={repo.id}>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" src={srcImg} />
                    </Card>
                </Col>
                <Col md={8}>
                    <CardBody>
                        <h1>{repo.name}</h1>
                        <CardText>
                            {repo.description}
                        </CardText>
                        <div>
                            <Button color="success" disabled >stars : {repo.stargazers_count}</Button>
                            {' '}
                            <Button color="danger" disabled>issues : {repo.open_issues}</Button>
                            {' '}
                            <span> submitted {moment(new Date()).diff(dateCreate,'days')} days ago by {repo.owner.login} </span>
                        </div>
                    </CardBody>
                </Col>
            </Row>
        );
    }
}
export default Repository;

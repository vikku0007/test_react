import React from "react";
import Tableone from './Tableone';
import Tabletwo from './Tabletwo';
import Tablethree from './Tablethree';
import Tablefour from './Tablefour';
import Tablefive from './Tablefive';
import Tablesix from './Tablesix';
import './Home.css';
import { Col, Container, Row } from "react-bootstrap";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tableone: ['Paul Thomas', 'Celia Gibson', 'Gary Owens', 'Eliza Larson', 'Ola Vasquez'],
            tabletwo: ['Dustin Walters', 'Mattie Floyd', 'Don Flowers', 'Winifred Garcia', 'Victor Waters', 'Clara Rowe'],
            tablethree: ['Sally Bryan', 'Arthur Crawford', 'Charles Andrews', 'Leila Fisher'],
            tablefour: ['Larry Mathis', 'Genevieve Gomez', 'Georgie Ingram', 'Callie Bryan', 'Eliza Wong'],
            tablefive: ['Edwin Park', 'Corey Morales', 'Nathaniel Hawkins', 'Nelle Cook', 'Phillip Schneider'],
            tablesix: ['Maurice Mitchell', 'Lena Clayton', 'Calvin Pierce', 'Seth Powell', 'Mike Bowen', 'Richard Moss']
		}
	}
	render() {
		return (
            <Container fluid>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="bg_yellow">                            
                            <h3 className="mb-3">Table 1</h3>
                            <p>Seats: 5/6</p>
                            <Tableone tableone={this.state.tableone} />	
                        </div>                        
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="bg_yellow">
                            <h3 className="mb-3">Table 2</h3>
                            <p>Seats: 6/8</p>
                            <Tabletwo tabletwo={this.state.tabletwo} />
                        </div>	
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="bg_yellow">
                            <h3 className="mb-3">Table 3</h3>
                            <p>Seats: 4/6</p>
                            <Tablethree tablethree={this.state.tablethree} />	
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="bg_yellow">
                            <h3 className="mb-3">Table 4</h3>
                            <p>Seats: 5/8</p>
                            <Tablefour tablefour={this.state.tablefour} />
                        </div>	
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="bg_yellow">
                            <h3 className="mb-3">Table 5</h3>
                            <p>Seats: 5/6</p>
                            <Tablefive tablefive={this.state.tablefive} />
                        </div>	
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="bg_yellow">
                            <h3 className="mb-3">Table 6</h3>
                            <p>Seats: 6/8</p>
                            <Tablesix tablesix={this.state.tablesix} />	
                        </div>
                    </Col>
                </Row>
            </Container>
		)
	}
}

export default Home;
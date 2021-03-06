import React from 'react';
import { Card } from "react-bootstrap";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import t920 from '../images/t920.png';
import t140 from '../images/t140.png';
import gh5200 from '../images/gh5200.png';
import Alert from 'react-bootstrap/Alert';


export default function cards() {
    return (
        <div>
            <Alert key="primary" variant="secondary" className="my-2"><h2><b>Nos Solutions</b></h2></Alert>
            <Row xs={1} sm={1} md={1} lg={3}>
                <Col className="my-2">
                    <Card>
                        <Card.Header className="text-center text-md-right">
                            <Card.Title><b>Fmb920</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><b className="text-primary">Traceur Léger</b></Card.Subtitle>
                        </Card.Header>
                        <Card.Img variant="top" src={t920} />
                        <Card.Body>
                            <Card.Text>
                                Le Fmb920 est un petit traceur professionnel avec antenne GPS et Batterie intégrées,
                                il permet la collecte des positions et la coupure de moteur à distance,
                                c’est la solution efficace contre les abus d’utilisation pour les particuliers,
                                les gestionnaires de parcs légers.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center text-md-right"><h2><b>Prix : 900 Dhs</b></h2></Card.Footer>
                    </Card>
                </Col>
                <Col className="mb-2">
                    <Card>
                        <Card.Header className="text-center text-md-right">
                            <Card.Title><b>Fmb140</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><b className="text-danger">Solution Avancée</b></Card.Subtitle>
                        </Card.Header>
                        <Card.Img variant="top" src={t140}/>
                        <Card.Body>
                            <Card.Text>
                                Le FMB140 est la solution complète pour les professionnels de la logistique,
                                Ce Boitier seul peut recourir à différentes Besoins, il est conçu pour les solutions
                                complexes ou la géolocalisation va en parallèle a d'autres tâches en monitoring.
                                Une solution tout en un centralisée et pratique.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center text-md-right"><h2><b>Prix : 1 400 Dhs</b></h2></Card.Footer>
                    </Card>
                </Col>
                <Col className="mb-2">
                    <Card>
                        <Card.Header className="text-center text-md-right">
                            <Card.Title><b>Gh5200</b></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><b className="text-success">Traceur Personnel</b></Card.Subtitle>
                        </Card.Header>
                        <Card.Img variant="top" src={gh5200} />
                        <Card.Body>
                            <Card.Text>
                                Ce Nouveau boitier releve les positions des Agents en Service pour les envoie au serveur, 
                                Il a l’avantage d'avoir une batterie intégrée à grande autonomie permettant une gestion 
                                optimale des équipes sur le terrain; 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center text-md-right"><h2><b>Prix : 1 200 Dhs</b></h2></Card.Footer>
                    </Card>
                </Col>
            </Row>

        </div>)
}
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
            <Alert key="primary" variant="secondary" className="my-2">Nos Solutions</Alert>
            <Row xs={1} lg={3}>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>Fmb920</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Traceur Léger</Card.Subtitle>
                        </Card.Header>
                        <Card.Img variant="top" src={t920} style={{ width: '18rem' }} />
                        <Card.Body>
                            <Card.Text>
                                Le Fmb920est un petit traceur professionnel avec antennes GPS et Batterie intégrées,
                                il permet la collecte des positions et la coupure de moteur à distance,
                                c’est la solution efficace contre les abus d’utilisation pour les particuliers,
                                les gestionnaires de parcs
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted"><h2>Prix : 900 Dhs</h2></Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>Fmb140</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Solution Avancée</Card.Subtitle>
                        </Card.Header>
                        <Card.Img variant="top" src={t140} style={{ width: '18rem' }} />
                        <Card.Body>
                            <Card.Text>
                                Le FMB140 et la solution complète pour les professionnels de la logistique,
                                ou un seul boitier peut faire différentes taches, il est conçu pour les solutions
                                complexes, il permet la géolocalisation, la lecture OBD, DTS, FUEL CAN DATA,
                                Tachéographe.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted"><h2>Prix : 1 400 Dhs</h2></Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>Gh5200</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Traceur Personnel</Card.Subtitle>
                        </Card.Header>
                        <Card.Img variant="top" src={gh5200} style={{ width: '18rem' }} />
                        <Card.Body>
                            <Card.Text>
                                Ce Nouveau boitier relevé les positions et mouvement du personnel
                                et l’envoie au serveur pour une gestion optimale des équipes sur le terrain;
                                il a l’avantage d'avoir une batterie intégrée de grande autonomie permettant
                                une gestion optimale des agents
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted"><h2>Prix : 1 200 Dhs</h2></Card.Footer>
                    </Card>
                </Col>
            </Row>

        </div>)
}
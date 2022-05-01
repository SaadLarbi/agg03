import React from 'react'
import { Card, CardGroup } from "react-bootstrap";
import t920 from '../images/t920.png';
import t140 from '../images/t140.png';
import gh5200 from '../images/gh5200.png';

export default function cards() {
    return (
        <CardGroup>
            <Card className="border-right-0">
                <Card.Title><h1>Fmb920</h1></Card.Title>
                <Card.Img variant="top" src={t920} />
                <Card.Text>Solution pour un Tracking Léger.</Card.Text>
                <Card.Footer><small className="text-muted">Prix : 1 000.00 Dhs/Ht</small></Card.Footer>
            </Card>
            <Card className="border-left-0">
                <Card.Title><h1>Fmb140</h1></Card.Title>
                <Card.Img variant="top" src={t140} />
                <Card.Text>Solution avancée pour les professionnels.</Card.Text>
                <Card.Footer> <small className="text-muted">Prix : 1 500.00 Dhs/Ht</small></Card.Footer>
            </Card>
            <Card className="border-left-0">
                <Card.Title><h1>Gh5200</h1></Card.Title>
                <Card.Img variant="top" src={gh5200} />
                <Card.Text>Pour un meilleur contact entre les collaborateurs.</Card.Text>
                <Card.Footer><small className="text-muted">Prix : 1 200 Dhs/Ht</small></Card.Footer>
            </Card>
        </CardGroup>
    )
}
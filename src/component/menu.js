import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const Menu = () => {
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div className="d-grid gap-2">
                <Button className = "mt-3" variant="warning" disabled>Menu</Button>
                <Button className = "mt-3">Paiement</Button>
                <Button className = "mt-3">Partner</Button>
                <Button className = "mt-3">Collaborator</Button>
                <Button className = "mt-3">Installation</Button>
                <Button className = "mt-3">Unused Geoloc</Button>
                <Button className = "mt-3">Not Geloc</Button>
                <Button className = "mt-3" variant="danger">Load Data From Csv</Button>
            </div>
        )
      )
}

export default Menu
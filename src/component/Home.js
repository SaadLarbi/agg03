import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Card } from "react-bootstrap";

class Home extends Component {
  render() {
    return (      
      <div>
        <Alert key="primary" variant="primary" className="my-2 b-2">Home Page</Alert>
        <Card body className="my-2 b-2" >SLAMTEC est une jeune entreprise marocaine engagée dans l’évolution technologique, par ses
          différents produits et solutions proposée aux professionnels dans le but de
          moderniser leurs businesse quotidien et grâce a son expertise de plus de 10 ans dans le
          domaine de la géolocalisation par gps tracker, SLAMTEC propose une prestation avec un meilleur 
          rapport qualité prix.
        </Card>
      </div>
    )
  }
}
export default Home;
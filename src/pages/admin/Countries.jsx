import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';

const CountriesPage = () => {
    return (
        <Container fluid className="mt-3">
          <Row>
            {/* Sidebar */}
            <Col md={2}>
              <Sidebar />
            </Col>
            </Row>
    </Container>
  );
};

export default CountriesPage;

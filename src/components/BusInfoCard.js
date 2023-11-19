"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";

export default function BusInfoCard() {

  return (
    <Container className="mt-4 border border-gray-2 border rounded p-3">
      <Row>
        <Col xs={12} md={6}>
          <h4>Bussi info</h4>
          <p>Firma: company.state</p>
          <p>Start: from.name</p>
          <p>Lõpp: to.name</p>          
        </Col>
        <Col xs={12} md={6}>
          <h4>Teekond</h4>
          <p>start.date - end.date</p>
          <p>Kaugus: distance</p>
          <p>Hind: price</p>
        </Col>
      </Row>
    </Container>
  );
};


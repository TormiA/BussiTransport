"use client"
import React, { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useRouter } from "next/navigation";

export default function BusSearch() {
  const [selectedDate, setSelectedDate] = useState("");
  const [fromLoc, setFromLoc] = useState([]);
  const [toLoc, setToLoc] = useState([]);
  const router = useRouter();

  const fetcher = (url) => fetch("/buses.json").then((res) => res.json());

  const { data: routeData, error } = useSWR("/buses.json", fetcher);

  if (error) {
    console.error("Error fetching data:", error);
  }

  const handleSubmit = () => {
    router.push({
      pathname: "/busdetails",
      query: {
        date: selectedDate,
        fromLoc: fromLoc[0]?.name || "",
        toLoc: toLoc[0]?.name || "" 
      }
    });
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Vaata Busse</h2>
      <Form>
        <Row>
          <Col md={3}>
            <InputGroup className="mb-3">
              {routeData ? (
                <Typeahead
                  id="fromLocField"
                  labelKey="name"
                  options={routeData.routes.map(route => route.from.name)}
                  selected={fromLoc}
                  onChange={selected => setFromLoc(selected)}
                  placeholder="Select route start"
                />
              ) : null}
            </InputGroup>
          </Col>
          <Col md={3}>
            <InputGroup className="mb-3">
              {routeData ? (
                <Typeahead
                  id="toLocField"
                  labelKey="name"
                  options={routeData.routes.map(route => route.to.name)}
                  selected={toLoc}
                  onChange={selected => setToLoc(selected)}
                  placeholder="Select a route destination"
                />
              ) : null}
            </InputGroup>
          </Col>
          <Col md={3}>
            <InputGroup className="mb-3">
              <Form.Control
                type="date"
                placeholder="Choose a date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={3}>
                <Button onClick={handleSubmit}>Search Buses</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
        <Accordion.Body>
        The main difference between uncontrolled and controlled components is that uncontrolled components allow the browser to manage the input value, while controlled components give React complete control over the input value. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to validate React props using PropTypes?</Accordion.Header>
        <Accordion.Body>
        React provides a library called PropTypes that allows you to validate the type and shape of the props passed to a component. PropTypes can be used to catch errors early in development, improve code readability, and document component APIs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
        <Accordion.Body>
        A custom hook is a reusable function in React that encapsulates some common stateful or side-effectful logic, which can be shared across multiple components. Custom hooks allow developers to abstract away complex logic into a simple function and make it easier to reuse code.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Tell us the difference between nodejs and express js.</Accordion.Header>
        <Accordion.Body>
        Node.js and Express.js are two popular JavaScript-based technologies used for building web applications. Node.js is a runtime environment that allows developers to execute JavaScript on the server-side, while Express.js is a framework built on top of Node.js that provides a set of features for building web applications.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default Blog;
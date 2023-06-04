import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(err) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    } else return this.props.children;
  }
}
export default ErrorBoundary;

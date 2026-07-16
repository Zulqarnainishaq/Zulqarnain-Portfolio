import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Minimal error boundary. If a child (e.g. the WebGL 3D scene) throws,
 * we silently render the fallback so the rest of the page keeps working.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.warn('[ErrorBoundary] caught:', error?.message || error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback || null;
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  fallback: PropTypes.node,
};

export default ErrorBoundary;

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            if (!this.props.loggedIn) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.loggedIn) {
                this.context.router.push('/');
            }
        }

        render() {
            return (
                <div>
                    { this.props.loggedIn && <ComposedComponent {...this.props} /> }
                </div>
            );
        }
    }

    function mapStateToProps(state) {
        return { loggedIn: state.auth.loggedIn };
    }

    return connect(mapStateToProps)(Authentication);
}

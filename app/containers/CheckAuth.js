import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkAuth} from '../actions/auth'

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if (!this.props.loggedIn) {
                this.props.checkAuth();
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.loggedIn) {
                this.props.checkAuth();
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { loggedIn: state.auth.loggedIn };
    }

    function mapDispatchToProps(dispatch) {
        return {
            checkAuth : () => {
                dispatch(checkAuth())
            }
        };
    }

    return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}

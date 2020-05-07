import React, { Component, Fragment } from 'react'

export class Spinner extends Component {
    static propTypes = {

    }

    render() {
        return (
            <Fragment>
                <i className="fa fa-spinner fa-spin"> </i>
            </Fragment>
        )
    }
}

export default Spinner

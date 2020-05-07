import React, { Component } from 'react'

export class Paginate extends Component {
    state = {
        page: 1
    };
    onClick = (e) => {
        this.setState({ page: e }, () => {
        this.props.searching(this.state);
        }); 
    }

    render() {
        return (
            <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                {
                    this.state.page > 1 &&
                    <button className="btn btn-block btn-light" onClick={() => this.onClick(this.state.page -1)} > Prev </button>
                }
                <button className="btn btn-dark btn-block" onClick={() => this.onClick(this.state.page + 1)}> Next </button>
            </nav>
        )
    }
}

export default Paginate

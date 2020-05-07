import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';

class Search extends Component {
    state = {
        text: '',
        postcode: 'LS13 3QB',
        distance: 5,
        minPrice: 0,
        maxPrice: 10,
        page: 1,
        isOpen: true
    };

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searching(this.state);
        this.setState({ text: '' });
        this.toggle();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Collapse isOpen={this.state.isOpen}>
                        <Card>
                            <CardBody>
                                <input 
                                type="text" 
                                name="text" 
                                placeholder="Search..."
                                value={this.state.text}
                                onChange={this.onChange} />

                                <div className="row">
                                    <div className="col my-1">
                                        <label htmlFor="minPrice" className="text-muted">Minimal Price</label>
                                        <input 
                                            type="text" 
                                            name="minPrice" 
                                            value={this.state.minPrice}
                                            onChange={this.onChange} 
                                            className="form-control " 
                                            placeholder="Min Price"/>
                                    </div>
                                    <div className="col my-1">
                                        <label htmlFor="maxPrice" className="text-muted">Maximum Price</label>
                                        <input 
                                            type="text" 
                                            name="maxPrice" 
                                            value={this.state.maxPrice}
                                            onChange={this.onChange} 
                                            className="form-control" 
                                            placeholder="Max Price"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col my-1">
                                        <label htmlFor="postcode" className="text-muted">Postcode</label>
                                        <input 
                                            type="text" 
                                            name="postcode" 
                                            value={this.state.postcode}
                                            onChange={this.onChange} 
                                            className="form-control" 
                                            placeholder="Postcode"/>
                                    </div>
                                    <div className="col my-1">
                                        <label htmlFor="distance" className="text-muted">Distance (Miles)</label>
                                        <input 
                                            type="text" 
                                            name="distance" 
                                            value={this.state.distance}
                                            onChange={this.onChange} 
                                            className="form-control " 
                                            placeholder="Distance (Miles)"/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                    {
                        this.state.isOpen &&  <button type="submit" className="btn btn-dark btn-block">Submit</button>
                    }
                </form>
                {
                    !this.state.isOpen &&  <button className="btn btn-dark btn-block" onClick={this.toggle}>Toggle</button>
                }
            </div>
        )
    }
}

export default Search

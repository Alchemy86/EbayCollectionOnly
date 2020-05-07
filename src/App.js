import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Navbar from './components/layout/Navbar';
import EbayItems from './components/ebay/EbayItems';
import Search from './components/common/Search';
import Paginate from './components/common/Paginate';
import Spinner from './components/layout/Spinner';

class App extends Component {

  state = {
    users: [],
    ebayItems: undefined,
    loading: false,
    submissionData: {}
  }

  async componentDidMount() {
    // this.searching();
  }

  searching = async (submissionData) => {
    this.setState({loading: true});
    this.setState({ebayItems: undefined});
    // const res = await axios.get(`https://api.github.com/users?client_id=
    //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    const ebayData = await axios.post('https://prod-api.moneysavingexpert.com/local-ebay-deals-mapper/local-ebay-deals-mapper/', {
      distance: submissionData?.distance || "5", 
      maxPrice: submissionData?.maxPrice || "10", 
      minPrice: submissionData?.minPrice || "",
      category: "0", 
      item: submissionData?.text,
      pageNumber: submissionData?.page || 1,
      postcode: submissionData?.postcode || "LS13 3QB",
      sortby: "ends"});
      console.log('Ebay Data', ebayData.data.data);
    
    this.setState({loading: false, ebayItems: ebayData.data.data, submissionData: submissionData});
  }

  render() {
      return (
        <div className="App">
          <Navbar title="Ebay Collection Only Finder"/>
          <div className="container">
            <Search searching={this.searching}/>
            {
              this.state.loading &&  <Spinner />
            }
            {
              !this.state.loading && this.state.ebayItems && <EbayItems items={this.state.ebayItems}/>
            }

            {/* <Users users={this.state.users} loading={this.state.loading}/> */}
            <div style={{ display: !this.state.loading && this.state.ebayItems ? null : 'none' }}>
              <Paginate searching={this.searching} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;

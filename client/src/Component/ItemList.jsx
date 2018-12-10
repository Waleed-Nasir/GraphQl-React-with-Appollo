import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";



class ListComponent extends Component {
  render() {
    return (
        <Query
        query={gql`
          {
            storeStockDB{
             name
             company
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
    
          return data.storeStockDB.map((info) => (
            <div key={info} style={{width:'240px',height:'80px',backgroundColor:'skyblue',float:'left',margin:'2%',textAlign:'left',padding:'2%'}}>
              <p>Company: {info.company}</p>
              <p>User Name : {info.name}</p>
            </div>
          ));
        }}
      </Query>
    );
  }
}

export default ListComponent;

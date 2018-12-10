import React, { Component } from 'react';
import { Query, ApolloConsumer, Mutation } from "react-apollo";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});
const ADD_TODO = gql`
mutation store( $name : String!,$company:String!){
    store(name: $name,company: $company) {
        name
        company
      }
}
`
class CreateList extends Component {

    render() {
        return (
            <Mutation mutation={ADD_TODO}>
      {(store, { data }) => (
        <div>
          <form 
            onSubmit= {e => {
                e.preventDefault();
                store({ variables: {name:this.state.name,company:this.state.company}});
              }}

          >
            <div className="row" >
                                     <div className="col-md-4"><label>Your name:</label></div>
                                     <div className="col-md-8">
                                         <input type="tetx" name="name" title="name" required onChange={(e) => this.setState({ name: e.target.value})} />
                                     </div>
                                 </div>
                                 <div className="row">
                                     <div className="col-md-4"><label>Your Company</label></div>
                                     <div className="col-md-8">
                                         <input type="text" onChange={(e) => this.setState({ company: e.target.value})} name="company" title="company" required />
                                     </div>
                                 </div>
            <button type="submit">Add Company</button>
          </form>
        </div>
      )}
    </Mutation>
//             <ApolloConsumer>
//                 {client => (
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <h4 className="content-heading">Add Company</h4>
//                             <form id="loginForm"


//                             >
//                                 <div className="row">
//                                     <div className="col-md-4"><label>Your name:</label></div>
//                                     <div className="col-md-8">
//                                         <input type="tetx" name="name" title="name" required onChange={(e) => this.setState({ name: e.target.value})} />
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-4"><label>Your Company:<br /><span>Requirements</span></label></div>
//                                     <div className="col-md-8">
//                                         <input type="text" onChange={(e) => this.setState({ company: e.target.value})} name="company" title="company" required />
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-4"></div>
//                                     <div className="col-md-8">
//                                         {/* {/ LognIN /} */}
//                                         <button className="btn btn-default btn-orange btn-submit" onClick={
//                                             async (e) => {
//                                                 e.preventDefault();
//                                                 this.setState({ loaderState: true })
//                                                 console.log(this.state.company, this.state.name);
//                                                 const { data } = await client.query({
//                                                     query: Mdta,
//                                                     variables: { company: this.state.company, name: this.state.name }
//                                                 });
//                                                 if (data) {
//                                                     if (data!= this.state.name) {
//                                                         this.setState({ signinError: "Email or password is incorrect", loaderState: false })
//                                                     }
//                                                     else {

//                                                         // localStorage.setItem('userdata', JSON.stringify(data.signIn));
//                                                         this.crossBtn.current.click()
//                                                         this.setState({ loaderState: false })
//                                                         // this.props.history.push("/createretro");

//                                                     }

//                                                 }
//                                                 else {
//                                                     this.setState({ signinError: "This email does not exists", loaderState: false })
//                                                 }
//                                             }
//                                         }

//                                             id="loginbutton" type="submit">Add </button>
//                                     </div>
//                                     {/* <p className={this.state.signinError ? "showError" : "hideError"}>{this.state.signinError}</p> */}
//                                 </div>
//                             </form>
//                         </div>
//                         {/* <div className="modal-footer">
// <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
// <button type="button" className="btn btn-primary">Save changes</button>
// </div> */}
//                     </div>
//                 )}
//             </ApolloConsumer>
        );
    }
}

export default CreateList;

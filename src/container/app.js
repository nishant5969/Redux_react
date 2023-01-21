import React, {Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../action/index';
import MovieList from '../components/movies_list';


class App extends Component{

   componentDidMount(){
      this.props.movieslist()
   }
   
    render(){
        return(
                 <div>
                    <MovieList lists={this.props.data}></MovieList>
                 </div>
           
        )
    }

}


function mapStatetoProps(state){
  console.log(state)
  return{
    data:state.movies
  }
}

export default connect(mapStatetoProps,action)(App);


import React,{ Component } from 'react'; //{Component} came from extends Recact.component(now Component) on the class SearchBar. you only use this line when you declare a class component 


//define new class called search bar and give it a bunch of added functionality.always define render then retutn JSX


// onChange is a build in function which keeps track of the change when the user types; event is the input of the user
//constructor-called whenver theres a new instance of SearchBar
//super(props)-calling the parent method 
//this.state-initialize using a new object;updates and record user as they type.only class components has this.
//.setState-use to manipulate or change/update state. it tells react the changes that occurs

class SearchBar extends Component {
 constructor(props) {
  super(props);

  this.state = { term: ''}; //declaring state
 } 

  render() {
     return (
     <div> 
      <input 
      value={this.state.term} //this is a controlled input
      onChange= {event => this.setState({term: event.target.value})} />
      </div>
  
      );
  }
}
export default SearchBar;
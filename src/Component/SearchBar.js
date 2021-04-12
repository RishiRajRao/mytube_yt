import React from 'react';

class SearchBar extends React.Component{
    state={term:""}

    onChangeSubmit=(e)=>{
        this.setState({term:e.target.value})

    }
    onFormSubmit=(event)=>{
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);

    }
    render(){
          return(
              <div className='search-bar ui segment'>

                  <form onSubmit={this.onFormSubmit} className='ui form'>
                      <div className='field'>
                          <label htmlFor="#">video search</label>
                          <input type="text" value={this.state.term} onChange={this.onChangeSubmit}/>
                      </div>
                  </form>
              </div>
          )
    }

}
export default SearchBar;
import React from 'react';

// Controlled
class SearchInput extends React.Component {

    state={ entry:'' }

    // Re-create a new version of function called onFormSubmit

   /*  constructor(){
        super()
        this.onFormSubmit = this.onFormSubmit.bind(this)

        OR

        onFormSubmit = (event) => {
        event.preventDefault() // prevent that behavior by calling event
        console.log(this.state.entry)
    }
    }*/
    
    onFormSubmit = (event) => {
        event.preventDefault() // prevent that behavior by calling event
        console.log(this.state.entry)
    }

    render() { // Rendered
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                        <input 
                            type="text" 
                            placeholder='search...' 
                            onChange={(event) => this.setState({entry:event.target.value})} 
                            value={this.state.entry}
                        /> 
                        <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;
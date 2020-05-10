import React from 'react';

class SearchInput extends React.Component {

    // This onInputChange is a community convention
    // Always put 
    // on 
    // Input - The element that we are assigning to callback
    // Change - The event is change event it simply on input change

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() { // Rendered
        return (
            <div className='ui segment'>
                <form action="" className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                        <input 
                            type="text" 
                            placeholder='search...' 
                            onChange={ this.onInputChange } // onSubmit, onClick
/* 
    NOTE: Do not put a set of parentheses  at the end of it when our component is rendered.
    Right: onInputChange
    Wrong: onInputChange()
*/
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
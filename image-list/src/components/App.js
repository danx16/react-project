import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';


class App extends React.Component {
    
    state = { images:[] }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=16476138-de1a69ef4e3acf654b17bbcb6&q=${entry}&image_type=photo`)
        console.log(this)  
        this.setState({images:response.data.hits})
    }

    render() {
        return(
            <div className='ui container' style={{marginTop:'30px'}} >
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
            We have {this.state.images.length} images
            </div>
        )
    }
}
export default App;
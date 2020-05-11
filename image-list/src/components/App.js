import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
=======
import SearchInput from './SearchInput';
>>>>>>> 039c4b232c7fb70df7fec02865af0b11eed64a62


class App extends React.Component {
    
    state = { images:[] }

    onSearchSubmit = async (entry) => {
       const response = await axios.get(`https://pixabay.com/api/?key=16476138-de1a69ef4e3acf654b17bbcb6&q=${entry}&image_type=photo`);
       this.setState({images:response.data.hits})
    }

    render() {
        return(
            <div className='ui container' style={{marginTop:'30px'}} >
<<<<<<< HEAD
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
            We have {this.state.images.length} images
=======
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                We have {this.state.images.length} images 
>>>>>>> 039c4b232c7fb70df7fec02865af0b11eed64a62
            </div>
        )
    }
}
export default App;
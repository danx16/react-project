import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';


class App extends React.Component {

   async onSearchSubmit(entry){


        console.log(entry);
        
        // Pull axios
        const response = await axios.get(`https://pixabay.com/api/?key=16476138-de1a69ef4e3acf654b17bbcb6&q=${entry}&image_type=photo`)
        // Use `` es2015 back ticks 
        // key = 16476138-de1a69ef4e3acf654b17bbcb6 
        // q = A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters.
        console.log(response.data.hits)
    }

    render() {
        return(
            <div className='ui container' style={{marginTop:'30px'}} >
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}
export default App;
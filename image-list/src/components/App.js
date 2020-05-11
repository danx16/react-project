import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';


class App extends React.Component {

   async onSearchSubmit (entry) {
       const response = await axios.get(`https://pixabay.com/api/?key=16476138-de1a69ef4e3acf654b17bbcb6&q=${entry}&image_type=photo`);
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
import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';


class App extends React.Component {
    
    state = { images:[] }

<<<<<<< HEAD
   async onSearchSubmit (entry) {
       const response = await axios.get(`https://pixabay.com/api/?key=16476138-de1a69ef4e3acf654b17bbcb6&q=${entry}&image_type=photo`);
       console.log(response.data.hits)
   
=======
    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=16476138-de1a69ef4e3acf654b17bbcb6&q=${entry}&image_type=photo`)
        console.log(this)  
        this.setState({images:response.data.hits})
>>>>>>> ff17e19d4983f01ebca049d913260a1be56da15c
    }

    render() {
        return(
            <div className='ui container' style={{marginTop:'30px'}} >
<<<<<<< HEAD
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
=======
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images}/>
>>>>>>> ff17e19d4983f01ebca049d913260a1be56da15c
            </div>
        )
    }
}
export default App;
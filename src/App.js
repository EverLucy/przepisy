import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import axios from 'axios';

function App() {
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
                params: {
                    q: query,
                    app_id: 'ca475a30',
                    app_key: '1e60d79786006365af01468ab2c20acc',
                    type: 'public'
                }
            });
            setRecipes(response.data.hits);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <Header />
            <SearchBar onSearch={handleSearch} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default App;

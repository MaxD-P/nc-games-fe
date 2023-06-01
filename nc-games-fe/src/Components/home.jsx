import React, { useState, useEffect } from "react";
import { fetchCategories } from "./utils";
import { Link } from "react-router-dom"



function Home(){
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchCategories()
        .then((data) => {
            setCategories(data);
            setIsLoading(false);
        })
    }, [])

    if (isLoading) return <p>Loading homepage...</p>;

    return(
        <>
        <h1>Welcome to NC games!</h1>
        <h2>Choose your category:</h2>
        <div className="category-grid">
        {categories.map((category) => (
          <div className="category-box" key={category.slug}>
            <h2>{category.slug}</h2>
          </div>
        ))}
      </div>
      <h2 className="review-header">Or go straight to all our reviews:</h2>
      <Link to="/reviews" className="review-link"> Reviews</Link>

        </>

    )
}

export default Home
import React from 'react';
import Article from '../components/Article';
const articles = [
    {
        id: 1,
        title: 'Najlepszy smartfon w 2021',
        author: 'Marcin Kowalewski',
        text: "Najlepszy smartfon. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis optio consequatur distinctio deleniti dolorem laborum placeat eligendi dicta! Aspernatur, beatae repellat magni libero aliquam assumenda a et natus consequuntur iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iure in nihil consequatur accusantium recusandae ratione sequi deserunt quisquam, possimus quam explicabo officiis itaque reiciendis aspernatur enim molestiae ipsam. Dignissimos." 
    },
    {
        id: 2,
        title: 'Jaki laptop do użytku domowego?',
        author: 'Tomasz Pacyk',
        text: "Laptop do domu. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis optio consequatur distinctio deleniti dolorem laborum placeat eligendi dicta! Aspernatur, beatae repellat magni libero aliquam assumenda a et natus consequuntur iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iure in nihil consequatur accusantium recusandae ratione sequi deserunt quisquam, possimus quam explicabo officiis itaque reiciendis aspernatur enim molestiae ipsam. Dignissimos."
    },
    {
        id: 3,
        title: 'Inteligenty dom',
        author: 'Marta Dębska',
        text: "Twój inteligenty dom. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis optio consequatur distinctio deleniti dolorem laborum placeat eligendi dicta! Aspernatur, beatae repellat magni libero aliquam assumenda a et natus consequuntur iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iure in nihil consequatur accusantium recusandae ratione sequi deserunt quisquam, possimus quam explicabo officiis itaque reiciendis aspernatur enim molestiae ipsam. Dignissimos."
    }
]

const HomePage = () => {
    
    // za pomocą spread (...article) przekazujemy jako props całą tablicę do komponentu Article.js
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))

    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;
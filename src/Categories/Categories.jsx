import * as React from 'react';
import { Link } from 'react-router-dom'

function Categories({ list, handleClick }){
    let copy = [
        {
            id: null,
            name: 'Todos',
            handleClick: handleClick
        },
        ...list
    ];
    return <nav>
        {copy.map(({ id, name }) =>
            <Link className="btn btn-default" key={id} 
                to={id ? `/categoria/${id}-${name}` : '/'}>
                {name}
            </Link>
        )}
    </nav>;
}

export default Categories;
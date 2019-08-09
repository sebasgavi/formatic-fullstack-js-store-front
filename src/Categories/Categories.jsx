import * as React from 'react';

function Categories({ list }){
    let copy = [
        {
            id: 'all',
            name: 'Todos'
        },
        ...list
    ];
    return <nav>
        {copy.map(({ id, name }) => 
            <a href="/" className="btn btn-default" key={id}>
                {name}
            </a>
        )}
    </nav>;
}

export default Categories;
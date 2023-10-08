import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled, css } from 'styled-components';
import '../css/Categories.css';

const categories = [
    {
        name: 'all',
        text: 'All'
    },
    {
        name: 'business',
        text: 'Business'
    },
    {
        name: 'entertainment',
        text: 'Entertainment'
    },
    {
        name: 'health',
        text: 'Health'
    },
    {
        name: 'science',
        text: 'Science'
    },
    {
        name: 'sports',
        text: 'Sports'
    },
    {
        name: 'tech',
        text: 'Tech'
    },
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

// const Category2 = styled.div`
//     font-size: 1.125rem;
//     cursor: pointer;
//     white-space:pre;
//     text-decoration: none;
//     color: inherit;
//     padding-bottom: 0.25rem;

//     &:hover {
//         color: #495057;
//     }

//     ${props => 
//         (props.tttt === 'true') && css`
//             font-weight: 600;
//             border-bottom: 2px solid #22b8cf;
//             color: #22b8cf;
//             &:hover {
//                 color: #3bc9db;
//             }
//         `
//     }

//     & + & {
//         margin-left: 1rem;
//     }
// `;

// const Category = styled(NavLink)`
//     font-size: 1.125rem;
//     cursor: pointer;
//     white-space:pre;
//     text-decoration: none;
//     color: inherit;
//     padding-bottom: 0.25rem;

//     &:hover {
//         color: #495057;
//     }

//     & + & {
//         margin-left: 1rem;
//     }

//     &:checked {
//         color: red;
//     }
// `;


const classNameFunc = ({ isActive }) => {
    return isActive ? "category category-active" : "category";
  };

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <NavLink 
                    key={c.name}
                    className={classNameFunc} 
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                    // className={({isActive}) => {
                    //     console.log("AA"); 
                    //     return  (isActive) ? 'category-active-item' : ''
                    // }}
                >
                    {c.text}
                </NavLink>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
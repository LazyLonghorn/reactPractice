// import React, { useEffect, useState } from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nick, setNick] = useState('');

//     useEffect(() => {
//         console.log('Render!');
//         console.log('R : ' + name);

//         return () => {
//             console.log('cleanup');
//             console.log('C : ' + name);
//         };

//     }, [name]);

//     // useEffect(() => {
//     //     console.log("Mounted");
//     //     return () => { 
//     //         console.log("Unmounted"); 
//     //     }
//     // }, [])

//     const onChangeName = (e) => {
//         setName(e.target.value);
//     }

//     const onChangeNick = (e) => {
//         setNick(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nick} onChange={onChangeNick} />
//             </div>
//             <div>
//                 <div>
//                     <b>Name : </b> {name}
//                 </div>
//                 <div>
//                     <b>Nick : </b> {nick}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Info;



// import React, { useReducer, useEffect, useState } from 'react';

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]: action.value
//     }
// }

// const Info = () => {
//     const [state, dispatch] = useReducer(reducer, {
//         name: '',
//         nick: ''
//     });

//     const {name, nick} = state;
//     const onChange = (e) => {
//         dispatch(e.target);
//     }

//     return (
//         <div>
//             <div>
//                 <input name='name' value={name} onChange={onChange} />
//                 <input name='nick' value={nick} onChange={onChange} />
//             </div>
//             <div>
//                 <div>
//                     <b>Name : </b> {name}
//                 </div>
//                 <div>
//                     <b>Nick : </b> {nick}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Info;

import React from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nick: ''
    });

    const { name, nick } = state;

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange} />
                <input name='nick' value={nick} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>Name : </b> {name}
                </div>
                <div>
                    <b>Nick : </b> {nick}
                </div>
            </div>
        </div>
    );
};

export default Info;
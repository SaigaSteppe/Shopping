import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

function Header(props) {
    const [isOpen, setOpen] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isOpen });

    //group items by size
    let countEachSize = props.cartItems.reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {})

    return (
        <div>
            <header style={{ backgroundColor: '#F6F6F7', width: `100%`, textAlign: 'right' }}>

                <button
                    className="btn content-text"
                    style={{ marginRight: 50 }}
                    {...getToggleProps({
                        onClick: () => setOpen(oldOpen => !oldOpen),
                    })}

                >
                    My cart ( {props.cartItems.length} )
                </button>

                <section {...getCollapseProps()}>

                    {
                        Object.keys(countEachSize).map((item, i) => (
                            <div key={i} style={{ marginTop: 5, marginRight:50 }}>
                                <img src={props.itemImage} style={{maxWidth: '70px'}} alt='cart item'/>
                                <div style={{ display: 'inline-block' }}>
                                    <div>{props.itemName}</div>
                                    <div>{countEachSize[item]} X <b>${props.itemPrice}</b></div>

                                    <div>Size: {item}</div>
                                </div>
                            </div>
                        ))
                    }

                </section>

            </header>
        </div>
    );
}

export default Header;

import React from 'react'

const Boxx = ({ allbox }) => {
    console.log({ allbox })
    return (
        <>
            {allbox.map((onebox) => <div style={{ backgroundColor: onebox, width: "200px", height: "200px" }}>
            </div>)}
        </>
    )
}


export default Boxx
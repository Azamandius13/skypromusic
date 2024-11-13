import PropTypes from "prop-types";
import React from "react";


export function Main({children}) {
    return (
        <main className="main">{children}</main>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired, 
}

export default Main;
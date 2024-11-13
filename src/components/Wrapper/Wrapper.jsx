import React from 'react';
import PropTypes from 'prop-types';


export function Wrapper({children}) {
    return (
        <div className="wrapper">{children}</div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired, // Ожидаем, что children будут узлами
  };

export default Wrapper;
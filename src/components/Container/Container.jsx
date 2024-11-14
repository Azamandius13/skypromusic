
import React from 'react';
import PropTypes from 'prop-types';

export function Container({children}) {
    return (
        <div className="container">{children}</div>

    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired, // Ожидаем, что children будут узлами
  };

export default Container;


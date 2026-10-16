import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
    const [buttons, setStateButtons] = React.useState({leftBtn: false, rightBtn: false});
        const leftBtnClass = cn (
            "btn", "btn-secondary", "left",
            buttons.leftBtn ? "active" : ""
        );
        const rightBtnClass = cn (
            "btn", "btn-secondary", "right",
            buttons.rightBtn ? "active" : ""
        );
        return (
        <div className="btn-group" role="group">
            <button type="button" onClick={() => setStateButtons({leftBtn: true, rightBtn: false})} className={leftBtnClass}>Left</button>
            <button type="button" onClick={() => setStateButtons({leftBtn: false, rightBtn: true})} className={rightBtnClass}>Right</button>
        </div>
        );
  // END
};

export default BtnGroup;
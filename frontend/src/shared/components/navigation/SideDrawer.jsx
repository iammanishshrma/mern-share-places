import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
    const asideRef = useRef();

    const content = (
        <CSSTransition nodeRef={asideRef} in={props.show} timeout={2000} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <aside ref={asideRef} className="side-drawer" onClick={props.onClick}>
                {props.children}
            </aside>
        </CSSTransition>
    );

    return createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;

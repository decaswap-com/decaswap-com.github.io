import React, { useContext } from 'react'
import { AppContext } from './Context'
import { TriggerProps } from './Props'

export function Trigger({
    component = 'button',
    className = 'offcanvas-trigger',
    styles = {},
    children
}: TriggerProps) {
    const { handleOpen, randomId } = useContext(AppContext)

    return (
        <img src="./img/text-center.svg" height="50px" id="menu-ico" onClick={handleOpen} />
    )
}

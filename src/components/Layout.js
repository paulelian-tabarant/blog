import React from "react"
import * as style from './layout.module.css'

export const Layout = (props) => {
    const { layout } = style

    return <div className={layout}>{props.children}</div>
}
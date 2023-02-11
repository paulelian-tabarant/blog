import React from 'react'
import { layout } from './layout.module.css'

interface LayoutProps {}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = (
  props: React.PropsWithChildren<LayoutProps>
) => {
  return <div className={layout}>{props.children}</div>
}

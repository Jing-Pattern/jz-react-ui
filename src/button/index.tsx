
import type { FC, ReactNode } from 'react';
import React from 'react'
export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dashed'
  | 'link'
    | 'text'
 export type ButtonHTMLTypes = 'submit' | 'button' | 'reset'
export interface ButtonProps {
    htmlType?: ButtonHTMLTypes
    children?: any;
    type?: ButtonType;
   sizi?: 'large' | 'middle' | 'small';
   href?: string;
    icon?: ReactNode;
    disabled?: boolean;
   onClick?: React.MouseEventHandler<HTMLElement>
}

const jzButton = 'jz-button';
  const cssSize = (sizi: string|undefined) => {
        switch (sizi) {
            case 'large':
                return {
                    width: '150px',
                    height: '45px'
                }
             case 'middle':
                 return {
                    width: '110px',
                    height: '35px'
                }
            default:
                   return {
                    width: '80px',
                    height: '25px'
                }
        }
  }
    const isString = (children: React.ReactNode) => {
  if (typeof children === 'string') {
    return <span>{children}</span>
  }
  return children
}
const Button: FC<ButtonProps> = ({ htmlType, type, sizi, href, icon, disabled,children, ...restProps }) => {
    const Size = cssSize(sizi)
    const kids = isString(children)
    return (
        <button type={htmlType}
            className={disabled?'':jzButton}
            style={Size}
             disabled={disabled}
            {...restProps}>
            {kids}
            </button>
    )
}
export default Button

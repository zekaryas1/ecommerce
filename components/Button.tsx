import React from "react";

interface Props {
    onClick?: Function,
    children: React.ReactNode,
    className?: string
}

export function PrimaryButton({onClick, children, className}: Props) {
    let defaultClass = "btn text-gray-200 bg-gray-800 hover:bg-gray-700 "
    if (className) {
        defaultClass = defaultClass + className;
    }

    return <button onClick={() => {
        onClick && onClick()
    }} type="button"
                   className={defaultClass}>
        {children}
    </button>
}

export function LightButton({onClick, children, className}: Props) {
    let defaultClass = "btn text-gray-800 bg-gray-200 hover:bg-gray-400 "
    if (className) {
        defaultClass = defaultClass + className;
    }

    return <button onClick={() => {
        onClick && onClick()
    }} type="button"
                   className={defaultClass}>
        {children}
    </button>
}


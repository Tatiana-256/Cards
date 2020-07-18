import React, {CSSProperties} from 'react';


type PropsType = {
    height: number
    width: number
    show: boolean
    enableBackground?: boolean
    backgroundStyle?: CSSProperties
    modalStyle?: CSSProperties
    backgroundOnClick?: () => void
    modalOnClick?: () => void
    children: React.ReactNode
}


export const Module = (props: PropsType) => {
    const top = `calc(50vh - ${props.height / 2}px)`;
    const left = `calc(50vw - ${props.width / 2}px)`;

    if (!props.show) return null;

    return (
        <>
            {props.enableBackground && <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vw',
                    height: '100vh',

                    background: 'black',
                    opacity: 0.35,
                    zIndex: 0,

                    ...props.backgroundStyle,
                }}
                onClick={props.backgroundOnClick}
            />}
            <div
                style={{
                    position: 'fixed',
                    top,
                    left,
                    width: props.width,
                    height: props.height,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',

                    background: 'white',
                    borderRadius: '30px',
                    color: 'white',
                    zIndex: 1,

                    ...props.modalStyle,
                }}
                onClick={props.modalOnClick}
            >
                {props.children}
            </div>
        </>
    );

}

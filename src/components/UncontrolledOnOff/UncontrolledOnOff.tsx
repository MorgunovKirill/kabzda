import s from './UncontrolledOnOff.module.css'
import {FC, useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff:FC<PropsType> = ({onChange}) => {
    const [tumberState, setTumblerState] = useState<boolean>(false)
    const onClicked = () => {
        setTumblerState(true)
        onChange(true)
    }
    const offClicked = () => {
        setTumblerState(false)
        onChange(false)
    }

    return (
        <div className={s.container}>
            <div className={s.tumbler}>
                <button
                    className={`${s.tumbler__button} ${s.tumbler__on} ${tumberState && s.active}`}
                    onClick={onClicked}
                >On
                </button>
                <button
                    className={`${s.tumbler__button} ${s.tumbler__off} ${!tumberState && s.active}`}
                    onClick={offClicked}
                >Off
                </button>
            </div>
            <div className={`${s.indicator} ${tumberState && s.active}`}></div>
        </div>
    )
}

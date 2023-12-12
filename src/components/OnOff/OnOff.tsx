import s from './OnOff.module.css'

type OnOffPropsType = {
    value: boolean,
    setTumblerState: (value: boolean) => void
}

export const OnOff = ({value, setTumblerState}: OnOffPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.tumbler}>
                <button
                    className={`${s.tumbler__button} ${s.tumbler__on} ${value && s.active}`}
                    onClick={() => {
                        setTumblerState(true)
                    }}
                >On
                </button>
                <button
                    className={`${s.tumbler__button} ${s.tumbler__off} ${!value && s.active}`}
                    onClick={() => {
                        setTumblerState(false)
                    }}
                >Off
                </button>
            </div>
            <div className={`${s.indicator} ${value && s.active}`}></div>
        </div>
    )
}

import s from './Select.module.css'
import {KeyboardEvent, useEffect, useState} from "react";

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: string | null
    onChange: (value: string) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [isActive, setIsActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setIsActive(!isActive)
    }

    const onItemClick = (item: ItemType) => {
        props.onChange(item.value);
        setIsActive(false);
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendent = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
                    if (pretendent) {
                        props.onChange(pretendent.value);
                        return;
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setIsActive(false)
        }
    }

    return (
        <div className='select'>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    isActive && <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                            key={i.value}
                            onClick={() => onItemClick(i)}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </div>
    )
}

import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Select} from './Select';
import React, {useState} from "react";

const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const WithValue = () => {
    const [value, setValue] = useState<string | null>('2')

    const items = [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Kiev"}
    ];
    return <>
        <Select value={value} onChange={setValue} items={items}/>
    </>
};

export const Withoutvalue = () => {
    const [value, setValue] = useState<string | null>(null)

    const items = [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Kiev"}
    ];
    return <>
        <Select value={value} onChange={setValue} items={items}/>
    </>
};


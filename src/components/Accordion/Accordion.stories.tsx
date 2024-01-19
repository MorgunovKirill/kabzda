import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const OpenedAccordion = () => {
   return  <Accordion title={'First'} collapsed={true} setIsCollapsed={()=>{}} />
};

export const CollapsedAccordion = () => {
    return  <Accordion title={'Second'} collapsed={false} setIsCollapsed={()=>{}} />
};

export const ControlledAccordion = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const toggleAccordion = () => {
        setIsCollapsed(!isCollapsed);
    }
    return  <Accordion title={'First'} collapsed={isCollapsed} setIsCollapsed={toggleAccordion} />
};

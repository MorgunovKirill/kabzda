import type { Meta, StoryObj } from '@storybook/react';

import { UncontrolledAccordion } from './Accordion';

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};

export default meta;
type Story = StoryObj<typeof UncontrolledAccordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const UncontrolledAccordionPrimary = () => {
    return <UncontrolledAccordion title={'primary'} />
}

import React from 'react';
import Card from "../components/card";
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

test("Matches", () => {
    const component = renderer.create(
        <Card
            icon="make-payment.png"
            title="This is not a card"
            desc="This is a card"
            onClick={() => {}} />
    );

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test("Renders <HR /> & <div>", () => {
    const wrapper = shallow(
        <Card
            icon="make-payment.png"
            title="This is not a card"
            desc="This is a card"
            onClick={() => {}} />
    )

    expect(wrapper.find("hr")).toHaveLength(2);
    expect(wrapper.find("div")).toHaveLength(2);
})
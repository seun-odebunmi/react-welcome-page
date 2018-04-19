import React from 'react';
import Card from "../components/card";
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ shallow, mount } from 'enzyme';
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

test("Matches", () => {
    const component = renderer.create(
        <Card
            icon="make-payment.png"
            title="This is a card"
            desc="This is a card"
            onClick={() => {}} />
    );

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test("Renders <HR /> & <div>", () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
        <Card
            icon="make-payment.png"
            title="This is not a card"
            desc="This is a card"
            onClick={onButtonClick} />
    )

  
    wrapper.find(".card").simulate('click');
    wrapper.find(".card").simulate('click');
    expect(wrapper.props().desc).toBe("This is a card")
    // console.log(onButtonClick);
    expect(onButtonClick).toHaveProperty('callCount', 2);
})
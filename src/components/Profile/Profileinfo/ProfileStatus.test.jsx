import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="it-asdfghjkl;" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it-asdfghjkl;");
    });


    test("after creation <span> with status should be displayed with correct status", () => {
      const component = create(<ProfileStatus status="it-asdfghjkl;" />);
      const root = component.root;
      let span = root.findByType("span")
      expect(span.length).not.toBeNull();
    });

    test("after creation <input> with status shouldn't be displayed with correct status", () => {
      const component = create(<ProfileStatus status="it-asdfghjkl;" />);
      const root = component.root;
      expect(() => {
        let input = root.findByType("input")
      }).toThrow();
    });

    test("after creation <span> with status should be displayed with correct text status", () => {
      const component = create(<ProfileStatus status="it-asdfghjkl;" />);
      const root = component.root;
      let span = root.findByType("span")
      expect(span.children[0]).toBe("it-asdfghjkl;");
    });
    
    test("input should displayed in editMode istead of span", () => {
      const component = create(<ProfileStatus status="it-asdfghjkl;" />);
      const root = component.root;
      let span = root.findByType("span")
      span.props.onDoubleClick()
      let input = root.findByType("input") 
      expect(input.props.value).toBe("it-asdfghjkl;");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn()
      const component = create(<ProfileStatus status="it-asdfghjkl;" updateStatus={mockCallback}/>);
      const instance = component.getInstance();
      instance.deactivateEditMode()
      expect(mockCallback.mock.calls.length).toBe(1);
    });
  });
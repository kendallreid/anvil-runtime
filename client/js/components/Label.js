"use strict";

var PyDefUtils = require("PyDefUtils");

/**
id: label
docs_url: /docs/client/components/basic#label
title: Label
tooltip: Learn more about Label
description: |
  ```python
  c = Label(text="This is my label")
  ```

  Labels are useful for displaying text on a form. The user cannot edit text in a label.
*/

module.exports = (pyModule) => {
    pyModule["Label"] = PyDefUtils.mkComponentCls(pyModule, "Label", {
        properties: PyDefUtils.assembleGroupProperties(/*!componentProps(Label)!2*/ ["layout", "text", "appearance", "icon", "tooltip", "user data"], {
            text: { // override the default
                dataBindingProp: true,
                multiline: true,
                suggested: true,
            },
        }),

        events: PyDefUtils.assembleGroupEvents(/*!componentEvents()!2*/ "Label", ["universal"]),

        element: (props) => (
            <PyDefUtils.OuterElement className="anvil-label anvil-inlinable" {...props}>
                <PyDefUtils.IconComponent side="left" {...props} />
                <span refName="text" className="label-text">
                    {Sk.builtin.checkNone(props.text) ? "" : props.text.toString()}
                </span>
                <PyDefUtils.IconComponent side="right" {...props} />
            </PyDefUtils.OuterElement>
        ),
    });
};

/*!defClass(anvil,Label,Component)!*/

/*
 * TO TEST:
 *
 *  - Prop groups: layout, text, appearance
 *  - Override set: text
 *  - Event groups: universal
 *
 */


 


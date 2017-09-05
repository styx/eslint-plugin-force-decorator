/**
 * @fileoverview Forces developer to use @connect
 * @author Mikhail Pabalavets
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/redux-connect"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("redux-connect", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "export connect(mapStateToProps, mapDispatchToProps)(MyComponent);",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});

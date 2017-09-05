# eslint-plugin-force-decorator

Enforces to use decorator form of certain functions

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-force-decorator`:

```
$ npm install eslint-plugin-force-decorator --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-force-decorator` globally.

## Usage

Add `force-decorator` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "force-decorator"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "force-decorator/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here






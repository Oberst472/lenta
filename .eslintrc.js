// https://eslint.org/docs/rules/
// https://vuejs.github.io/eslint-plugin-vue/rules/

module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
        // 'plugin:css-modules/recommended'
    ],
    plugins: [
        // 'flowtype',
        'vue'
        // 'css-modules'
    ],
    rules: {
        'vue/html-end-tags': ['error'],
        'vue/html-quotes': ['error', 'double'],
        'vue/attribute-hyphenation': [
            'error', 'always', {
                ignore: []
            }
        ],
        'vue/html-closing-bracket-spacing': [
            'error', {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'never'
            }
        ],
        'vue/html-indent': [
            'error', 4, {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0
            }
        ],
        'vue/multiline-html-element-content-newline': [
            'error', {
                ignoreWhenEmpty: true,
                ignores: []
            }
        ],
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/no-multi-spaces': ['error'],
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': ['error'],
        'vue/require-prop-types': ['error'],
        'vue/v-bind-style': ['error', 'shorthand'],
        'vue/v-on-style': ['error', 'shorthand'],
        'vue/order-in-components': [
            'error', {
                order: [
                    'el',
                    'name',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    [
                        'components', 'directives', 'filters'
                    ],
                    'extends',
                    'mixins',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'data',
                    'computed',
                    'methods',
                    'watch',
                    'LIFECYCLE_HOOKS',
                    ['template', 'render'],
                    'renderError'
                ]
            }
        ],
        'vue/this-in-template': ['error', 'never'],
        'vue/component-name-in-template-casing': [
            'error', 'PascalCase', {
                ignores: []
            }
        ],

        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        'no-eval': ['error'],
        'no-caller': ['error'],
        'no-eq-null': ['error'],
        'no-invalid-this': ['error'],
        'no-iterator': ['error'],
        'no-labels': ['error'],
        'no-lone-blocks': ['error'],
        'no-loop-func': ['error'],
        'no-multi-spaces': ['error'],
        'no-multi-str': ['error'],
        'no-new-func': ['error'],
        'no-octal-escape': ['error'],
        'no-param-reassign': ['error'],
        'no-proto': ['error'],
        'no-return-assign': ['error'],
        'no-return-await': ['error'],
        'no-script-url': ['error'],
        'no-self-compare': ['error'],
        'no-sequences': ['error'],
        'no-throw-literal': ['error'],
        'no-void': ['error'],
        'prefer-promise-reject-errors': ['error'],
        'no-unmodified-loop-condition': ['error'],
        radix: ['error'],
        'require-await': ['error'],
        'vars-on-top': ['error'],
        yoda: ['error'],
        'block-spacing': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'array-element-newline': ['error', 'consistent'],
        // 'camelcase': ['error', {properties: 'always'}],
        'comma-dangle': ['error', 'never'],
        'func-call-spacing': ['error', 'never'],
        'function-paren-newline': ['error', 'never'],
        'comma-spacing': ['error', {before: false, after: true }],
        'comma-style': ['error', 'last'],
        'consistent-this': ['error', 'that'],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', {mode: 'strict', afterColon: true}],
        'max-classes-per-file': ['error', 1],
        'keyword-spacing': ['error', {before: true, after: true}],
        'max-depth': ['error', {max: 4}],
        'max-nested-callbacks': ['error', {max: 3}],
        'max-params': ['error', { max: 4}],
        'multiline-ternary': ['error', 'always-multiline'],
        'no-array-constructor': ['error'],
        'no-bitwise': ['error'],
        'no-continue': ['error'],
        'quote-props': ['error', 'as-needed'],
        quotes: [
            'error', 'single', { allowTemplateLiterals: true }
        ],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': ['error', { before: true, after: true }],
        // https://eslint.org/docs/rules/new-cap
        // 'new-cap': ['error', { newIsCap: true }],

        // 'max-lines-per-function': ['error', {max: 20, skipBlankLines: true}],
        'no-duplicate-imports': ['error'],
        'no-useless-rename': ['error'],
        'no-var': ['error']
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}

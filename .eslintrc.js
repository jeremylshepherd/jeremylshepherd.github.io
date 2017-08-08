module.exports = {
    "extends": "standard",
    "rules": {
        "semi": [2, "always"],
        "indent": ["error", 4],
        "space-before-function-paren": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "keyword-spacing": 0
    },
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    
};
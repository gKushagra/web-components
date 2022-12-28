module.exports = {
    "mode": "none",
    "entry": {
        main: [
            "./src/components/sidebar.js",
        ]
    },
    "output": {
        "path": __dirname + '/dist',
        "filename": "[name].js"
    }
};
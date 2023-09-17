export default {
    moduleDirectories: [
        'node_modules'
    ],
    transform: {
        "\\.tsx?$": ["ts-jest", "babel-jest"],
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"
    ],
}

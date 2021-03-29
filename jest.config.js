module.exports = {
	"testEnvironment": "node",
	"moduleFileExtensions": [
		"js"
	],
	"rootDir": "./tests",
	preset: '@shelf/jest-mongodb',
	testTimeout: 10000,
	transform: {
		"^.+\\.jsx?$": "babel-jest"
	}
}

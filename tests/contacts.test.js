
const request = require('supertest')
const app = require('../App/app')

describe('GET /api/contacts', () => {
	// It's just so easy to connect to the MongoDB Memory Server
	// By using mongoose.connect
	/*beforeAll(async () => {
		await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
			if (err) {
				console.error(err);
				process.exit(1);
			}
		});
	});*/
	it('Get all Contacts', async () => {
		const response = await request(app)
			.post(`/api/register`)
			.send({
				email: 'hkjhkj@redbonzai.com',
				password: 'kjh98798'
			})
			.expect('Content-Type', '/json/')

		expect(response.statusCode).toEqual(201)
			// .end((err, res) => {
			// 	if (err) {
			// 		return done(err)
			// 	}
			//
			// 	done()
			// })

	})
})


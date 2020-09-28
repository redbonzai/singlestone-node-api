// import mongoose from 'mongoose'
const request = require('supertest')
const express = require('express')

// import Contact from '../models/Contact'
// const {describe, it} = require("@jest/globals");

const app = express()

describe('GET /api/contacts', () => {
	it('response with all created contacts from MongoDB instance', async () => {
		const response = await request(app)
			.get(`/contacts`)
			//.set('Content-Type', 'application/json')
			//.expect('Content-Type', 'application/json')
			//.expect('Content-Type', '/json/')
		expect(response.statusCode).toEqual(200)
			// .end((err, res) => {
			// 	if (err) {
			// 		return done(err)
			// 	}
			//
			// 	done()
			// })

	})
})


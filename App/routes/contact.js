import express from 'express'
const router = express.Router();

import {
	getAllContacts,
	getContact,
	contactById,
	createContact,
	updateContact,
	deleteContact
} from "../controllers/ContactController";
import {getUserByEmail} from "../controllers/UserController";

router.get('/contacts', getAllContacts)
router.get('/contacts/:contactId', contactById, getContact)
router.post('/contacts', getUserByEmail, createContact)
router.put('/contacts/:contactId', contactById, updateContact)
router.delete('/contacts/:contactId', contactById, deleteContact)

router.param('contactId', contactById)

export default router;



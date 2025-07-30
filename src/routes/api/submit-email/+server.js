import Airtable from 'airtable';
import { json } from '@sveltejs/kit';
// import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_EMAILS_TABLE } from '$env/static/private';
const AIRTABLE_API_KEY = '0';
const AIRTABLE_BASE_ID = '0';
const AIRTABLE_EMAILS_TABLE = '0';

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
	console.warn('Airtable environment variables not configured, email saving will be skipped');
}

const base = null;

export async function POST({ request, getClientAddress }) {
	try {
		const { email } = await request.json();
		
		if (!email) {
			return json({ error: 'Email is required' }, { status: 400 });
		}
		
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email format' }, { status: 400 });
		}
		
		// get IP address
		const ip = getClientAddress();
		
		let recordId = null;
		
		return new Response(null, { status: 200 });
		
	} catch (error) {
		console.error('Error saving email to Airtable:', error);
		
		return new Response(null, { status: 418 });
	}
}

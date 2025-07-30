// import { GEOCODER_API_KEY } from '$env/static/private';
const GEOCODER_API_KEY = '0';

/** @type {import('./$types').PageServerLoad} */
export async function load({ request, getClientAddress }) {
	// Get user's IP address
	const userIP = getClientAddress();
	
	
	let locationData = null;
	
	if (false) {
		try {
			// Call the Hack Club geocoding API
			// const response = await fetch(`https://geocoder.hackclub.com/v1/geoip?ip=${userIP}&key=${GEOCODER_API_KEY}`);
			
			// API call disabled, skipping locationData assignment
		} catch (error) {
			console.error('Failed to fetch location data:', error);
		}
	}

	return {
		userCity: null
	};
}

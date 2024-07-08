import { redirect, type Actions, type Cookies } from '@sveltejs/kit';
import type { Result } from '$lib/types/types';
import { GetQuery } from '$lib/utils/queryfunc';
import { userDetailsQuery } from '$lib/queries/name.ts'

const url = 'https://01.kood.tech/api/graphql-engine/v1/graphql';

export async function load({ cookies }: { cookies: Cookies }) {
	const token = cookies.get('token');
	if (!token) throw redirect(303, '/');

	const result: Result = {
		user: null,
		auditRatio: 0,
		auditRatioUp: 0,
		auditRatioDown: 0,
		totalXP: 0,
		XP_Transfers: [],
	};

	try {
		const data = await GetQuery(url, token, userDetailsQuery);

		if (data && data.data && data.data.user && data.data.user.length > 0) {
			const user = data.data.user[0];
			const name = `${user.firstName} ${user.lastName}`;

			result.user = { name }; // Properly initialize the user object with the name property

			console.log(result.user);
			return result;
		} else {
			throw new Error('User data is missing');
		}
	} catch (error) {
		console.error('Error fetching user data:', error);
		throw redirect(303, '/');
	}
}

export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete('token', { path: '/'});
		throw redirect(303, '/');
	}
};

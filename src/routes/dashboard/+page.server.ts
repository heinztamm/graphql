import { redirect, type Actions } from '@sveltejs/kit';
import type { Result } from '$lib/types/types';

export async function load({ cookies }) {
	const token = cookies.get('token');
	if (!token) throw redirect(303, '/');

	const result: Result = {
		user: null,
		auditRatio: 0,
		auditRatioUp: 0,
		auditRatioDown: 0,
	};	
}

export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete('token', { path: '/'});
		throw redirect(303, '/');
	}
};

import { redirect, type Actions } from '@sveltejs/kit';

export async function load({ cookies }) {
	const token = cookies.get('token');
	if (!token) throw redirect(303, '/')
}

export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete('token', { path: '/'});
		throw redirect(303, '/');
	}
};

// import type { Handle } from '@sveltejs/kit';
// import { redirect } from '@sveltejs/kit';
// import { parse } from 'cookie';

// export const handle: Handle = async ({ event, resolve }) => {
//     // console.log(event);
//     const cookies = parse(event.request.headers.get('cookie') || '');
//     const user = cookies.user;


//     // event.locals.user = user; // This assignment is valid even if user is undefined

//     // if (!user && event.url.pathname !== '/') {
//     //     throw redirect(302, '/');
//     // }

//     return await resolve(event);
// };

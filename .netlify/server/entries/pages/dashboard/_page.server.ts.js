import { r as redirect } from "../../../chunks/index.js";
const GetQuery = async (link, token, query, params = {}) => {
  return fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": " application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      query,
      parameters: params
    })
  }).then((response) => response.json());
};
const userDetailsQuery = `
{
    user{
    firstName
    lastName
    id
    campus
    auditRatio
    }
}
`;
function auditAmount(t) {
  return `{
        transaction_aggregate(where: { type: { _eq: ${t} } }) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      `;
}
const XpQuery = `{transaction(where:{type:{_eq:"xp"}, object:{type:{_eq:"project"}}}){
    amount
    object{
      name
    }
}
   transaction_aggregate(where:{type:{_eq:"xp"}, object:{type:{_eq:"project"}}}){
  
  aggregate{
    sum{
      amount
    }
  }
}
}`;
const url = "https://01.kood.tech/api/graphql-engine/v1/graphql";
async function load({ cookies }) {
  const token = cookies.get("token");
  if (!token)
    throw redirect(303, "/");
  const result = {
    user: null,
    auditRatio: 0,
    auditSumUp: 0,
    auditSumDown: 0,
    totalXP: 0,
    XP_Transfers: []
  };
  try {
    const data = await GetQuery(url, token, userDetailsQuery);
    const upAudits = await GetQuery(url, token, auditAmount("up"));
    const downAudits = await GetQuery(url, token, auditAmount("down"));
    const projectsAndXp = await GetQuery(url, token, XpQuery);
    const user = data.data.user[0];
    const name = `${user.firstName} ${user.lastName}`;
    result.user = { name, auditRatio: user.auditRatio };
    result.auditSumUp = upAudits.data.transaction_aggregate.aggregate.sum.amount;
    result.auditSumDown = downAudits.data.transaction_aggregate.aggregate.sum.amount;
    result.totalXP = projectsAndXp.data.transaction_aggregate.aggregate.sum.amount;
    result.XP_Transfers = projectsAndXp.data.transaction;
    return result;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw redirect(303, "/");
  }
}
const actions = {
  logout: async ({ cookies }) => {
    cookies.delete("token", { path: "/" });
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};

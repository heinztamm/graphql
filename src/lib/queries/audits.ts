export const auditRatio: string = `{user {auditRatio}}`;

export function auditAmount(t: string): string {
    return `{
        transaction_aggregate(where: { type: { _eq: ${t} } }) {
          aggregate {
            sum {
              amount
            }
            count
          }
        }
      }
      `;
}
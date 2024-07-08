export interface User {
	id: number;
	name: string;
}
 
export interface Result {
    user: User | null;
    auditRatio: number;
	auditRatioUp: number;
	auditRatioDown: number;
    totalXP: number;
    XP_Transfers: number[];
}
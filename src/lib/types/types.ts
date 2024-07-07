export interface User {
	id: number;
	name: string;
<<<<<<< HEAD
    auditRatio: number;
}

export interface Object {
    name: string;
}
export interface Project {
    object: Object;
    amount: number;
=======
>>>>>>> small changes
}

export interface Result {
    user: User | null;
    auditRatio: number;
<<<<<<< HEAD
	auditSumUp: number;
	auditSumDown: number;
    totalXP: number;
    XP_Transfers: Project[];
}
=======
	auditRatioUp: number;
	auditRatioDown: number;
    totalXP: number;
    XP_Transfers: number[];
}
>>>>>>> small changes

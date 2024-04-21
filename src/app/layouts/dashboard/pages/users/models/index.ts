export type userRole = 'ADMIN' | 'STUDENT';

export interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: userRole;
  createdAt: Date;
}

export enum Grade {
  A = 0,
  B = 1,
  C = 2,
  D = 3,
  F = 4
}



export class enrollmentModel {
    enrollmentID: number | undefined;
    courseID: number | undefined;
    studentID: number | undefined;
    grade: Grade |undefined
}
declare interface UserPublic {
  userId: number,
  id: number,
  name: string,
  email: string,
  authLevel: number; // 1: 일반, 2: 전문가, 3: 관리자
}

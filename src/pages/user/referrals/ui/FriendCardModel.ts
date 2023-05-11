export interface InvitedUserModel {
  photo: string;
  uname: string;
  balance: number;
  id: number
}

export interface FriendCardModel {
  deductions: number,
  invitedUser: InvitedUserModel
}


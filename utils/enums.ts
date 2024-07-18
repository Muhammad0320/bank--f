export type UserUpdatesObj = {
  timeStamp: Date;

  old: string;

  new: string;

  updatedField: string;
};

export enum UserStatus {
  Idle = 'idle',
  Active = 'active',
}

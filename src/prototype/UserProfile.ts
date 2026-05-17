import { UserProfilePrototype } from "./UserProfilePrototype";

export class UserProfile implements UserProfilePrototype {
  public username: string;
  public department: 'finance' | 'engineering' | 'marketing';
  public permissions: {
    canEditUsers: boolean;
    canApproveBudget: boolean;
    canAccessInternalTools: boolean;
  };

  constructor(
    username: string,
    department: 'finance' | 'engineering' | 'marketing',
    permissions: {
      canEditUsers: boolean;
      canApproveBudget: boolean;
      canAccessInternalTools: boolean;
    }
  ) {
    this.username = username;
    this.department = department;
    this.permissions = permissions;
  }

  public clone(): UserProfile {
    const clonedPermissions = {
      ...this.permissions
    };

    return new UserProfile(this.username, this.department, clonedPermissions);
  }
}

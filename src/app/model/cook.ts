import { FileHandle } from "./file-handle.model";

export class Role {
    roleId: number = 2;
    roleDesc?: String;
}

export interface Cook {
    email?: string;
    role?: Role;
    picture?: FileHandle;
    firstName?: string;
    lastName?: string;
    address?: string;
    aboutMe?: string;
    rating?: number;
    numRatings?: number;
    banned?: Boolean;
    password?: string;
    numViews?: number;
}

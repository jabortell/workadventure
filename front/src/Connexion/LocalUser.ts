export interface CharacterTexture {
    id: number,
    level: number,
    url: string,
    rights: string
}

export const maxUserNameLength = 8;

export function isUserNameValid(value: string): boolean {
    return /^[A-Za-z]{1,8}$/.exec(value) !== null;
}

export function areCharacterLayersValid(value: string[]): boolean {
    if (!value.length) return false;
    for (let i = 0; i < value.length; i++) {
        if (/^\w+$/.exec(value[i]) === null) {
            return false;
        }
    }
    return true;
}

export class LocalUser {
    constructor(public readonly uuid:string, public readonly jwtToken: string, public readonly textures: CharacterTexture[]) {
    }
}

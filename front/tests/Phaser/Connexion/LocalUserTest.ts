import "jasmine";
import {areCharacterLayersValid, isUserNameValid} from "../../../src/Connexion/LocalUser";

describe("isUserNameValid()", () => {
    it("should validate name with letters", () => {
        expect(isUserNameValid('toto')).toBe(true);
    });

    it("should not validate empty name", () => {
        expect(isUserNameValid('')).toBe(false);
    });
    it("should not validate string with at least 9 letters", () => {
        expect(isUserNameValid('abcdeabcd')).toBe(false);
    });
    it("should not validate spaces", () => {
        expect(isUserNameValid(' ')).toBe(false);
    });
    it("should not validate numbers", () => {
        expect(isUserNameValid('a12')).toBe(false);
    });
    it("should not validate special characters", () => {
        expect(isUserNameValid('a&-')).toBe(false);
    });
});

describe("areCharacterLayersValid()", () => {
    it("should validate default textures array", () => {
        expect(areCharacterLayersValid(['male1', 'male2'])).toBe(true);
    });

    it("should not validate an empty array", () => {
        expect(areCharacterLayersValid([])).toBe(false);
    });
    it("should not validate space only strings", () => {
        expect(areCharacterLayersValid([' ', 'male1'])).toBe(false);
    });

    it("should not validate empty strings", () => {
        expect(areCharacterLayersValid(['', 'male1'])).toBe(false);
    });
});
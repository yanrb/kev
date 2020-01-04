import {isOneOrZeroEditAway} from "./moreStrings";

test('TEST #1: isOneOrZeroEditAway', () => {
   expect(isOneOrZeroEditAway("kevin", "kevn")).toBe(true);
});

test('TEST #2: isOneOrZeroEditAway', () => {
   expect(isOneOrZeroEditAway("kevin", "kevins")).toBe(true);
});

test('TEST #3: isOneOrZeroEditAway', () => {
   expect(isOneOrZeroEditAway("kevin", "tevin")).toBe(true);
});

test('TEST #4: isOneOrZeroEditAway', () => {
   expect(isOneOrZeroEditAway("kevin", "tedie")).toBe(false);
});

test('TEST #5: isOneOrZeroEditAway', () => {
   expect(isOneOrZeroEditAway("kevin", "kevin")).toBe(true);
});

test('TEST #6: isOneOrZeroEditAway', () => {
   expect(isOneOrZeroEditAway("bryan", "chris")).toBe(true);
});
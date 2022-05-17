let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "hey";
// userName = userInput;

// Line 6 throws an error due to userName's type is a string but userInput's type is set to unknown. Work around is below.

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);

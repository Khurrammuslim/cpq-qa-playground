import { User } from "cypress/types/User.ts";

export const createUser = (
  overrides: Partial<User> = {}
): User => {
  return {
    name: "QA Automation User",
    username: "qa_user",
    email: "qa@example.com",
    ...overrides,
  };
};
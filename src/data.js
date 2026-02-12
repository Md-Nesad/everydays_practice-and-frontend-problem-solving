export const users = Array.from({ length: 10000 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@gmail.com`,
  role: i % 3 === 0 ? "Admin" : "User",
}));
